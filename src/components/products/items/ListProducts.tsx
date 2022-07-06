
import React from 'react';
import { ResultProduct, BasicInfo } from '../../../models/resultProducts';
import { Product } from './Product';
import { ViewOptionsProducts } from './ViewOptionsProducts';

import { ExclamationCircleIcon } from '@heroicons/react/outline';

interface Props {
  products: ResultProduct[];
  name: BasicInfo;
}

export const ListProducts : React.FC<Props> = ({ products, name }) => {
  return (
    <div className='container__products'> 
      <div className="products__header">
        <h3 className='products__header__title'> { name.query } </h3>
        <ViewOptionsProducts />
      </div>
      {
        products.map(( product, index ) => (
          <Product product={ product } key={ index } />
        ))
      }
      <div className="products__footer">
        <ExclamationCircleIcon className='products__footer__icon'/>
        <p className="products__footer__text"> El contenido esta limitado a 50 resultados. </p>
      </div>
    </div>
  );
}