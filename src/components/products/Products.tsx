import React from 'react';
import { useFetch } from '../../hooks';
import { Filters } from './Filters';
import { ListProducts } from './ListProducts';

interface Props {
  queryProduct: string
}

export const Products : React.FC<Props> = ({ queryProduct }) => {

  const { data, loading, error } = useFetch({ product: queryProduct, typeFunction: 'getProducts' });  

  if ( loading ) return ( <span> loading... </span> );

  if ( data ) return ( 
    <div className='products'>
      <Filters />
      <div className="products__title">
        <h3> { data.basic_info.query } </h3>
      </div>
      <ListProducts products={ data.result_products } />
    </div>
  );

  return (
    <div>
      <h4> Example-Products </h4>
    </div>
  )
}
