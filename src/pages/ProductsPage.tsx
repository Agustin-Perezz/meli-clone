import React from 'react';

import { Products } from '../components/products';
import { NavBar } from '../components/navbar/NavBar';

export const ProductsPage : React.FC = () => {

  const [queryProduct, setQueryProdct] = React.useState('');

  return (
    <div>
      <NavBar setQueryProdct={ setQueryProdct } />
      <Products queryProduct={ queryProduct }/>
    </div>
  )
}
