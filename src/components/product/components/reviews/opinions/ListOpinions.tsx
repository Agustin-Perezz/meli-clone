import React, { useContext } from 'react';
import { ProductContext } from '../../../../../context/product-context';
import { NavButtons } from './NavButtons';
import { Opinions } from './Opinions';

export interface PropsStateButtons {
  type: 'all' | 'positive' | 'negative';
}

export const ListOpinions : React.FC = () => {

  const [activeType, setActiveType] = React.useState<PropsStateButtons>({ type:'all' });
  const { dataProduct } = useContext( ProductContext );

  return (
    <div className='opinions__container'> 
      <NavButtons type={ activeType.type } setActiveType={ setActiveType } />
      <Opinions type={ activeType.type } opinions={ dataProduct!.reviews.list_reviews } />
    </div>  
)}
