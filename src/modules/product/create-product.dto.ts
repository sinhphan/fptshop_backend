class ProductVariantDto {
  sku: string;
  stockQuantity: number;
  price: number;
  priceMarket: number;
}

export class CreateProductDto {
  id: number;
  name: string;
  brandName: string;
  nameAscii: string;
  urlPicture: string;
  labelInst: string;
  labelFlashSale: string;
  productVariant: ProductVariantDto;
}
