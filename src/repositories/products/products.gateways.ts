import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductEntity, ProductDocument } from './products.schema';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';

@Injectable()
export class ProductsGateway {
  constructor(
    @InjectModel(ProductEntity.name)
    private ProductModel: Model<ProductDocument>,
  ) {}

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    try {
      const productCreated = await this.ProductModel.create(createProductDto);
      return productCreated;
    } catch (error) {
      if (error.code === 11000 || error.code === 11001) {
        throw new ConflictException('El nombre del producto ya existe.');
      }
      throw error;
    }
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    const productUpdate = await this.ProductModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    ).exec();
    if (!productUpdate) {
      throw new NotFoundException('Producto no encontrado');
    }
    return productUpdate;
  }

  async removeProduct(id: string): Promise<ProductEntity> {
    const existingProduct = await this.ProductModel.findById(id).exec();

    if (!existingProduct) {
      throw new NotFoundException('Producto no encontrado');
    }
    return this.ProductModel.findByIdAndDelete(id).exec();
  }

  async findAll(): Promise<ProductEntity[]> {
    const products = await this.ProductModel.find().exec();
    if (products.length === 0) {
      throw new NotFoundException('No hay productos disponibles');
    }
    return products;
  }

  async findOne(id: string) {
    const existingProduct = await this.ProductModel.findById(id).exec();
    if (!existingProduct) {
      throw new NotFoundException('Producto no encontrado');
    }
    return existingProduct;
  }
}
