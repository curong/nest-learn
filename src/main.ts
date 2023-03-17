import { NestFactory } from '@nestjs/core';
import { AppModule } from './default/app.module';
import { config, SwaggerConfig } from './util/swagger/swagger.config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  /* Swagger Config  */
  SwaggerConfig('/api', app, config);

  await app.listen(3000);

}
bootstrap();
