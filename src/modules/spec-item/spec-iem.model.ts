import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class SpecItem {
  @Prop({ type: Number, require: true })
  attributeID: number;

  @Prop({ type: Number, require: true })
  id: number;

  @Prop({ type: Number, require: true })
  attrCusGroupLevelOrder: number;

  @Prop({ type: Number, require: true })
  displayOrder: number;

  @Prop({ type: String, require: true })
  name: string;

  @Prop({ type: String, require: true })
  nameAscii: string;

  @Prop({ type: String, require: true })
  attrCusGroupName: string;

  @Prop({ type: String, require: true })
  attrCusGroupNameAscii: string;
}

export type SpecItemDocument = HydratedDocument<SpecItem>;
export const SpecItemSchema = SchemaFactory.createForClass(SpecItem);
