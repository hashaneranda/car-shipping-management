// src/car/car.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { QueryCarDto } from './dto/query-car.dto';

@ApiTags('cars')
@ApiBearerAuth()
@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  @ApiOperation({ summary: 'Get all cars' })
  async getCars(@Query() query: QueryCarDto) {
    return this.carService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get car detail' })
  async getCar(@Param('id') id: string) {
    return this.carService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Add a new car' })
  async addCar(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: "Update a car's status" })
  async updateCar(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a car' })
  async deleteCar(@Param('id') id: string) {
    return this.carService.delete(id);
  }
}
