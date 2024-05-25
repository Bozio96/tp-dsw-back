import { Injectable, NotFoundException } from '@nestjs/common';
import { createProductDTO } from './dto/createProductDTO';
import { updateProductDTO } from './dto/updateProductDTO';

@Injectable()
export class ProductsService {
  private products = []; //de momento acá es donde vamos a almacenar los productos, luego en una DB

  // @Get('/') //En el servicio no deberían ir los decoradores, ya que el servicio encapsulan logica de negocio y acceso a datos
  //El controlador es quien se encarga de los métodos HTTP
  getAllProducts() {
    return this.products;
  }

  getProduct(id: number): any {
    const productFound = this.products.find((prod) => prod.id === id);
    if (!productFound) {
      return new NotFoundException(
        `El producto con id ${id} no fué encontrado`,
      );
    } else {
      return productFound;
    }
  }

  // @Post('/')
  createProduct(product: createProductDTO): Array<any> {
    //Aca se le puede poner el Tipo de dato que queremos que retorne, propio de TS. En este caso es un Array de cualquier tipo de datos dentro
    this.products.push({ ...product, id: this.products.length + 1 });
    return this.products;
  }

  // @Put('/')
  updateProduct(product: updateProductDTO) {
    console.log(product.name);
    return 'Producto actualizado con éxito';
  }

  // @Delete('/')
  deleteProduct(id:number):any {
    return 'Producto eliminado con éxito';
  }
}
