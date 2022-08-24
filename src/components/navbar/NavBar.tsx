import React, { FormEvent, useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import { useForm } from '../../hooks';

import { SearchIcon, MenuIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { useMatch, useNavigate } from 'react-router-dom';

import meli_logo_small from '../../assets/images/meli_logo_small.png';
import meli_logo_large from '../../assets/images/meli_logo.png';
import shopping_cart from '../../assets/images/shopping-cart.png';
import disney from '../../assets/images/disney_publi.png';
import location from '../../assets/svg/location-icon.svg';

export const NavBar : React.FC = () => {

  const initialQuery = localStorage.getItem('queryProduct');

  const { onChange, queryProduct, reset } = useForm({ queryProduct: initialQuery || '' });
  const { setQueryProduct  } = useContext( ProductsContext );

  const navigate = useNavigate();
  const match = useMatch('/item/:id_item');

  const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if ( queryProduct.length !== 0 ) { 
      setQueryProduct( queryProduct ); 
      match && navigate(`items?q=${ queryProduct }`);
    }
  };

  return (
    <div className="nav">
      <div className="nav__container">
        <div className='nav__block--1'>
          <img className='nav__img--mobile' src={ meli_logo_small } alt="logo-meli-small" onClick={() => reset()}/>
          <img className='nav__img--desktop nav__img--xl' src={ meli_logo_large } alt="" onClick={() => reset()}/>
          <div className="nav__location--desktop">
            <img src={ location } alt='gps' className="nav__gps--desktop" /> 
            <div className='nav__location--direction'>
              <small>Enviar a</small>
              <span>Capital Federal</span>
            </div>
          </div>
        </div>
        <div className="nav__block--2">
            <form onSubmit={ handleSubmit } aria-label='form'> 
              <button type='submit' className='nav__button'>
                <SearchIcon className='nav__loupe' role='img' />
              </button>
              <input 
                name='queryProduct'
                onChange={ onChange }
                value={ queryProduct }
                autoFocus
                type="text" 
                placeholder='Estoy buscando...'
                autoComplete='off'
                className='nav__input'
                role='input'
              /> 
            </form>
            <ul className="nav__links">
              <div className='nav__links--category'>
                <li className="nav__links--link">Categorias</li>
                <ChevronDownIcon className='nav__arrow'/>
              </div>
              <li className="nav__links--link">Ofertas</li>
              <li className="nav__links--link">Historial</li>
              <li className="nav__links--link">Supermercado</li>
              <li className="nav__links--link">Moda</li>
              <li className="nav__links--link">Vender</li>
              <li className="nav__links--link">Ayuda</li>
            </ul>
          </div>
        <div className="nav__block--3">
          <MenuIcon className='nav__menu' />
          <img className='nav__icon--mobile' src={ shopping_cart } alt="" />
          <img className='nav__img--desktop nav__img--xxl' src={ disney } alt="" />
          <ul className="nav__links nav__secondary">
            <li className="nav__link">Creá tu cuentá</li>
            <li className="nav__link">Ingresá</li>
            <li className="nav__link">Mis Compras</li>
            <li className='nav__link'> <img src={ shopping_cart } alt="" className='nav__shopping'/> </li>
          </ul>
        </div>
      </div>
      <hr className='nav__border' />
      <div className="nav__location">
        <div className='nav__location--block'>
          <img src={ location } className="nav__gps" alt='location-icon' /> 
          <span> Enviar a Capital Federal </span>
        </div>
      <ChevronRightIcon className='nav__arrow'/> 
      </div>
    </div>
  )
}
