"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const seed_data_1 = require("./seed-data");
let StoreService = class StoreService {
    db;
    file = (0, node_path_1.resolve)(process.cwd(), process.env.DATA_FILE ?? './data/db.json');
    onModuleInit() {
        this.load();
    }
    get data() {
        return this.db;
    }
    list(collection) {
        return [...this.db[collection]];
    }
    publicList(collection) {
        return this.list(collection)
            .filter((item) => item.visible !== false)
            .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
    }
    findBySlug(collection, slug) {
        return this.list(collection).find((item) => item.slug === slug);
    }
    findById(collection, id) {
        return this.list(collection).find((item) => item.id === id);
    }
    create(collection, payload) {
        const item = {
            id: this.id(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            ...payload,
        };
        this.db[collection].push(item);
        this.save();
        return item;
    }
    update(collection, id, payload) {
        const items = this.db[collection];
        const index = items.findIndex((item) => item.id === id);
        if (index === -1)
            return undefined;
        items[index] = {
            ...items[index],
            ...payload,
            id,
            updatedAt: new Date().toISOString(),
        };
        this.save();
        return items[index];
    }
    delete(collection, id) {
        const items = this.db[collection];
        const next = items.filter((item) => item.id !== id);
        if (next.length === items.length)
            return false;
        this.db[collection] = next;
        this.save();
        return true;
    }
    activity(activity) {
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
    load() {
        (0, node_fs_1.mkdirSync)((0, node_path_1.dirname)(this.file), { recursive: true });
        try {
            this.db = JSON.parse((0, node_fs_1.readFileSync)(this.file, 'utf8'));
        }
        catch {
            this.db = (0, seed_data_1.createSeedDb)();
            this.save();
        }
    }
    save() {
        (0, node_fs_1.mkdirSync)((0, node_path_1.dirname)(this.file), { recursive: true });
        (0, node_fs_1.writeFileSync)(this.file, JSON.stringify(this.db, null, 2));
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