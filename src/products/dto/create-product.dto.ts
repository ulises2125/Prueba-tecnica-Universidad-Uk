import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10, {
    message: 'La descripción debe tener al menos 10 caracteres.',
  })
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'El precio debe ser un valor positivo.' })
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'El stock debe ser un valor positivo.' })
  stock: number;
}
