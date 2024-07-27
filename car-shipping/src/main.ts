import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Car Shipping Management System')
    .setDescription('API documentation for the Car Shipping Management System')
    .setVersion('1.0')
    .addTag('cars')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  app.useWebSocketAdapter(new IoAdapter(app));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
