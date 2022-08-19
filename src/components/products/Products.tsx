import React, { useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import { ListFiltersMobile } from './filters/filters-mobile';
import { ListFiltersDesktop } from './filters/filters-desktop';

import { ListItems, NotFoundProduct } from './items';
import { LoadingComponent } from './LoadingComponent';

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
    <div className='presentation'>
      <h2 className='presentation__text'> Meli Clone developed by Agustin </h2>
      <h5 className='presentation__subtitle'> Contact: </h5>
      <div className="presentation__links">
        <a href="https://www.linkedin.com/in/agustinperez-front-end-developer/" rel="noopener" className="presentation__links--link">Linkedin</a>
        <a href="https://github.com/Agustin-Perezz" rel="noopener" className="presentation__links--link">GitHub</a>
        <a href="https://twitter.com/agustinperez__" rel="noopener" className="presentation__links--link">Twitter</a>
      </div>
    </div>
  )

} 