import React, { useContext } from 'react';
import { ProductsContext } from '../../context/products';
import { ListFiltersMobile } from './filters';
import { ListProducts } from './items';

export const Products : React.FC = () => {

  const { data, isLoadingData } = useContext( ProductsContext );

  if ( isLoadingData ) return ( <span> loading... </span> );

  if ( data ) return ( 
    <div className='products'>
      <ListFiltersMobile filters={ data.available_filters } />
      <div className="products__title">
        <h3> { data.basic_info.query } </h3>
      </div>
      <ListProducts products={ data.result_products } />
    </div>
  );

  return (
    <div>
      <h4> no buscaste nada che </h4>
    </div>
  )
}
