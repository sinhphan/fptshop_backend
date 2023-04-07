import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './config/env.config';
@Module({
  imports: [ProductsModule, MongooseModule.forRoot(env.mongoose)],
  controllers: [],
  providers: [],
})
export class AppModule {}
