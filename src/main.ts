import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { config } from './config/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  const options = new DocumentBuilder()
    .setTitle('TODO-LIST')
    .setDescription('REST API DOCS')
    .setVersion('1.0')
    .addTag('todoList')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  // app.enableCors({
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  //   origin: config.corsFrontDomain,
  // });
  await app.listen(3000);
}
bootstrap();
