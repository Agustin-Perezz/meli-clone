import React from 'react'
import { useContext } from "react"
import { ProductContext } from "../../../../context/product-context"
import { GroupStars, GroupStarsPorcentage } from "./stars";
import { ListOpinions } from './opinions';

import arrow_down from '../../../../assets/svg/arrow_down.svg';

export const Reviews = () => {

  const [show, setShow] = React.useState( false );

  const { dataProduct } = useContext( ProductContext );
  const { reviews, basic_info } = { ...dataProduct };

  return (
    <div className="reviews__container">
      <div className="reviews__header">
        <div className="reviews__header__title"> Opiniones sobre { basic_info?.title } </div>
        <div className="reviews__header__block">
          <div className="reviews__modal" onClick={() => setShow( !show )}>
            <span className="reviews__header__block--porcentage"> { reviews?.rating_average_fixed } </span>
            <div className="reviews__modal__box">
              <div className="reviews__modal__box--b">
                <GroupStars porcentage={ basic_info!.rating_average } />
                <img src={ arrow_down } alt="arrow-down" className={`reviews__modal__icon ${ show && 'reviews__modal__icon--show'}`} />
              </div>
              <span className="reviews__modal__opinions">Promedio entre { reviews?.total_reviews } opiniones</span>
            </div>
          </div>
          <GroupStarsPorcentage rating_levels={ reviews!.rating_levels } show={show} />
        </div>
      </div>
      <ListOpinions />
    </div>
  )
}
