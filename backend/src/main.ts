import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Sanchez Api')
  .setDescription('The API for test')
  .setVersion('1.0')
  // .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
  .build();

  
app.use('/doc', basicAuth({
  challenge: true,
  users: { ['sanchez']: 'sanchez2022' },
}));

const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('/doc', app, document);
 
  await app.listen(3000);
}
bootstrap();
