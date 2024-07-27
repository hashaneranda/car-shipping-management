import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Car, CarDocument } from '../../schemas/car.schema';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { faker } from '@faker-js/faker';
import { QueryCarDto } from './dto/query-car.dto';
import { CarGateway } from './car.gateway';

@Injectable()
export class CarService implements OnModuleInit {
  constructor(
    @InjectModel(Car.name) private carModel: Model<CarDocument>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private carGateway: CarGateway,
  ) {}

  async onModuleInit() {
    // Call your function here
    await this.populateDummyData();
  }

  async findAll(query: QueryCarDto): Promise<{ data: Car[]; count: number }> {
    const cacheKey = JSON.stringify(query);
    const cachedResult = await this.cacheManager.get<{
      data: Car[];
      count: number;
    }>(cacheKey);

    if (cachedResult) {
      return cachedResult;
    }

    const { page = 1, limit = 10, make, model, year, shippingStatus } = query;

    const filter: any = {};
    if (make) filter.make = make;
    if (model) filter.model = model;
    if (year) filter.year = year;
    if (shippingStatus) filter.shippingStatus = shippingStatus;

    const data = await this.carModel
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const count = await this.carModel.countDocuments(filter).exec();

    const result = { data, count };
    await this.cacheManager.set(cacheKey, result, 300);

    return result;
  }

  async findById(id: string): Promise<Car> {
    return this.carModel.findById(id).exec();
  }

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const newCar = new this.carModel(createCarDto);
    await this.cacheManager.reset(); // Invalidate cache
    const savedCar = await newCar.save();
    this.carGateway.broadcastUpdate(savedCar); // Broadcast update with car data
    return savedCar;
  }

  async update(id: string, updateCarDto: UpdateCarDto): Promise<Car> {
    const updatedCar = await this.carModel
      .findByIdAndUpdate(id, updateCarDto, { new: true })
      .exec();
    await this.invalidateCache();
    this.carGateway.broadcastUpdate(updatedCar);
    return updatedCar;
  }

  async delete(id: string): Promise<Car> {
    const deletedCar = await this.carModel.findByIdAndDelete(id).exec();
    await this.invalidateCache();
    this.carGateway.broadcastUpdate(deletedCar, 'delete');
    return deletedCar;
  }

  async populateDummyData() {
    const cars: Car[] = [];
    for (let i = 0; i < 100; i++) {
      const createCarDto: CreateCarDto = {
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: faker.date.past().getFullYear(),
        shippingStatus: faker.helpers.arrayElement([
          'pending',
          'shipped',
          'delivered',
        ]),
      };

      cars.push(createCarDto);
    }
    await this.carModel.insertMany(cars);
  }

  private async invalidateCache() {
    const keys = await this.cacheManager.store.keys();
    for (const key of keys) {
      await this.cacheManager.del(key);
    }
  }
}
