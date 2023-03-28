import { NestFactory } from '@nestjs/core';
import { config, SwaggerConfig } from './config/swagger/swagger.config';
import { AppModule } from './default/app.module';
import * as yamlConfig from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* Swagger Config  */
  SwaggerConfig('/api', app, config);

  await app.listen(3000);

}
bootstrap();
