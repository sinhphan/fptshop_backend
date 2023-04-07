import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type productsDocument = HydratedDocument<Product>;

@Schema({ _id: false, versionKey: false })
class ProductVariant {
  @Prop({ type: String, required: true, unique: true })
  sku: string;

  @Prop({ type: String, required: true })
  stockQuantity: number;

  @Prop({ type: String, required: true })
  price: number;

  @Prop({ type: String, required: true })
  priceMarket: number;
}

const ProductVariantSchema = SchemaFactory.createForClass(ProductVariant);

@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  brandName: string;

  @Prop({ required: true })
  nameAscii: string;

  @Prop({ required: true })
  urlPicture: string;

  @Prop({ required: false })
  labelInst: string;

  @Prop({ required: false })
  labelFlashSale: string;

  @Prop({ type: ProductVariantSchema, required: true })
  productVariant: ProductVariant;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
