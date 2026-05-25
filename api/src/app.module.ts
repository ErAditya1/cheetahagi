import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminGuard } from './admin.guard';
import { AuthService } from './auth.service';
import { StoreService } from './store.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [StoreService, AuthService, AdminGuard],
})
export class AppModule {}
