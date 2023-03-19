import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

export function SwaggerConfig(url: string, app: any, config: any) {
    const document = SwaggerModule.createDocument(app, config);
    return SwaggerModule.setup(url, app, document);
}