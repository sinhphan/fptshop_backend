import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './categories.model';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './create-categories.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const model = new this.categoryModel(createCategoryDto);
    return model.save();
  }
}
