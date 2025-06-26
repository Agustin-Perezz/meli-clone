import React from 'react';
import { useNavigate } from 'react-router-dom';

import full_icon from '../../../assets/svg/full-icon.svg';
import heart from '../../../assets/images/heart.png';
import { ListProduct } from '../../../models/modelProducts';

interface Props {
  product: ListProduct;
}

export const Item: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="box" onClick={() => navigate(`/item/${product.id}`)}>
      <div className="box__image--container">
        <button className="box__favorite">
          <img src={heart} className="box__favorite--icon" alt="heart" />
        </button>
        <img src={product.picture} alt="" />
      </div>
      <div className="box__information">
        <h6> {product.title} </h6>
        <div className="box__information__price">
          {product.productOffer !== false && (
            <span className="box__information__price--original">
              {product.productOffer.regularAmount}
            </span>
          )}
          <div className="box__information__block">
            {product.countryId === 'ARS' ? (
              <span className="box__information__price--fraction">{product.price}</span>
            ) : (
              <span className="box__information__price--fraction">U$S {product.price}</span>
            )}
            {product.productOffer !== false && (
              <span className="box__information__price--offert">
                {' '}
                {product.productOffer.offerPercentage}% OFF{' '}
              </span>
            )}
          </div>
        </div>
        {product.installments !== false && (
          <div className="box__information__installments">
            <span> Hasta {product.installments} cuotas sin interés </span>
          </div>
        )}
        {(product.full || product.freeShipping) === true && (
          <div className="box__information__group">
            {product.freeShipping === true && <span> Envío gratis </span>}
            {product.full === true && <img src={full_icon} alt="full" />}
          </div>
        )}
      </div>
    </div>
  );
};
