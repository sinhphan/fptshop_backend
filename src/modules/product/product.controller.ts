import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './product.model';
import { CreateProductDto } from './create-product.dto';
import { ProductsService } from './product.service';
import { data2 } from 'src/data/data2';
import { data4 } from 'src/data/data4';
import { data3 } from 'src/data/data3';
import { data1 } from 'src/data/data1';
import { AttributeItemService } from '../attribute-item/attribute-item.service';
import { SpecItemService } from '../spec-item/spec-item.service';
import { AttributeSpecItemService } from '../attribute-spec-item/attribute-spec-item.service';
import { CreateAttributeSpecItemDto } from '../attribute-spec-item/create-attribute-spec-item.dto';
import { PromotionItemService } from '../promotion-item/promotion-item.service';
import { CreatePromotionItemDto } from '../promotion-item/create-promotion-item.dto';
import { CategoryService } from '../categories/category.service';
import { CreateCategoryDto } from '../categories/create-categories.dto';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly attributeItemService: AttributeItemService,
    private readonly attributeSpecItemService: AttributeSpecItemService,
    private readonly specItemService: SpecItemService,
    private readonly promotionItemService: PromotionItemService,
    private readonly categoryService: CategoryService,
  ) {}

  @Get('find')
  find() {}

  @Post('create')
  create(@Body() product: Product) {}
}
