import { Injectable, OnModuleInit } from '@nestjs/common';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import mongoose, { Schema } from 'mongoose';
import { createSeedDb } from './seed-data';
import { Activity, Db } from './types';

type CollectionName = keyof Db;

const productSchema = new Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String },
  name: { type: String },
  tagline: { type: String },
  status: { type: String },
  tags: [String],
  description: { type: String },
  features: { type: Schema.Types.Mixed },
  pricing: { type: String },
  href: { type: String },
  visible: { type: Boolean, default: true },
  showInNavbar: { type: Boolean, default: false },
  sortOrder: { type: Number, default: 99 },
  createdAt: { type: String },
  updatedAt: { type: String },
}, { collection: 'products', strict: false });

const postSchema = new Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String },
  title: { type: String },
  excerpt: { type: String },
  category: { type: String },
  date: { type: String },
  readTime: { type: String },
  featured: { type: Boolean, default: false },
  body: { type: String },
  visible: { type: Boolean, default: true },
  createdAt: { type: String },
  updatedAt: { type: String },
}, { collection: 'posts', strict: false });

const serviceSchema = new Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String },
  name: { type: String },
  tagline: { type: String },
  longDescription: { type: String },
  deliverables: [String],
  timeline: { type: String },
  investment: { type: String },
  visible: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 99 },
  createdAt: { type: String },
  updatedAt: { type: String },
}, { collection: 'services', strict: false });

const caseStudySchema = new Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String },
  client: { type: String },
  industry: { type: String },
  headline: { type: String },
  summary: { type: String },
  metrics: { type: Schema.Types.Mixed },
  href: { type: String },
  visible: { type: Boolean, default: true },
  createdAt: { type: String },
  updatedAt: { type: String },
}, { collection: 'caseStudies', strict: false });

const faqSchema = new Schema({
  id: { type: String, required: true, unique: true },
  q: { type: String },
  a: { type: String },
  visible: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 99 },
  createdAt: { type: String },
  updatedAt: { type: String },
}, { collection: 'faqs', strict: false });

const leadSchema = new Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String },
  source: { type: String },
  stage: { type: String },
  payload: { type: Schema.Types.Mixed },
  status: { type: String, default: 'new' },
  createdAt: { type: String },
  updatedAt: { type: String },
}, { collection: 'leads', strict: false });

const activitySchema = new Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String },
  actor: { type: String },
  message: { type: String },
  metadata: { type: Schema.Types.Mixed },
  createdAt: { type: String },
}, { collection: 'activities', strict: false });

function getModel(name: string, schema: Schema) {
  return mongoose.models[name] || mongoose.model(name, schema);
}

const MODELS = {
  products: getModel('Product', productSchema),
  posts: getModel('Post', postSchema),
  services: getModel('Service', serviceSchema),
  caseStudies: getModel('CaseStudy', caseStudySchema),
  faqs: getModel('Faq', faqSchema),
  leads: getModel('Lead', leadSchema),
  activities: getModel('Activity', activitySchema),
};

