import { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import { useViewPort } from '../../hooks';
import { LoadingComponent } from '../products/LoadingComponent';
import { ProductDesktop } from './ProductDesktop';
import { ProductMobile } from './ProductMobile';

export const Product = () => {

  const { dataProduct } = useContext( ProductContext );

  const isMobile = useViewPort();

  if ( !dataProduct ) return ( <LoadingComponent /> );

  return ( isMobile ? <ProductMobile /> : <ProductDesktop /> );

}
