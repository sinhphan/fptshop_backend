export interface IProductFilters {
  brandName?: string;
  price?: { greaterThan: number; lessThan: Number }[];
  labelInst?: string;
}
