"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
function loadEnv() {
    const envPath = (0, node_path_1.resolve)(process.cwd(), '.env');
    if ((0, node_fs_1.existsSync)(envPath)) {
        const content = (0, node_fs_1.readFileSync)(envPath, 'utf8');
        for (const line of content.split('\n')) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#'))
                continue;
            const index = trimmed.indexOf('=');
            if (index > 0) {
                const key = trimmed.slice(0, index).trim();
                let val = trimmed.slice(index + 1).trim();
                if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                    val = val.slice(1, -1);
                }
                const existing = process.env[key];
                if (existing === undefined) {
                    process.env[key] = val;
                }
                else {
                    const strExisting = String(existing);
                    if ((strExisting.startsWith('"') && strExisting.endsWith('"')) || (strExisting.startsWith("'") && strExisting.endsWith("'"))) {
                        process.env[key] = strExisting.slice(1, -1);
                    }
                }
            }
        }
    }
}
async function bootstrap() {
    loadEnv();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: process.env.CORS?.split(',') || [
            'http://localhost:4001',
            'http://localhost:4002',
            'http://127.0.0.1:4001',
            'http://127.0.0.1:4002',
            'https://cheetahagi.com',
            'https://billionairevox.com',
            'https://api.cheetahagi.com',
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
        allowedHeaders: 'Content-Type, Accept, Authorization',
    });
    await app.listen(process.env.API_PORT ?? process.env.PORT ?? 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map