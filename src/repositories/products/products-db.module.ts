import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductEntity, ProductSchema } from './products.schema';
import { ProductsGateway } from './products.gateways';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductEntity.name, schema: ProductSchema },
    ]),
  ],
  providers: [ProductsGateway],
  exports: [MongooseModule, ProductsGateway],
})
export class ProductDbModule {}
