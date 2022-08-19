import { useContext } from 'react';
import { ProductContext } from '../../../../context/product-context';
import { BlockDropdown } from '../modal-dropdown/BlockDropdown';

export const PaymentsMethods = () => {

  const { dataProduct } = useContext( ProductContext );
  const { list_attributes } = { ...dataProduct };
  const { images } = { ...list_attributes! } 

  return (
    <div className="payment__container">
      <div className="payment__title"> Medios de pago </div>
      <div className="payment__cuotes">
        <span className="payment__cuotes__title"> Hasta 12 cuotas sin tarjeta </span>
        <img src={ images.mercado_credit_url } alt="mercado-credito" className="payment__cuotes__img" />

      </div>
      <div className="payment__credit">
        <div className="payment__credit__header">
          <span className="payment__credit__header--title"> Tarjetas de crédito </span>
          <span className="payment__credit__header--subtitle"> ¡Cuotas sin interés con bancos seleccionados! </span>
        </div>
        <div className="payment__images">
          { images.credit.map((url, index) => ( <img src={ url } key={ index } alt='credit' className="payment__images__icon"/> ))}
        </div>
      </div>
      <div className="payment__debit">
        <div className="payment__debit__header">
          <span className="payment__debit__header--title"> Tarjetas de débito </span>
        </div>
        <div className="payment__images">
          { images.debit.map((url, index) => ( <img src={ url } key={ index } alt='debit' className="payment__images__icon"/> ))}
        </div>
      </div>
      <div className="payment__efectivo">
        <div className="payment__efectivo__header">
          <span className="payment__efectivo__header--title"> Efectivo </span>
        </div>
        <div className="payment__images">
          { images.efectivo.map((url, index) => ( <img src={ url } key={ index } alt='efectivo' className="payment__images__icon"/> ))}
        </div>
      </div>
      <BlockDropdown content_title='Conocé otros medios de pago'/>
    </div>
  )
}
