import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductsController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.model';
import { AttributeItemService } from '../attribute-item/attribute-item.service';
import {
  AttributeItem,
  AttributeItemSchema,
} from '../attribute-item/attribute-item.model';
import { SpecItem, SpecItemSchema } from '../spec-item/spec-iem.model';
import { SpecItemService } from '../spec-item/spec-item.service';
import {
  AttributeSpecItem,
  AttributeSpecItemSchema,
} from '../attribute-spec-item/attribute-spec-item.model';
import { AttributeSpecItemService } from '../attribute-spec-item/attribute-spec-item.service';
import {
  PromotionItem,
  PromotionItemSchema,
} from '../promotion-item/promotion-item.model';
import { PromotionItemService } from '../promotion-item/promotion-item.service';
import { Category, CategorySchema } from '../categories/categories.model';
import { CategoryService } from '../categories/category.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: AttributeItem.name, schema: AttributeItemSchema },
      { name: AttributeSpecItem.name, schema: AttributeSpecItemSchema },
      { name: SpecItem.name, schema: SpecItemSchema },
      { name: PromotionItem.name, schema: PromotionItemSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  providers: [
    ProductsService,
    AttributeItemService,
    SpecItemService,
    AttributeSpecItemService,
    PromotionItemService,
    CategoryService,
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
