"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const admin_guard_1 = require("./admin.guard");
const auth_service_1 = require("./auth.service");
const store_service_1 = require("./store.service");
const mail_service_1 = require("./mail.service");
let AppController = class AppController {
    store;
    auth;
    mail;
    constructor(store, auth, mail) {
        this.store = store;
        this.auth = auth;
        this.mail = mail;
    }
    health() {
        return { ok: true, service: 'cheetah-api', time: new Date().toISOString() };
    }
    async login(body) {
        const result = this.auth.login(body.email, body.password);
        await this.store.activity({
            type: 'auth.login',
            actor: body.email,
            message: 'Admin signed in',
        });
        return result;
    }
    async site() {
        const [products, posts, services, faqs, caseStudies] = await Promise.all([
            this.store.publicList('products'),
            this.store.publicList('posts'),
            this.store.publicList('services'),
            this.store.publicList('faqs'),
            this.store.publicList('caseStudies'),
        ]);
        return {
            products,
            posts,
            services,
            faqs,
            caseStudies,
        };
    }
    async products() {
        return this.store.publicList('products');
    }
    async navbarProducts() {
        const products = await this.store.publicList('products');
        return products.filter((product) => product.showInNavbar);
    }
    async product(slug) {
        const product = await this.store.findBySlug('products', slug);
        if (!product || product.visible === false)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
    async posts() {
        return this.store.publicList('posts');
    }
    async post(slug) {
        const post = await this.store.findBySlug('posts', slug);
        if (!post || post.visible === false)
            throw new common_1.NotFoundException('Post not found');
        return post;
    }
    async services() {
        return this.store.publicList('services');
    }
    async service(slug) {
        const service = await this.store.findBySlug('services', slug);
        if (!service || service.visible === false)
            throw new common_1.NotFoundException('Service not found');
        return service;
    }
    async faqs() {
        return this.store.publicList('faqs');
    }
    async caseStudies() {
        return this.store.publicList('caseStudies');
    }
    async submitForm(body) {
        const lead = await this.store.create('leads', {
            type: String(body.type ?? 'lead'),
            source: String(body.source ?? 'web'),
            stage: body.stage ? String(body.stage) : undefined,
            status: 'new',
            payload: body,
        });
        await this.store.activity({
            type: 'lead.created',
            actor: 'web',
            message: `New ${body.stage ?? 'lead'} submission from ${body.source ?? 'web'}`,
            metadata: { leadId: lead.id },
        });
        const leadHandlerEmail = process.env.LEAD_HANDLER_EMAIL || 'mradityaji2@gmail.com';
        try {
            await this.mail.sendLeadNotificationEmail(leadHandlerEmail, lead);
        }
        catch (err) {
            console.error('Failed to send lead email alert:', err);
        }
        return { ok: true, id: lead.id };
    }
    async track(body) {
        return this.store.activity({
            type: String(body.type ?? 'web.event'),
            actor: String(body.actor ?? 'visitor'),
            message: String(body.message ?? 'Visitor activity'),
            metadata: body.metadata,
        });
    }
    async overview() {
        return this.store.getOverviewData();
    }
    async adminList(collection) {
        return this.store.list(this.normalize(collection));
    }
    async adminCreate(collection, body) {
        const saved = await this.store.create(this.normalize(collection), body);
        await this.store.activity({ type: `${collection}.created`, actor: 'admin', message: `Created ${collection} item`, metadata: { id: saved.id } });
        return saved;
    }
    async adminUpdate(collection, id, body) {
        const updated = await this.store.update(this.normalize(collection), id, body);
        if (!updated)
            throw new common_1.NotFoundException('Item not found');
        await this.store.activity({ type: `${collection}.updated`, actor: 'admin', message: `Updated ${collection} item`, metadata: { id } });
        return updated;
    }
    async adminDelete(collection, id) {
        const success = await this.store.delete(this.normalize(collection), id);
        if (!success)
            throw new common_1.NotFoundException('Item not found');
        await this.store.activity({ type: `${collection}.deleted`, actor: 'admin', message: `Deleted ${collection} item`, metadata: { id } });
        return { ok: true };
    }
    normalize(collection) {
        const map = {
            products: 'products',
            posts: 'posts',
            services: 'services',
            faqs: 'faqs',
            'case-studies': 'caseStudies',
            leads: 'leads',
            activities: 'activities',
        };
        const key = map[collection];
        if (!key)
            throw new common_1.NotFoundException('Unknown collection');
        return key;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "health", null);
__decorate([
    (0, common_1.Post)('auth/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('public/site'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "site", null);
__decorate([
    (0, common_1.Get)('public/products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "products", null);
__decorate([
    (0, common_1.Get)('public/products/navbar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "navbarProducts", null);
__decorate([
    (0, common_1.Get)('public/products/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "product", null);
__decorate([
    (0, common_1.Get)('public/posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "posts", null);
__decorate([
    (0, common_1.Get)('public/posts/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "post", null);
__decorate([
    (0, common_1.Get)('public/services'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "services", null);
__decorate([
    (0, common_1.Get)('public/services/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "service", null);
__decorate([
    (0, common_1.Get)('public/faqs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "faqs", null);
__decorate([
    (0, common_1.Get)('public/case-studies'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "caseStudies", null);
__decorate([
    (0, common_1.Post)('public/forms'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof Record !== "undefined" && Record) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "submitForm", null);
__decorate([
    (0, common_1.Post)('public/activities'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Record !== "undefined" && Record) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "track", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)('admin/overview'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "overview", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)('admin/:collection'),
    __param(0, (0, common_1.Param)('collection')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "adminList", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)('admin/:collection'),
    __param(0, (0, common_1.Param)('collection')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof Record !== "undefined" && Record) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "adminCreate", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)('admin/:collection/:id'),
    __param(0, (0, common_1.Param)('collection')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_d = typeof Record !== "undefined" && Record) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "adminUpdate", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)('admin/:collection/:id'),
    __param(0, (0, common_1.Param)('collection')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "adminDelete", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [store_service_1.StoreService,
        auth_service_1.AuthService,
        mail_service_1.MailService])
], AppController);
//# sourceMappingURL=app.controller.js.map