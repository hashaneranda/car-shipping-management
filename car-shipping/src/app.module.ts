import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { CarModule } from './feature/car/car.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './feature/user/users.module';
import { ConfigModule } from '@nestjs/config';
// import { CacheConfigModule } from './feature/cache/cache.module';

console.log('process.env.MONGODB_URI', process.env.MONGODB_URI);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
