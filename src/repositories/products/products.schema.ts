import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = ProductEntity & Document;

@Schema({
  collection: 'product',
  timestamps: true,
})
export class ProductEntity {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  stock: number;
}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);
