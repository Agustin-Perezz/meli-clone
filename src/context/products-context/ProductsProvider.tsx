import React, { useContext } from 'react';
import { ProductsContext } from './ProductsContext';
import { ObjectResponse } from '../../models/resultProducts';
import { getProducts } from '../../services/products';
import { FiltersContext } from '../filters-context';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ProductsState {
  isLoadingData: boolean;
  queryProduct: string | null;
  data: ObjectResponse | null;
}

const INIT_STATE : ProductsState = {
  isLoadingData: false,
  queryProduct: null,
  data: null,
};


export const ProductsProvider : React.FC<Props> = ({ children }) => {

  const { filters, idSortActive, setFilters } = useContext( FiltersContext );

  const [state, setState] = React.useState( INIT_STATE );

  React.useEffect(() => {
    if ( state.queryProduct !== null )  {
      getDataProducts();
    }
  }, [ state.queryProduct, filters, idSortActive ]);

  React.useEffect(() => {
    const query = localStorage.getItem( 'queryProduct' );
    if ( query ) { setQueryProduct( query ); }
  }, [] );

  const setQueryProduct = ( query: string ) => {
    if ( query !== state.queryProduct ) { 
      setFilters([]);
    }
    setState({ ...state, queryProduct: query });
    localStorage.setItem( 'queryProduct', query );
  }

  const getDataProducts = async() => {
    setState({ ...state, isLoadingData: true });
    const response = await getProducts( state.queryProduct!, filters, idSortActive );
    setState({ ...state, isLoadingData: false, data: response });
  };

  const resetContext = () => { setState( INIT_STATE ) };

  return (
    <ProductsContext.Provider value={{
      ...state,

      // Methods
      setQueryProduct,
      resetContext,
    }}>
      { children }
    </ProductsContext.Provider>
  );
}