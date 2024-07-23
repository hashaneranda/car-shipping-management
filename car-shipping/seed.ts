import { NestFactory } from '@nestjs/core';
// import { AppModule } from './src/app.module';

import { faker } from '@faker-js/faker';
import { CarService } from 'src/feature/car/car.service';
import { CreateCarDto } from 'src/feature/car/dto/create-car.dto';
import { CarModule } from 'src/feature/car/car.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(CarModule);
  const carService = app.get(CarService);

  for (let i = 0; i < 50; i++) {
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

    await carService.create(createCarDto);
  }

  await app.close();
}

bootstrap().catch((err) => console.error(err));
