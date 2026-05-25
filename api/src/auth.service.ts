import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createHmac, timingSafeEqual } from 'node:crypto';

@Injectable()
export class AuthService {
  private readonly email = process.env.ADMIN_EMAIL ?? 'admin@cheetahagi.com';
  private readonly password = process.env.ADMIN_PASSWORD ?? 'change-this-password';
  private readonly secret = process.env.AUTH_SECRET ?? 'dev-only-secret-change-me';

  login(email: string, password: string) {
    if (email !== this.email || password !== this.password) {
      throw new UnauthorizedException('Invalid admin credentials');
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

  verify(token?: string) {
    if (!token) throw new UnauthorizedException('Missing token');
    const [encoded, signature] = token.split('.');
    if (!encoded || !signature) throw new UnauthorizedException('Invalid token');
    const expected = this.hmac(encoded);
    if (!this.safeEqual(signature, expected)) throw new UnauthorizedException('Invalid token');
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8')) as {
      sub: string;
      role: string;
      exp: number;
    };
    if (payload.exp < Date.now()) throw new UnauthorizedException('Token expired');
    return payload;
  }

  private sign(payload: Record<string, unknown>) {
    const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
    return `${encoded}.${this.hmac(encoded)}`;
  }

  private hmac(value: string) {
    return createHmac('sha256', this.secret).update(value).digest('base64url');
  }

  private safeEqual(a: string, b: string) {
    const left = Buffer.from(a);
    const right = Buffer.from(b);
    return left.length === right.length && timingSafeEqual(left, right);
  }
}
