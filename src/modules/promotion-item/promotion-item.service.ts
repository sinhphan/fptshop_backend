import { Injectable } from '@nestjs/common';
import { PromotionItem } from './promotion-item.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePromotionItemDto } from './create-promotion-item.dto';

@Injectable()
export class PromotionItemService {
  constructor(
    @InjectModel(PromotionItem.name)
    private promotionItemModel: Model<PromotionItem>,
  ) {}

  async create(promotionItem: CreatePromotionItemDto): Promise<PromotionItem> {
    const model = new this.promotionItemModel(promotionItem);
    return model.save();
  }
}
