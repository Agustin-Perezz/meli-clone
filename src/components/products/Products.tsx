import React from 'react';
import { useFetch } from '../../hooks';

interface Props {
  queryProduct: string
}

export const Products : React.FC<Props> = ({ queryProduct }) => {

  const { data, loading, error } = useFetch({ product: queryProduct, typeFunction: 'getProducts' });  

  return (
    <div>
      <h4> Example-Products </h4>
      { loading && <span> loading... </span> } 
      { data &&  JSON.stringify( data ) } 
    </div>
  )
}
