import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';
import { CreateProductDto } from './create-product.dto';
import { IPaginationOptions } from 'src/utils/type/pagination-options';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);

    return createdProduct.save();
  }

  async find(
    filter,
    paginationOptions: IPaginationOptions,
  ): Promise<Product[]> {
    const options = {
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      limit: paginationOptions.limit,
    };
    return this.productModel
      .find(filter)
      .sort()
      .skip(options.skip)
      .limit(options.limit)
      .exec();
  }
}
