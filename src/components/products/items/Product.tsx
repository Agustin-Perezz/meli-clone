
import React from 'react';

import { ResultProduct } from '../../../models/resultProducts';
import { HeartIcon } from '@heroicons/react/outline';

import full_icon from '../../../assets/full-icon.svg';
import heart from '../../../assets/heart.png';

interface Props {
  product: ResultProduct;
}

export const Product : React.FC<Props> = ({ product }) => {
  return ( 
    <div className='box'> 
      <div className="box__image--container">
        <button className='box__favorite'>
          <img src={ heart } className='box__favorite--icon'/> 
        </button>
        <img src={ product.picture } alt="" />
      </div> 
      <div className="box__information">
        <h6> { product.title } </h6>
        <div className="box__information__price">
          { product.offert !== false && <span className='box__information__price--original'> { product.offert.regular_amount } </span>}
          <div className='box__information__block'>
            <span className='box__information__price--fraction'>{ product.price }</span>
            { 
              product.offert !== false && 
              <span className='box__information__price--offert'> { product.offert.offer_percentaje }% OFF </span> 
            } 
          </div>
        </div>
          { 
            product.installments !== false && 
            <div className="box__information__installments">
              <span> Hasta { product.installments } cuotas sin interés </span>
            </div>
          }
          { 
            ( product.full || product.free_shipping ) === true &&
            <div className='box__information__group'>
              { product.free_shipping === true && <span> Envío gratis </span> } 
              { product.full === true && <img src={ full_icon } alt="full" /> }
            </div>
          }
      </div>
    </div>
  );
}