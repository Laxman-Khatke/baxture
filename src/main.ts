process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ClusterService } from './cluster.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
//  console.log(`Your server is running on port no: ${process.env.PORT}`);
}
ClusterService.clusterizeApp(bootstrap);
