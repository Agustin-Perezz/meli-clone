import React, { useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import { ListFiltersMobile } from './filters/filters-mobile';
import { ListFiltersDesktop } from './filters/filters-desktop';

import { ListItems, NotFoundProduct } from './items';
import { LoadingComponent } from './LoadingComponent';

import embalaje from '../../assets/images/packages.png';

export const Products : React.FC = () => {

  const { data, isLoadingData } = useContext( ProductsContext );

  if ( isLoadingData ) return ( <LoadingComponent /> );

  if ( data !== null && data.basic_info.total !== 0 ) return ( 
    <div className='products__main__container'>
      <ListFiltersMobile 
        filters={ data.available_filters }  
        sorts={ data.available_sorts }
      />
      <ListFiltersDesktop 
        filters={ data.available_filters } 
        basic_information={ data.basic_info } 
        categories={ data.categories } 
      />
      <ListItems 
        products={ data.result_products } 
        name={ data.basic_info } 
        sorts={ data.available_sorts }
      />
    </div>
  );
  
  if ( data?.basic_info.total === 0 ) return ( 
    <NotFoundProduct />
  )

  return (
    <div className='nothing__search'>
      <img src={ embalaje } className='nothing__search__img' alt="embalaje" />
      <h2 className='nothing__search__text'> Vaya, parece que no has buscado nada. </h2>
    </div>
  )
} 
