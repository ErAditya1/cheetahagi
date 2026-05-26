"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const mongoose_1 = __importStar(require("mongoose"));
const seed_data_1 = require("./seed-data");
const productSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    slug: { type: String },
    name: { type: String },
    tagline: { type: String },
    status: { type: String },
    tags: [String],
    description: { type: String },
    features: { type: mongoose_1.Schema.Types.Mixed },
    pricing: { type: String },
    href: { type: String },
    visible: { type: Boolean, default: true },
    showInNavbar: { type: Boolean, default: false },
    sortOrder: { type: Number, default: 99 },
    createdAt: { type: String },
    updatedAt: { type: String },
}, { collection: 'products', strict: false });
const postSchema = new mongoose_1.Schema({
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
const serviceSchema = new mongoose_1.Schema({
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
const caseStudySchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    slug: { type: String },
    client: { type: String },
    industry: { type: String },
    headline: { type: String },
    summary: { type: String },
    metrics: { type: mongoose_1.Schema.Types.Mixed },
    href: { type: String },
    visible: { type: Boolean, default: true },
    createdAt: { type: String },
    updatedAt: { type: String },
}, { collection: 'caseStudies', strict: false });
const faqSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    q: { type: String },
    a: { type: String },
    visible: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 99 },
    createdAt: { type: String },
    updatedAt: { type: String },
}, { collection: 'faqs', strict: false });
const leadSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    type: { type: String },
    source: { type: String },
    stage: { type: String },
    payload: { type: mongoose_1.Schema.Types.Mixed },
    status: { type: String, default: 'new' },
    createdAt: { type: String },
    updatedAt: { type: String },
}, { collection: 'leads', strict: false });
const activitySchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    type: { type: String },
    actor: { type: String },
    message: { type: String },
    metadata: { type: mongoose_1.Schema.Types.Mixed },
    createdAt: { type: String },
}, { collection: 'activities', strict: false });
function getModel(name, schema) {
    return mongoose_1.default.models[name] || mongoose_1.default.model(name, schema);
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
let StoreService = class StoreService {
    async onModuleInit() {
        const uri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/cheetah_agi';
        try {
            if (mongoose_1.default.connection.readyState === 0) {
                await mongoose_1.default.connect(uri);
                console.log('Successfully connected to MongoDB.');
            }
            await this.seedIfNeeded();
        }
        catch (err) {
            console.error('Error connecting to MongoDB:', err);
        }
    }
    async seedIfNeeded() {
        try {
            const productCount = await MODELS.products.countDocuments();
            if (productCount === 0) {
                console.log('Database empty. Seeding data...');
                let seed;
                const filePath = (0, node_path_1.resolve)(process.cwd(), process.env.DATA_FILE ?? './data/db.json');
                if ((0, node_fs_1.existsSync)(filePath)) {
                    try {
                        console.log(`Found db.json at ${filePath}. Seeding from file...`);
                        seed = JSON.parse((0, node_fs_1.readFileSync)(filePath, 'utf8'));
                    }
                    catch (e) {
                        console.error('Error parsing db.json, falling back to static seed data:', e);
                        seed = (0, seed_data_1.createSeedDb)();
                    }
                }
                else {
                    console.log('No db.json found. Seeding with default static seed data...');
                    seed = (0, seed_data_1.createSeedDb)();
                }
                for (const key of Object.keys(seed)) {
                    const model = MODELS[key];
                    if (model && Array.isArray(seed[key]) && seed[key].length > 0) {
                        await model.insertMany(seed[key]);
                        console.log(`Seeded collection: ${key} (${seed[key].length} items)`);
                    }
                }
            }
        }
        catch (err) {
            console.error('Failed to seed MongoDB database:', err);
        }
    }
    async list(collection) {
        const model = MODELS[collection];
        const items = await model.find().lean();
        return items.map(this.cleanDoc);
    }
    async publicList(collection) {
        const model = MODELS[collection];
        const items = await model.find({ visible: { $ne: false } }).sort({ sortOrder: 1 }).lean();
        return items.map(this.cleanDoc);
    }
    async findBySlug(collection, slug) {
        const model = MODELS[collection];
        const item = await model.findOne({ slug }).lean();
        return item ? this.cleanDoc(item) : undefined;
    }
    async findById(collection, id) {
        const model = MODELS[collection];
        const item = await model.findOne({ id }).lean();
        return item ? this.cleanDoc(item) : undefined;
    }
    async create(collection, payload) {
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
    async update(collection, id, payload) {
        const model = MODELS[collection];
        const updated = await model.findOneAndUpdate({ id }, {
            $set: {
                ...payload,
                id,
                updatedAt: new Date().toISOString(),
            },
        }, { new: true, lean: true });
        return updated ? this.cleanDoc(updated) : undefined;
    }
    async delete(collection, id) {
        const model = MODELS[collection];
        const res = await model.deleteOne({ id });
        return (res.deletedCount ?? 0) > 0;
    }
    async activity(activity) {
        const saved = {
            id: this.id(),
            createdAt: new Date().toISOString(),
            ...activity,
        };
        await MODELS.activities.create(saved);
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
        }
        catch (err) {
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
    cleanDoc(doc) {
        if (!doc)
            return doc;
        const cleaned = { ...doc };
        delete cleaned._id;
        delete cleaned.__v;
        return cleaned;
    }
    id() {
        return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    }
};
exports.StoreService = StoreService;
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)()
], StoreService);
//# sourceMappingURL=store.service.js.map