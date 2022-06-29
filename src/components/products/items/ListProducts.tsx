
import React from 'react';
import { ResultProduct } from '../../../models/resultProducts';
import { Product } from './Product';

interface Props {
  products: ResultProduct[];
}

export const ListProducts : React.FC<Props> = ({ products }) => {
  return (
    <div className='container__products'> 
      {
        products.map(( product, index ) => (
          <Product product={ product } key={ index } />
        ))
      }
    </div>
  );
}