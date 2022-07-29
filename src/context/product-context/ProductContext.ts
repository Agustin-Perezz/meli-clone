import { createContext } from "react";
import { modelProduct } from '../../models/modelProduct';

export interface ProductContextProps { 
  dataProduct: modelProduct | undefined;
}

export const ProductContext = createContext<ProductContextProps>( {} as ProductContextProps );

