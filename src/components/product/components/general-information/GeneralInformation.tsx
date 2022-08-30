import React, { useContext } from 'react';
import { ProductContext } from '../../../../context/product-context';

import location_two from '../../../../assets/svg/location-icon-two.svg';
import TruckIcon from '../../../../assets/Icons/TruckIcon';
import arrow_down from '../../../../assets/svg/arrow_down.svg';


export const GeneralInformation : React.FC = () => {

  const { dataProduct } = useContext( ProductContext );

  const { basic_info, seller,  } =  { ...dataProduct! };

  return (
    <div className='information'> 
      <div className="information__price">
        {
          basic_info.country_id === 'ARS' ? 
            <span className="information__price__value"> { basic_info.price } </span>
          :
            <span className="information__price__value">U$S { basic_info.price } </span>
        }
        { basic_info.country_id === 'ARS'  && <span className="information__price__cuotes"> en 12 x { basic_info.installaments } </span> }
        <span className="information__price__payment"> Ver los medios de pagos </span>
      </div>
      <div className="shipping">
          <TruckIcon className="shipping__icon" fill={ basic_info.free_shipping === true ? '#00a650' : '#363636' } />
          <div className="shipping__group">
            <span className={`shipping__text ${ basic_info.free_shipping === true && 'free'}`}> { basic_info.free_shipping === true ? 'Envío gratis a todo el país' : 'Envío a todo el país'} </span>
            <span className="shipping__time"> Conocé los tiempos y las formas de envío. </span>
            <div className="shipping__calculate">
              <img src={ location_two } alt="location" className="shipping__location"/>
              <span className="shipping__calculate__text"> Calcular cuándo llega </span>
            </div>
        </div>
      </div>
      <div className="seller">
        <span className="seller__label"> Vendido por <label> { seller.nickname } </label> </span>
        <span className="seller__lider">{`Mercadolider | ${ seller.transactions_total } ventas`}</span>
        <span className="seller__factura"> Hace factura A </span>
      </div>
      <div className="stock">
        <span className="stock__text"> Stock disponible </span>
        <div className="stock__box">
          <span className='stock__box--title'> Cantidad: 1 </span>
          <span className='stock__box--value'> ({ basic_info.sold_quantity }) disponibles </span>
          <img className='stock__box--icon' src={ arrow_down } alt="arrow_down" />
        </div>
      </div>
    </div>  
)}
