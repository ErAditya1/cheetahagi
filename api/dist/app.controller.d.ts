import { AuthService } from './auth.service';
import { StoreService } from './store.service';
import { Lead, Post as BlogPost, Product } from './types';
export declare class AppController {
    private readonly store;
    private readonly auth;
    constructor(store: StoreService, auth: AuthService);
    health(): {
        ok: boolean;
        service: string;
        time: string;
    };
    login(body: {
        email: string;
        password: string;
    }): {
        token: string;
        user: {
            email: string;
            role: string;
        };
    };
    site(): {
        products: {
            visible?: boolean;
            sortOrder?: number;
        }[];
        posts: {
            visible?: boolean;
            sortOrder?: number;
        }[];
        services: {
            visible?: boolean;
            sortOrder?: number;
        }[];
        faqs: {
            visible?: boolean;
            sortOrder?: number;
        }[];
        caseStudies: {
            visible?: boolean;
            sortOrder?: number;
        }[];
    };
    products(): {
        visible?: boolean;
        sortOrder?: number;
    }[];
    navbarProducts(): Product[];
    product(slug: string): Product;
    posts(): {
        visible?: boolean;
        sortOrder?: number;
    }[];
    post(slug: string): BlogPost;
    services(): {
        visible?: boolean;
        sortOrder?: number;
    }[];
    service(slug: string): any;
    faqs(): {
        visible?: boolean;
        sortOrder?: number;
    }[];
    caseStudies(): {
        visible?: boolean;
        sortOrder?: number;
    }[];
    submitForm(body: Record<string, unknown>): {
        ok: boolean;
        id: string;
    };
    track(body: Record<string, unknown>): {
        type: string;
        actor: string;
        message: string;
        metadata?: Record<string, unknown> | undefined;
        id: string;
        createdAt: string;
    };
    overview(): {
        counts: {
            products: number;
            posts: number;
            leads: number;
            activities: number;
        };
        recentLeads: Lead[];
        recentActivities: import("./types").Activity[];
    };
    adminList(collection: string): unknown[];
    adminCreate(collection: string, body: Record<string, unknown>): {
        id: string;
        createdAt: string;
        updatedAt: string;
    } & Record<string, unknown>;
    adminUpdate(collection: string, id: string, body: Record<string, unknown>): Record<string, unknown>;
    adminDelete(collection: string, id: string): {
        ok: boolean;
    };
    private normalize;
}
