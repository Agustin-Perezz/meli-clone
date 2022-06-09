
import React from 'react';

interface Props {
  queryProduct: string
}

export const Products : React.FC<Props> = ({ queryProduct }) => {

  console.log(`${ queryProduct }`);

  return (
    <div>Example-Products</div>
  )
}
