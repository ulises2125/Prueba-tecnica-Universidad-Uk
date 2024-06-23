import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { ProductsGateway } from 'src/repositories/products/products.gateways';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsGateway: ProductsGateway) {}

  async createProduct(createProductDto: CreateProductDto) {
    try {
      return await this.productsGateway.createProduct(createProductDto);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  async removeProduct(id: string) {
    try {
      return this.productsGateway.removeProduct(id);
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    try {
      return this.productsGateway.updateProduct(id, updateProductDto);
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  async findAll() {
    try {
      return this.productsGateway.findAll();
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  async findOne(id: string) {
    try {
      return this.productsGateway.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
