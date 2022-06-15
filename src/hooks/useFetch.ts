import React from 'react'
import { FetchOptions } from '../models/fetchOptions';
import { getProducts } from '../services/products/getProducts';

export const useFetch = ({ product, typeFunction, filters, sort } : FetchOptions ) => {
  
  const [state, setState] = React.useState({
    data: {},
    loading: false,
    error: null,
  });

  React.useEffect(() => {
    if ( product.length !== 0 ) { 
      setState({ data: {}, loading: true, error: null });
      const executeFetch = async() => {
        // if white diferent typesFunction
        const resp = await getProducts( product );
        setState({ data: resp, loading: false, error: null });
      }
      executeFetch();
    }
  }, [ product ]);

  return state;
  
}