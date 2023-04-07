import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class AttributeItem {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  nameAscii: string;

  @Prop({ type: Boolean, required: true })
  isShowNavFilter: boolean;

  @Prop({ type: Number, required: false })
  levelOrder: number | null;

  @Prop({ type: Number, required: true, index: 1 })
  id: number;
}

export type AttributeItemDocument = HydratedDocument<AttributeItem>;
export const AttributeItemSchema = SchemaFactory.createForClass(AttributeItem);
