import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AttributeItem } from './attribute-item.model';
import { Model } from 'mongoose';
import { CreateAttributeItemDto } from './create-attribute-item.dto';

@Injectable()
export class AttributeItemService {
  constructor(
    @InjectModel(AttributeItem.name)
    private attributeItemModel: Model<AttributeItem>,
  ) {}

  async create(
    createAttributeItemDto: CreateAttributeItemDto,
  ): Promise<AttributeItem> {
    const createAttributeItem = new this.attributeItemModel(
      createAttributeItemDto,
    );

    return createAttributeItem.save();
  }
}
