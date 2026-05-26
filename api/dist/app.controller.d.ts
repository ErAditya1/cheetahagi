import { AuthService } from './auth.service';
import { StoreService } from './store.service';
import { MailService } from './mail.service';
export declare class AppController {
    private readonly store;
    private readonly auth;
    private readonly mail;
    constructor(store: StoreService, auth: AuthService, mail: MailService);
    health(): {
        ok: boolean;
        service: string;
        time: any;
    };
    login(body: {
        email: string;
        password: string;
    }): unknown;
    site(): unknown;
    products(): unknown;
    navbarProducts(): unknown;
    product(slug: string): unknown;
    posts(): unknown;
    post(slug: string): unknown;
    services(): unknown;
    service(slug: string): unknown;
    faqs(): unknown;
    caseStudies(): unknown;
    submitForm(body: Record<string, unknown>): unknown;
    track(body: Record<string, unknown>): unknown;
    overview(): unknown;
    adminList(collection: string): unknown;
    adminCreate(collection: string, body: Record<string, unknown>): unknown;
    adminUpdate(collection: string, id: string, body: Record<string, unknown>): unknown;
    adminDelete(collection: string, id: string): unknown;
    private normalize;
}
