import React from 'react';
import { Products } from '../components/products';
import { NavBar } from '../components/navbar/NavBar';

export const ProductsPage : React.FC = () => {
  return (
    <div>
      <NavBar  />
      <Products />
    </div>
  )
}
