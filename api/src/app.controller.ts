import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AdminGuard } from './admin.guard';
import { AuthService } from './auth.service';
import { StoreService } from './store.service';
import { MailService } from './mail.service';
import { Db, Lead, Post as BlogPost, Product } from './types';

@Controller()
export class AppController {
  constructor(
    private readonly store: StoreService,
    private readonly auth: AuthService,
    private readonly mail: MailService,
  ) { }

  @Get('health')
  health() {
    return { ok: true, service: 'cheetah-api', time: new Date().toISOString() };
  }

  @Post('auth/login')
  async login(@Body() body: { email: string; password: string }) {
    const result = this.auth.login(body.email, body.password);
    await this.store.activity({
      type: 'auth.login',
      actor: body.email,
      message: 'Admin signed in',
    });
    return result;
  }

  @Get('public/site')
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

  @Get('public/products')
  async products() {
    return this.store.publicList('products');
  }

  @Get('public/products/navbar')
  async navbarProducts() {
    const products = await this.store.publicList<Product>('products');
    return products.filter((product) => product.showInNavbar);
  }

  @Get('public/products/:slug')
  async product(@Param('slug') slug: string) {
    const product = await this.store.findBySlug<Product>('products', slug);
    if (!product || product.visible === false) throw new NotFoundException('Product not found');
    return product;
  }

  @Get('public/posts')
  async posts() {
    return this.store.publicList('posts');
  }

  @Get('public/posts/:slug')
  async post(@Param('slug') slug: string) {
    const post = await this.store.findBySlug<BlogPost>('posts', slug);
    if (!post || post.visible === false) throw new NotFoundException('Post not found');
    return post;
  }

  @Get('public/services')
  async services() {
    return this.store.publicList('services');
  }

  @Get('public/services/:slug')
  async service(@Param('slug') slug: string) {
    const service = await this.store.findBySlug<any>('services', slug);
    if (!service || service.visible === false) throw new NotFoundException('Service not found');
    return service;
  }

  @Get('public/faqs')
  async faqs() {
    return this.store.publicList('faqs');
  }

  @Get('public/case-studies')
  async caseStudies() {
    return this.store.publicList('caseStudies');
  }

  @Post('public/forms')
  async submitForm(@Body() body: Record<string, unknown>) {
    const lead = await this.store.create<Partial<Lead>>('leads', {
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
    } catch (err) {
      console.error('Failed to send lead email alert:', err);
    }

    return { ok: true, id: lead.id };
  }

  @Post('public/activities')
  async track(@Body() body: Record<string, unknown>) {
    return this.store.activity({
      type: String(body.type ?? 'web.event'),
      actor: String(body.actor ?? 'visitor'),
      message: String(body.message ?? 'Visitor activity'),
      metadata: body.metadata as Record<string, unknown> | undefined,
    });
  }

  @UseGuards(AdminGuard)
  @Get('admin/overview')
  async overview() {
    return this.store.getOverviewData();
  }

  @UseGuards(AdminGuard)
  @Get('admin/:collection')
  async adminList(@Param('collection') collection: string) {
    return this.store.list(this.normalize(collection));
  }

  @UseGuards(AdminGuard)
  @Post('admin/:collection')
  async adminCreate(@Param('collection') collection: string, @Body() body: Record<string, unknown>) {
    const saved = await this.store.create(this.normalize(collection), body);
    await this.store.activity({ type: `${collection}.created`, actor: 'admin', message: `Created ${collection} item`, metadata: { id: saved.id } });
    return saved;
  }

  @UseGuards(AdminGuard)
  @Patch('admin/:collection/:id')
  async adminUpdate(@Param('collection') collection: string, @Param('id') id: string, @Body() body: Record<string, unknown>) {
    const updated = await this.store.update(this.normalize(collection), id, body);
    if (!updated) throw new NotFoundException('Item not found');
    await this.store.activity({ type: `${collection}.updated`, actor: 'admin', message: `Updated ${collection} item`, metadata: { id } });
    return updated;
  }

  @UseGuards(AdminGuard)
  @Delete('admin/:collection/:id')
  async adminDelete(@Param('collection') collection: string, @Param('id') id: string) {
    const success = await this.store.delete(this.normalize(collection), id);
    if (!success) throw new NotFoundException('Item not found');
    await this.store.activity({ type: `${collection}.deleted`, actor: 'admin', message: `Deleted ${collection} item`, metadata: { id } });
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
