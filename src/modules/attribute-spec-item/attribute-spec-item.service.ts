import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AttributeSpecItem } from './attribute-spec-item.model';
import { Model } from 'mongoose';
import { CreateAttributeSpecItemDto } from './create-attribute-spec-item.dto';

@Injectable()
export class AttributeSpecItemService {
  constructor(
    @InjectModel(AttributeSpecItem.name)
    private attributeSpecItemModel: Model<AttributeSpecItem>,
  ) {}

  async create(
    createAttrbuteSpecItemDto: CreateAttributeSpecItemDto,
  ): Promise<AttributeSpecItem> {
    const model = new this.attributeSpecItemModel(createAttrbuteSpecItemDto);

    return model.save();
  }
}
