import { IsNumber, IsString} from "class-validator";

export class updateProductDTO {
  @IsString()
  name?: string; //Estos signos ? indican que el parámetro es opcional
  @IsNumber()
  price?: number;
  @IsNumber()
  stock?: number;
}
