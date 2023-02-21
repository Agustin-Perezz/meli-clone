export interface ObjectResponse {
  basicInfoProduct: BasicInfoProduct;
  listProducts: ListProduct[];
  productCategories: string[];
  availableFilters: AvailableFilter[];
  availableSorts: AvailableSort[];
}

export interface AvailableSort {
    name: 'Más relevante' | 'Menor precio' | 'Mayor precio';
    id: 'relevance' | 'price_asc' | 'price_desc';
}

interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value[];
}

interface Value {
  id: string;
  name: string;
  results: number;
}

interface ListProduct {
  id: string;
  title: string;
  price: string;
  picture: string;
  freeShipping: boolean;
  full: boolean;
  condition: Condition;
  installments: boolean | number;
  productOffer: false | ProductOffer;
  countryId: string;
}

interface ProductOffer {
  amount: string;
  regularAmount: string;
  offerPercentage: number;
}

interface BasicInfoProduct {
  queryProduct: string;
  totalResults: number;
}

export enum Condition {
  New = "new",
}
