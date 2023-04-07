// @Get()
// insertData(): string {
//   data4.filterModel.listDefault.list.map(async (e) => {
//     let product: CreateProductDto = {
//       id: e.id,
//       name: e.name,
//       nameAscii: e.nameAscii,
//       brandName: e.brandName,
//       urlPicture: e.urlPicture,
//       labelInst: e.labelInst,
//       labelFlashSale: e.labelFlashSale,
//       productVariant: {
//         sku: e.productVariant.sku,
//         stockQuantity: e.productVariant.stockQuantity,
//         price: e.productVariant.price,
//         priceMarket: e.productVariant.priceMarket,
//       },
//     };

//     await this.productsService.create(product);
//   });
//   return 'insert success';
// }

// @Get()
//   createAttr() {
//     data1.filterModel.navFilterAttributeItem.attributeItems.forEach(
//       async (e) => {
//         const attrItem: CreateAttributeItemDto = e;
//         this.attributeItemService.create(attrItem);
//       },
//     );
//     return 'attrItem added';
//   }

// @Get()
// createSpecItem() {
//   data1.filterModel.navFilterAttributeItem.specItems.forEach(async (e) => {
//     const specitem: CreateSpecItemDto = {
//       id: e.id,
//       attributeID: e.attributeID,
//       name: e.name,
//       nameAscii: e.nameAscii,
//       attrCusGroupName: e.attrCusGroupName,
//       attrCusGroupNameAscii: e.attrCusGroupNameAscii,
//       displayOrder: e.displayOrder,
//     };
//     this.specItemService.create(specitem);
//   });
//   return 'specItem added';
// }

// @Get()
// createAttrSpecItem() {
//   data1.filterModel.attributeSpecItems.forEach(async (e) => {
//     const attrSpecItem: CreateAttributeSpecItemDto = e;
//     this.attributeSpecItemService.create(attrSpecItem);
//   });
//   return 'AttrSpecItem added';
// }

// @Get()
// createPromotionItem() {
//   data4.filterModel.promotionItems.forEach(async (e) => {
//     const promotionItem: CreatePromotionItemDto = e;
//     this.promotionItemService.create(promotionItem);
//   });
//   return 'PromotionItem added';
// }

// @Get()
// createCategory() {
//   data4.filterModel.navFilter.listCategory.forEach(async (e) => {
//     const Category: CreateCategoryDto = e;
//     this.categoryService.create(Category);
//   });
//   return 'Category added';
// }
