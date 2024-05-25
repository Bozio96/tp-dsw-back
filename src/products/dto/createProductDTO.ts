import { 
    IsString,
    IsNumber,
    MinLength,
    Min
 } from "class-validator";

export class createProductDTO{
    @IsString() //Valida que sea un String
    @MinLength(1) //Valida que tenga como minimo un caracter
    name: string;
    @IsNumber() //Valida que sea un Numero
    @Min(0) //Valida que sea como minimo 0
    price: number;
    @IsNumber()
    @Min(0)
    stock: number
}