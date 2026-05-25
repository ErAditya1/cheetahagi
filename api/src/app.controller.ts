import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AdminGuard } from './admin.guard';
import { AuthService } from './auth.service';
import { StoreService } from './store.service';
import { Db, Lead, Post as BlogPost, Product } from './types';

@Controller()
export class AppController {
  constructor(
    private readonly store: StoreService,
    private readonly auth: AuthService,
  ) {}

  @Get('health')
  health() {
    return { ok: true, service: 'cheetah-api', time: new Date().toISOString() };
  }

  @Post('auth/login')
  login(@Body() body: { email: string; password: string }) {
    const result = this.auth.login(body.email, body.password);
    this.store.activity({
      type: 'auth.login',
      actor: body.email,
      message: 'Admin signed in',
    });
    return result;
  }

  @Get('public/site')
  site() {
    return {
      products: this.store.publicList('products'),
      posts: this.store.publicList('posts'),
      services: this.store.publicList('services'),
      faqs: this.store.publicList('faqs'),
      caseStudies: this.store.publicList('caseStudies'),
    };
  }

  @Get('public/products')
  products() {
    return this.store.publicList('products');
  }

  @Get('public/products/navbar')
  navbarProducts() {
    return this.store.publicList<Product>('products').filter((product) => product.showInNavbar);
  }

  @Get('public/products/:slug')
  product(@Param('slug') slug: string) {
    const product = this.store.findBySlug<Product>('products', slug);
    if (!product || product.visible === false) throw new NotFoundException('Product not found');
    return product;
  }

  @Get('public/posts')
  posts() {
    return this.store.publicList('posts');
  }

  @Get('public/posts/:slug')
  post(@Param('slug') slug: string) {
    const post = this.store.findBySlug<BlogPost>('posts', slug);
    if (!post || post.visible === false) throw new NotFoundException('Post not found');
    return post;
  }

  @Get('public/services')
  services() {
    return this.store.publicList('services');
  }

  @Get('public/services/:slug')
  service(@Param('slug') slug: string) {
    const service = this.store.findBySlug<any>('services', slug);
    if (!service || service.visible === false) throw new NotFoundException('Service not found');
    return service;
  }

  @Get('public/faqs')
  faqs() {
    return this.store.publicList('faqs');
  }

  @Get('public/case-studies')
  caseStudies() {
    return this.store.publicList('caseStudies');
  }

  @Post('public/forms')
  submitForm(@Body() body: Record<string, unknown>) {
    const lead = this.store.create<Partial<Lead>>('leads', {
      type: String(body.type ?? 'lead'),
      source: String(body.source ?? 'web'),
      stage: body.stage ? String(body.stage) : undefined,
      status: 'new',
      payload: body,
    });
    this.store.activity({
      type: 'lead.created',
      actor: 'web',
      message: `New ${body.stage ?? 'lead'} submission from ${body.source ?? 'web'}`,
      metadata: { leadId: lead.id },
    });
    return { ok: true, id: lead.id };
  }

  @Post('public/activities')
  track(@Body() body: Record<string, unknown>) {
    return this.store.activity({
      type: String(body.type ?? 'web.event'),
      actor: String(body.actor ?? 'visitor'),
      message: String(body.message ?? 'Visitor activity'),
      metadata: body.metadata as Record<string, unknown> | undefined,
    });
  }

  @UseGuards(AdminGuard)
  @Get('admin/overview')
  overview() {
    const db = this.store.data;
    return {
      counts: {
        products: db.products.length,
        posts: db.posts.length,
        leads: db.leads.length,
        activities: db.activities.length,
      },
      recentLeads: db.leads.slice(-5).reverse(),
      recentActivities: db.activities.slice(0, 10),
    };
  }

  @UseGuards(AdminGuard)
  @Get('admin/:collection')
  adminList(@Param('collection') collection: string) {
    return this.store.list(this.normalize(collection));
  }

  @UseGuards(AdminGuard)
  @Post('admin/:collection')
  adminCreate(@Param('collection') collection: string, @Body() body: Record<string, unknown>) {
    const saved = this.store.create(this.normalize(collection), body);
    this.store.activity({ type: `${collection}.created`, actor: 'admin', message: `Created ${collection} item`, metadata: { id: saved.id } });
    return saved;
  }

  @UseGuards(AdminGuard)
  @Patch('admin/:collection/:id')
  adminUpdate(@Param('collection') collection: string, @Param('id') id: string, @Body() body: Record<string, unknown>) {
    const updated = this.store.update(this.normalize(collection), id, body);
    if (!updated) throw new NotFoundException('Item not found');
    this.store.activity({ type: `${collection}.updated`, actor: 'admin', message: `Updated ${collection} item`, metadata: { id } });
    return updated;
  }

  @UseGuards(AdminGuard)
  @Delete('admin/:collection/:id')
  adminDelete(@Param('collection') collection: string, @Param('id') id: string) {
    if (!this.store.delete(this.normalize(collection), id)) throw new NotFoundException('Item not found');
    this.store.activity({ type: `${collection}.deleted`, actor: 'admin', message: `Deleted ${collection} item`, metadata: { id } });
    return { ok: true };
  }

  private normalize(collection: string) {
    const map: Record<string, keyof Db> = {
      products: 'products',
      posts: 'posts',
      services: 'services',
      faqs: 'faqs',
      'case-studies': 'caseStudies',
      leads: 'leads',
      activities: 'activities',
    };
    const key = map[collection];
    if (!key) throw new NotFoundException('Unknown collection');
    return key;
  }
}
