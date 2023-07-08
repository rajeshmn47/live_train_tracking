import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  });
  const port = process.env.PORT || 8000;

// Listen on `port` and 0.0.0.0
  await app.listen(port);
}
bootstrap();
