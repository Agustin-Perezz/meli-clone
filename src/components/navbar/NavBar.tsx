import React, { FormEvent } from 'react';
import { useForm } from '../../hooks';

import meli_logo_small from '../../assets/meli_logo_small.png';
import hamburger from '../../assets/hamburger.png';
import shopping_cart from '../../assets/shopping-cart.png';

interface Props {
  setQueryProdct: React.Dispatch<React.SetStateAction<string>>
}

export const NavBar : React.FC<Props> = ({ setQueryProdct }) => {

  const{ onChange, queryProduct } = useForm({ queryProduct: '' });

  const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    setQueryProdct( queryProduct );
  };
  
  return (
    <div className="nav">
      <div className='nav__separator'>
        <img className='nav__img' src={ meli_logo_small } alt="" />
        <form onSubmit={ handleSubmit }> 
          <input 
            name='queryProduct'
            onChange={ onChange }
            value={ queryProduct }
            type="text" 
            placeholder='Estoy buscando... '
            autoComplete='off'
            className='nav__input'
          /> 
        </form>
        <img className='nav__icon' src={ hamburger } alt="" />
        <img className='nav__icon' src={ shopping_cart } alt="" />
      </div>
      <div className="nav__location">
        <span> Enviar a Capital Federal </span>
      </div>
    </div>
  )
}
