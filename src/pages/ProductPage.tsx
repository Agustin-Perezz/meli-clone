
import React from 'react';
import { Product } from '../components/product';
import { ProductProvider } from '../context/product-context';

export const ProductPage : React.FC = () => {
  return (
    <div> 
      <ProductProvider>
        <Product />
      </ProductProvider>
    </div>  
)}
