"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
let AuthService = class AuthService {
    email = process.env.ADMIN_EMAIL ?? 'admin@cheetahagi.com';
    password = process.env.ADMIN_PASSWORD ?? 'change-this-password';
    secret = process.env.AUTH_SECRET ?? 'dev-only-secret-change-me';
    login(email, password) {
        if (email !== this.email || password !== this.password) {
            throw new common_1.UnauthorizedException('Invalid admin credentials');
        }
        return {
            token: this.sign({
                sub: email,
                role: 'admin',
                exp: Date.now() + 1000 * 60 * 60 * 24,
            }),
            user: { email, role: 'admin' },
        };
    }
    verify(token) {
        if (!token)
            throw new common_1.UnauthorizedException('Missing token');
        const [encoded, signature] = token.split('.');
        if (!encoded || !signature)
            throw new common_1.UnauthorizedException('Invalid token');
        const expected = this.hmac(encoded);
        if (!this.safeEqual(signature, expected))
            throw new common_1.UnauthorizedException('Invalid token');
        const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));
        if (payload.exp < Date.now())
            throw new common_1.UnauthorizedException('Token expired');
        return payload;
    }
    sign(payload) {
        const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
        return `${encoded}.${this.hmac(encoded)}`;
    }
    hmac(value) {
        return (0, node_crypto_1.createHmac)('sha256', this.secret).update(value).digest('base64url');
    }
    safeEqual(a, b) {
        const left = Buffer.from(a);
        const right = Buffer.from(b);
        return left.length === right.length && (0, node_crypto_1.timingSafeEqual)(left, right);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map