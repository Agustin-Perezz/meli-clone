import { createContext } from "react";
import { ObjectResponse } from "../../models/resultProducts";

export interface ProductsContextProps { 
  isLoadingData: boolean;
  queryProduct: string | null;
  data: ObjectResponse | null;

  // Methods
  setQueryProduct: ( query: string ) => void;
  resetContext: () => void;
}

export const ProductsContext = createContext<ProductsContextProps>( {} as ProductsContextProps );

