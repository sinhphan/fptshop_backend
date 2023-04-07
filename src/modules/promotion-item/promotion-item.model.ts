import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class PromotionItem {
  @Prop({ type: String, require: true })
  sku: string;

  @Prop({ type: String, require: true })
  promotionName: string;

  @Prop({ type: String, require: true })
  urlPicture: string;

  @Prop({ type: Number, require: true })
  displayOrder: number;

  @Prop({ type: Number, require: true })
  id: number;
}

export type PromotionItemDocument = HydratedDocument<PromotionItem>;
export const PromotionItemSchema = SchemaFactory.createForClass(PromotionItem);
