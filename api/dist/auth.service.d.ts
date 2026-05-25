export declare class AuthService {
    private readonly email;
    private readonly password;
    private readonly secret;
    login(email: string, password: string): {
        token: string;
        user: {
            email: string;
            role: string;
        };
    };
    verify(token?: string): {
        sub: string;
        role: string;
        exp: number;
    };
    private sign;
    private hmac;
    private safeEqual;
}
