import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { ValidationPipe } from '@nestjs/common'; //Importar en caso de querer hacer uso de las validaciones

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalPipes(new ValidationPipe({whitelist: true})) //En vez de crear un UsePipe en cada método del controlador, se coloca un global acá. El whitelist permite que sólo puedan ingresar al sistema los datos que especificamos en el DTO
  await app.listen(3000);
}
bootstrap();
