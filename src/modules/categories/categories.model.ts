import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Category {
  @Prop({ type: String, required: true, index: -1 })
  name: string;

  @Prop({ type: String, required: true })
  nameAscii: string;

  @Prop({ type: String, required: false })
  imageCateUrl: string;

  @Prop({ type: String, required: false })
  shareImageUrl: string;

  @Prop({ type: Number, required: true, default: 0 })
  parentID: number;

  @Prop({ type: Number, required: true })
  order: number;

  @Prop({ type: Boolean, default: false })
  isShowInTab: boolean;

  @Prop({ type: Boolean, default: false })
  isShowInNavFilter: boolean;

  @Prop({ type: Number, required: true })
  id: number;
}

export type CategoryDocument = HydratedDocument<Category>;
export const CategorySchema = SchemaFactory.createForClass(Category);
