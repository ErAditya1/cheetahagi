import { Injectable, OnModuleInit } from '@nestjs/common';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { createSeedDb } from './seed-data';
import { Activity, Db } from './types';

type Collection = keyof Db;

@Injectable()
export class StoreService implements OnModuleInit {
  private db!: Db;
  private readonly file = resolve(process.cwd(), process.env.DATA_FILE ?? './data/db.json');

  onModuleInit() {
    this.load();
  }

  get data() {
    return this.db;
  }

  list<T>(collection: Collection): T[] {
    return [...(this.db[collection] as T[])];
  }

  publicList<T extends { visible?: boolean; sortOrder?: number }>(collection: Collection): T[] {
    return this.list<T>(collection)
      .filter((item) => item.visible !== false)
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
  }

  findBySlug<T extends { slug?: string }>(collection: Collection, slug: string): T | undefined {
    return this.list<T>(collection).find((item) => item.slug === slug);
  }

  findById<T extends { id: string }>(collection: Collection, id: string): T | undefined {
    return this.list<T>(collection).find((item) => item.id === id);
  }

  create<T extends Record<string, unknown>>(collection: Collection, payload: T) {
    const item = {
      id: this.id(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...payload,
    };
    (this.db[collection] as unknown[]).push(item);
    this.save();
    return item;
  }

  update<T extends Record<string, unknown>>(collection: Collection, id: string, payload: Partial<T>) {
    const items = this.db[collection] as Array<Record<string, unknown>>;
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return undefined;
    items[index] = {
      ...items[index],
      ...payload,
      id,
      updatedAt: new Date().toISOString(),
    };
    this.save();
    return items[index];
  }

  delete(collection: Collection, id: string) {
    const items = this.db[collection] as Array<{ id: string }>;
    const next = items.filter((item) => item.id !== id);
    if (next.length === items.length) return false;
    (this.db as unknown as Record<Collection, unknown>)[collection] = next;
    this.save();
    return true;
  }

  activity(activity: Omit<Activity, 'id' | 'createdAt'>) {
    const saved = {
      id: this.id(),
      createdAt: new Date().toISOString(),
      ...activity,
    };
    this.db.activities.unshift(saved);
    this.db.activities = this.db.activities.slice(0, 500);
    this.save();
    return saved;
  }

  private load() {
    mkdirSync(dirname(this.file), { recursive: true });
    try {
      this.db = JSON.parse(readFileSync(this.file, 'utf8')) as Db;
    } catch {
      this.db = createSeedDb();
      this.save();
    }
  }

  private save() {
    mkdirSync(dirname(this.file), { recursive: true });
    writeFileSync(this.file, JSON.stringify(this.db, null, 2));
  }

  private id() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }
}
