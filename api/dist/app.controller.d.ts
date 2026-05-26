import { AuthService } from './auth.service';
import { StoreService } from './store.service';
import { MailService } from './mail.service';
import { Post as BlogPost, Product } from './types';
export declare class AppController {
    private readonly store;
    private readonly auth;
    private readonly mail;
    constructor(store: StoreService, auth: AuthService, mail: MailService);
    health(): {
        ok: boolean;
        service: string;
        time: string;
    };
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
        user: {
            email: string;
            role: string;
        };
    }>;
    site(): Promise<{
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
    }>;
    products(): Promise<{
        visible?: boolean;
        sortOrder?: number;
    }[]>;
    navbarProducts(): Promise<Product[]>;
    product(slug: string): Promise<Product>;
    posts(): Promise<{
        visible?: boolean;
        sortOrder?: number;
    }[]>;
    post(slug: string): Promise<BlogPost>;
    services(): Promise<{
        visible?: boolean;
        sortOrder?: number;
    }[]>;
    service(slug: string): Promise<any>;
    faqs(): Promise<{
        visible?: boolean;
        sortOrder?: number;
    }[]>;
    caseStudies(): Promise<{
        visible?: boolean;
        sortOrder?: number;
    }[]>;
    submitForm(body: Record<string, unknown>): Promise<{
        ok: boolean;
        id: any;
    }>;
    track(body: Record<string, unknown>): Promise<any>;
    overview(): Promise<{
        counts: {
            products: number;
            posts: number;
            leads: number;
            activities: number;
        };
        recentLeads: any[];
        recentActivities: any[];
    }>;
    adminList(collection: string): Promise<unknown[]>;
    adminCreate(collection: string, body: Record<string, unknown>): Promise<any>;
    adminUpdate(collection: string, id: string, body: Record<string, unknown>): Promise<any>;
    adminDelete(collection: string, id: string): Promise<{
        ok: boolean;
    }>;
    private normalize;
}
