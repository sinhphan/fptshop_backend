import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class AttributeSpecItem {
  @Prop({ type: Number, required: true, index: 1 })
  productID: number;

  @Prop({ type: Number, required: true, index: -1 })
  attributeID: number;

  @Prop({ type: String, required: true })
  attributeName: string;

  @Prop({ type: String, required: true })
  specName: string;

  @Prop({ type: String, required: true })
  cssClass: string;
}

export type AttributeSpecItemDocument = HydratedDocument<AttributeSpecItem>;
export const AttributeSpecItemSchema =
  SchemaFactory.createForClass(AttributeSpecItem);
