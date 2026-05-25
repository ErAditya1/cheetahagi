import { OnModuleInit } from '@nestjs/common';
import { Activity, Db } from './types';
type Collection = keyof Db;
export declare class StoreService implements OnModuleInit {
    private db;
    private readonly file;
    onModuleInit(): void;
    get data(): Db;
    list<T>(collection: Collection): T[];
    publicList<T extends {
        visible?: boolean;
        sortOrder?: number;
    }>(collection: Collection): T[];
    findBySlug<T extends {
        slug?: string;
    }>(collection: Collection, slug: string): T | undefined;
    findById<T extends {
        id: string;
    }>(collection: Collection, id: string): T | undefined;
    create<T extends Record<string, unknown>>(collection: Collection, payload: T): {
        id: string;
        createdAt: string;
        updatedAt: string;
    } & T;
    update<T extends Record<string, unknown>>(collection: Collection, id: string, payload: Partial<T>): Record<string, unknown> | undefined;
    delete(collection: Collection, id: string): boolean;
    activity(activity: Omit<Activity, 'id' | 'createdAt'>): {
        type: string;
        actor: string;
        message: string;
        metadata?: Record<string, unknown> | undefined;
        id: string;
        createdAt: string;
    };
    private load;
    private save;
    private id;
}
export {};
