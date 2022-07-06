import React, { useContext } from 'react';
import { ProductsContext } from '../../context/products';
import { ListFiltersDesktop, ListFiltersMobile } from './filters';
import { ListProducts, NotFoundProduct } from './items';

export const Products : React.FC = () => {

  const { data, isLoadingData } = useContext( ProductsContext );

  if ( isLoadingData ) return ( <span> loading... </span> );

  if ( data !== null && data.basic_info.total !== 0 ) return ( 
    <div className='products__main__container'>
      <ListFiltersMobile 
        filters={ data.available_filters }  
      />
      <ListFiltersDesktop 
        filters={ data.available_filters } 
        basic_information={ data.basic_info } 
        categories={ data.categories } 
      />
      <ListProducts 
        products={ data.result_products } 
        name={ data.basic_info } 
      />
    </div>
  );
  
  if ( data?.basic_info.total === 0 ) return ( 
    <NotFoundProduct />
  )

  return (
    <div>
      <h4> no buscaste nada che </h4>
    </div>
  )
}
