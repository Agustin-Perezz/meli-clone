
export interface FetchOptions {
  product: string,
  typeFunction: 'getProducts' | 'getProduct',
  filters?: [ string, string ],
  sort?: [ string, string ],
};