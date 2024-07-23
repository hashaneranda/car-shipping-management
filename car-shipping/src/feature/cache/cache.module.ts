import { Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      store: typeof redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  exports: [CacheModule],
})
export class CacheConfigModule {}