@Injectable()
export class StoreService implements OnModuleInit {
  async onModuleInit() {
    const uri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/cheetah_agi';
    try {
      if (mongoose.connection.readyState === 0) {
        await mongoose.connect(uri);
        console.log('Successfully connected to MongoDB.');
      }
      await this.seedIfNeeded();
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  }

  private async seedIfNeeded() {
    try {
      const productCount = await MODELS.products.countDocuments();
      if (productCount === 0) {
        console.log('Database empty. Seeding data...');
        let seed: Db;
        const filePath = resolve(process.cwd(), process.env.DATA_FILE ?? './data/db.json');
        if (existsSync(filePath)) {
          try {
            console.log(`Found db.json at ${filePath}. Seeding from file...`);
            seed = JSON.parse(readFileSync(filePath, 'utf8')) as Db;
          } catch (e) {
            console.error('Error parsing db.json, falling back to static seed data:', e);
            seed = createSeedDb();
          }
        } else {
          console.log('No db.json found. Seeding with default static seed data...');
          seed = createSeedDb();
        }

        for (const key of Object.keys(seed) as Array<CollectionName>) {
          const model = MODELS[key];
          if (model && Array.isArray(seed[key]) && seed[key].length > 0) {
            await model.insertMany(seed[key]);
            console.log(`Seeded collection: ${key} (${seed[key].length} items)`);
          }
        }
      }
    } catch (err) {
      console.error('Failed to seed MongoDB database:', err);
    }
  }

  async list<T>(collection: CollectionName): Promise<T[]> {
    const model = MODELS[collection];
    const items = await model.find().lean();
    return items.map(this.cleanDoc) as unknown as T[];
  }

  async publicList<T extends { visible?: boolean; sortOrder?: number }>(collection: CollectionName): Promise<T[]> {
    const model = MODELS[collection];
    const items = await model.find({ visible: { $ne: false } }).sort({ sortOrder: 1 }).lean();
    return items.map(this.cleanDoc) as unknown as T[];
  }

  async findBySlug<T extends { slug?: string }>(collection: CollectionName, slug: string): Promise<T | undefined> {
    const model = MODELS[collection];
    const item = await model.findOne({ slug }).lean();
    return item ? (this.cleanDoc(item) as T) : undefined;
  }

  async findById<T extends { id: string }>(collection: CollectionName, id: string): Promise<T | undefined> {
    const model = MODELS[collection];
    const item = await model.findOne({ id }).lean();
    return item ? (this.cleanDoc(item) as T) : undefined;
  }

  async create<T extends Record<string, unknown>>(collection: CollectionName, payload: T): Promise<any> {
    const model = MODELS[collection];
    const item = {
      id: this.id(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...payload,
    };
    await model.create(item);
    return item;
  }

  async update<T extends Record<string, unknown>>(collection: CollectionName, id: string, payload: Partial<T>): Promise<any> {
    const model = MODELS[collection];
    const updated = await model.findOneAndUpdate(
      { id },
      {
        $set: {
          ...payload,
          id, // ensure id stays the same
          updatedAt: new Date().toISOString(),
        },
      },
      { new: true, lean: true }
    );
    return updated ? this.cleanDoc(updated) : undefined;
  }

  async delete(collection: CollectionName, id: string): Promise<boolean> {
    const model = MODELS[collection];
    const res = await model.deleteOne({ id });
    return (res.deletedCount ?? 0) > 0;
  }

  async activity(activity: Omit<Activity, 'id' | 'createdAt'>): Promise<any> {
    const saved = {
      id: this.id(),
      createdAt: new Date().toISOString(),
      ...activity,
    };
    await MODELS.activities.create(saved);

    // Keep activities capped at 500
    try {
      const count = await MODELS.activities.countDocuments();
      if (count > 500) {
        const thresholdDocs = await MODELS.activities
          .find()
          .sort({ createdAt: -1 })
          .skip(500)
          .limit(1)
          .lean();
        if (thresholdDocs.length > 0) {
          await MODELS.activities.deleteMany({
            createdAt: { $lte: thresholdDocs[0].createdAt },
          });
        }
      }
    } catch (err) {
      console.error('Error capping activities:', err);
    }
    return saved;
  }

  async getOverviewData() {
    const productsCount = await MODELS.products.countDocuments();
    const postsCount = await MODELS.posts.countDocuments();
    const leadsCount = await MODELS.leads.countDocuments();
    const activitiesCount = await MODELS.activities.countDocuments();

    const recentLeads = await MODELS.leads
      .find()
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    const recentActivities = await MODELS.activities
      .find()
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    return {
      counts: {
        products: productsCount,
        posts: postsCount,
        leads: leadsCount,
        activities: activitiesCount,
      },
      recentLeads: recentLeads.map(this.cleanDoc),
      recentActivities: recentActivities.map(this.cleanDoc),
    };
  }

  private cleanDoc(doc: any) {
    if (!doc) return doc;
    const cleaned = { ...doc };
    delete cleaned._id;
    delete cleaned.__v;
    return cleaned;
  }

  private id() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }
}
