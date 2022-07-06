
import React from 'react';
import { ProductsContext } from './ProductsContext';
import { ObjectResponse } from '../../models/resultProducts';
import { getProducts } from '../../services/products';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ProductState {
  isLoadingData: boolean;
  queryProduct: string | null;
  data: ObjectResponse | null;
}

const INIT_STATE : ProductState = {
  isLoadingData: false,
  queryProduct: null,
  data: null,
};

export const ProductsProvider : React.FC<Props> = ({ children }) => {

  const [state, setState] = React.useState( INIT_STATE );

  React.useEffect(() => {
    if ( state.queryProduct !== null )  {
      getDataProducts();
    }
  }, [ state.queryProduct ]);

  React.useEffect(() => {
    const query = localStorage.getItem( 'queryProduct' );
    if ( query ) { setQueryProduct( query ); }
  }, [] );

  const setQueryProduct = ( query: string ) => {
    console.log('set-query')
    setState({ ...state, queryProduct: query });
    localStorage.setItem( 'queryProduct', query );
  }

  const getDataProducts = async() => {
    setState({ ...state, isLoadingData: true });
    const response = await getProducts( state.queryProduct! );
    setState({ ...state, isLoadingData: false, data: response });
  };

  return (
    <ProductsContext.Provider value={{
      ...state,

      // Methods
      setQueryProduct
    }}>
      { children }
    </ProductsContext.Provider>
  );
}