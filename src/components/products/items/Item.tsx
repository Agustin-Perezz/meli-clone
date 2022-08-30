import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ResultProduct } from '../../../models/resultProducts';

import full_icon from '../../../assets/svg/full-icon.svg';
import heart from '../../../assets/images/heart.png';

interface Props {
  product: ResultProduct;
}

export const Item : React.FC<Props> = ({ product }) => {

  const navigate = useNavigate();
  
  return ( 
    <div className='box' onClick={() => navigate(`/item/${ product.id }`)}> 
      <div className="box__image--container">
        <button className='box__favorite'>
          <img src={ heart } className='box__favorite--icon' alt='heart'/> 
        </button>
        <img src={ product.picture } alt="" />
      </div> 
      <div className="box__information">
        <h6> { product.title } </h6>
        <div className="box__information__price">
          { product.offert !== false && <span className='box__information__price--original'> { product.offert.regular_amount } </span>}
          <div className='box__information__block'>
            {
              product.country_id === 'ARS' ?             
                <span className='box__information__price--fraction'>{ product.price }</span>
              :
                <span className='box__information__price--fraction'>U$S { product.price }</span>
            }
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