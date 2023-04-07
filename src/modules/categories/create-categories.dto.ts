export class CreateCategoryDto {
  name: string;
  nameAscii: string;
  imageCateUrl: string;
  shareImageUrl: string;
  parentID: number;
  order: number;
  isShowInTab: boolean;
  isShowInNavFilter: boolean;
  id: number;
}
