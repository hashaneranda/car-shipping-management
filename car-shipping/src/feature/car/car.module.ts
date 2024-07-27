import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from '../../schemas/car.schema';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { CacheConfigModule } from '../cache/cache.module';
import { CarGateway } from './car.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),
    CacheConfigModule,
  ],
  controllers: [CarController],
  providers: [CarService, CarGateway],
  exports: [CarModule],
})
export class CarModule {}
