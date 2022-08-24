import React, { useContext } from 'react';
import { ProductContext } from '../../../../context/product-context';
import { BlockDropdown } from '../modal-dropdown/BlockDropdown';

import location_mobile from '../../../../assets/svg/location-mobile.svg';
import message_check from '../../../../assets/svg/message-check.svg';
import clock from '../../../../assets/svg/clock.svg';
import medal from '../../../../assets/svg/medal.svg';

export const Trader : React.FC = () => {

  const { dataProduct } = useContext( ProductContext );
  const { seller } = { ...dataProduct };

  return (
    <div className='trader__container'> 
      <span className="trader__title"> Información sobre el vendedor </span>
      <div className="trader__group">
        <img src={ location_mobile } alt="location" className="trader__img" />
        <div className="trader__group__block">
          <span className='trader__group__block--text trader__location'> Ubicación </span>
          <span className='trader__group__block--message'> {`${ seller?.location.province }, ${ seller?.location.city }`} </span>
        </div> 
      </div>
      <div className="trader__group">
        <img src={ medal } alt='picture-medal' className="trader__img" />
        <div className="trader__group__block">
          <span className='trader__group__block--text trader__medal'> MercadoLíder Platinum </span>
          <span className='trader__group__block--message'> ¡Es uno de los mejores del sitio! </span>
        </div> 
      </div>
      <ul className="trader__thermometer">
        <li className="trader__thermometer__item" />
        <li className="trader__thermometer__item" />
        <li className="trader__thermometer__item" />
        <li className="trader__thermometer__item" />
        <li className="trader__thermometer__item" />
      </ul>
      <div className="trader__information">
        <div className="trader__information__block">
          <span className="trader__information__block--text"> { seller?.transactions.total } </span>
          <span className="trader__information__block--value"> Ventas en los últimos tiempos </span>
        </div>
        <div className="trader__information__block">
          <img src={ message_check } alt='message' />
          <span className="trader__information__block--value"> Brinda buena atención </span>
        </div>
        <div className="trader__information__block">
          <img src={ clock } alt='clock' /> 
          <span className="trader__information__block--value"> Despacha sus productos a tiempo </span>
        </div>
      </div>
      <BlockDropdown content_title='Ver más datos de este vendedor'/>
      <span className="trader__text__desktop">Ver más datos de este vendedor</span>
    </div>  
)}
