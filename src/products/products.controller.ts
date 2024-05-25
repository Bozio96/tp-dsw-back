import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  Res,
  UsePipes, //Sirve para hacer validaciones en conjunto con el DTO
  ValidationPipe, //Vale de la mano con el UsePipes
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Request, Response } from 'express';
import { createProductDTO } from './dto/createProductDTO';
import { updateProductDTO } from './dto/updateProductDTO';

//Este parámetro del Controller cuenta como una ruta a la URL
@Controller('/products')
export class ProductsController {
  productsService: ProductsService;

  //Esta clase se ejecuta apenas la clase Controller es instanciada.
  constructor(productsService: ProductsService) {
    this.productsService /* el de arriba */ = productsService; //El del parámetro
  }

  //De forma similar pero más resumida se podría hacer asi:
  //constructor(private productsService: ProductsService){y acá no hace falta el this}

  //#region PRUEBAS
  //Aca se especifica el método http que va a usar y la URL (si es repetida, es mejor ponerla en el @Controller)
  //@Get('/saludo') //Podemos trabajar internamente con Express, ya que Nest está desarrollado en Express
  /* getSaludo(@Req() request: Request, @Res() response: Response) {
    response.status(200).json({
      message: 'Hola te saludo',
    });
  }
  @Get('/notFound')
  @HttpCode(404) //Aca podemos elegir el codigo de petición que queremos que retorne
  notFoundPage() {
    return 'oops! 404 not found';
  }
  @Get('/ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    //Este ParseIntPipe convierte el "string" del Param a un number.
    console.log(typeof num);
    return num + 2;
  }
 */
  //#endregion
  
  @Get()
  getAllProducts(@Query() query: any) {
    //Se importa el decorador, se ejecuta, se declara una variable y su tipo
    //Acá importamos la lógica para buscar todos los productos desde el Service
    //Puede ser busqueda en BD o peticion a una API
    return this.productsService.getAllProducts();
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    //El 'id' es el nombre que tiene el param, y el id:string es el nombre de la variable donde lo estoy guardando.
    return this.productsService.getProduct(parseInt(id));
  }

  @Post() //Desde el ThunderClient podemos simular que enviamos data desde el front, a través del "Body"
  //@UsePipes(new ValidationPipe()) //Aca iniciamos la validación, tambien podemos hacer la validación global en el main.ts
  createProduct(@Body() product: createProductDTO) {
    //Tambien en vez de pasarle un tipo de dato predefinido, podemos pasar un DTO
    return this.productsService.createProduct(product);
  }

  @Put()
  updateProduct(@Body() product: updateProductDTO) {
    return this.productsService.updateProduct(product);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id:string) {
    return this.productsService.deleteProduct(parseInt(id));
  }
}
