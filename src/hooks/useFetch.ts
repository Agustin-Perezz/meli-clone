import React from 'react'
import { FetchOptions } from '../models/fetchOptions';
import { getProducts } from '../services/products/getProducts';
import { ObjectResponse } from '../models/resultProducts';

interface Props {
  data: ObjectResponse | null;
  loading: boolean;
  error: string | null;
}

export const useFetch = ({ product, typeFunction, filters, sort } : FetchOptions ) => {
  
  const [state, setState] = React.useState<Props>();

  React.useEffect(() => {
    if ( product.length !== 0 ) { 
      setState({ data: null, loading: true, error: null });
      const executeFetch = async() => {
        // if white diferent typesFunction
        const resp = await getProducts( product );
        setState({ data: resp, loading: false, error: null });
      }
      executeFetch();
    }
  }, [ product ]);

  return { ...state };
  
}