import { Injectable } from '@nestjs/common';
import { SpecItem } from './spec-iem.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpecItemDto } from './create-spec-iem.dto';

@Injectable()
export class SpecItemService {
  constructor(
    @InjectModel(SpecItem.name)
    private SpecItemModel: Model<SpecItem>,
  ) {}

  async create(SpecItem: CreateSpecItemDto): Promise<SpecItem> {
    const model = new this.SpecItemModel(SpecItem);
    return model.save();
  }
}
