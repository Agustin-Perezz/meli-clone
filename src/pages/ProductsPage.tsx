import React from 'react';

import { NavBar } from "../components/navbar"
import { Products } from "../components/products"

export const ProductsPage : React.FC = ({}) => {

  const [queryProduct, setQueryProdct] = React.useState('');

  return (
    <div>
      <NavBar setQueryProdct={ setQueryProdct } />
      <Products queryProduct={ queryProduct }/>
    </div>
  )
}
