import React from 'react'
import { ProductContext } from '../../context/product-context';
import { useViewPort } from '../../hooks';
import { LoadingComponent } from '../products/ui/LoadingComponent';
import { ProductDesktop } from './ProductDesktop';
import { ProductMobile } from './ProductMobile';

export const Product = () => {

  React.useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const { dataProduct } = React.useContext( ProductContext );

  const isMobile = useViewPort();

  if ( !dataProduct ) return ( <LoadingComponent /> );

  return ( isMobile ? <ProductMobile /> : <ProductDesktop /> );

}
