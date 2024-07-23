import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { CarModule } from './feature/car/car.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './feature/user/users.module';
// import { CacheConfigModule } from './feature/cache/cache.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    CarModule,
    UsersModule,
    AuthModule,
    // CacheConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
