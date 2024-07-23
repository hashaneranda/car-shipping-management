// src/car/car.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Car, CarDocument } from '../../schemas/car.schema';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name) private carModel: Model<CarDocument>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findAll(query: any): Promise<Car[]> {
    const cacheKey = `cars:${JSON.stringify(query)}`;
    const cachedData = await this.cacheManager.get<Car[]>(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    const cars = await this.carModel.find(query).exec();
    await this.cacheManager.set(cacheKey, cars, 300); // Cache for 5 minutes

    return cars;
  }

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const newCar = new this.carModel(createCarDto);
    await this.cacheManager.reset(); // Invalidate cache
    return newCar.save();
  }

  async update(id: string, updateCarDto: UpdateCarDto): Promise<Car> {
    const updatedCar = await this.carModel
      .findByIdAndUpdate(id, updateCarDto, { new: true })
      .exec();
    await this.cacheManager.reset(); // Invalidate cache
    return updatedCar;
  }

  async delete(id: string): Promise<Car> {
    const deletedCar = await this.carModel.findByIdAndDelete(id).exec();
    await this.cacheManager.reset(); // Invalidate cache
    return deletedCar;
  }
}
