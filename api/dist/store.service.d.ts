import { OnModuleInit } from '@nestjs/common';
import { Activity, Db } from './types';
type CollectionName = keyof Db;
export declare class StoreService implements OnModuleInit {
    onModuleInit(): any;
    private seedIfNeeded;
    list<T>(collection: CollectionName): Promise<T[]>;
    publicList<T extends {
        visible?: boolean;
        sortOrder?: number;
    }>(collection: CollectionName): Promise<T[]>;
    findBySlug<T extends {
        slug?: string;
    }>(collection: CollectionName, slug: string): Promise<T | undefined>;
    findById<T extends {
        id: string;
    }>(collection: CollectionName, id: string): Promise<T | undefined>;
    create<T extends Record<string, unknown>>(collection: CollectionName, payload: T): Promise<any>;
    update<T extends Record<string, unknown>>(collection: CollectionName, id: string, payload: Partial<T>): Promise<any>;
    delete(collection: CollectionName, id: string): Promise<boolean>;
    activity(activity: Omit<Activity, 'id' | 'createdAt'>): Promise<any>;
    getOverviewData(): unknown;
    private cleanDoc;
    private id;
}
export {};
