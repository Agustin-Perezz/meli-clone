import React, { FormEvent } from 'react';
import { useForm } from '../../hooks';
import { SearchIcon, MenuIcon, LocationMarkerIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
 
import meli_logo_small from '../../assets/meli_logo_small.png';
import meli_logo_large from '../../assets/meli_logo.png';
import shopping_cart from '../../assets/shopping-cart.png';
import disney from '../../assets/disney_publi.png';

interface Props {
  setQueryProdct: React.Dispatch<React.SetStateAction<string>>
}

export const NavBar : React.FC<Props> = ({ setQueryProdct }) => {

  const { onChange, queryProduct } = useForm({ queryProduct: '' });
  
  const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    setQueryProdct( queryProduct );
  };
  
  return (
    <div className="nav">
      <div className="nav__container">
        <div className='nav__block--1'>
          <img className='nav__img--mobile' src={ meli_logo_small } alt="" />
          <img className='nav__img--desktop nav__img--xl' src={ meli_logo_large } alt="" />
          <div className="nav__location--desktop">
            <LocationMarkerIcon className="nav__gps--desktop" /> 
            <div className='nav__location--direction'>
              <small>Enviar a</small>
              <span>Capital Federal</span>
            </div>
          </div>
        </div>
        <div className="nav__block--2">
            <form onSubmit={ handleSubmit }> 
              <SearchIcon className='nav__loupe'/>
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
            <li className='nav__link'> <img src={ shopping_cart } alt="" className='nav__test'/> </li>
          </ul>
        </div>
      </div>
      <hr className='nav__border' />
      <div className="nav__location">
        <div className='nav__location--block'>
          <LocationMarkerIcon className='nav__gps'/>
          <span> Enviar a Capital Federal </span>
        </div>
      <ChevronRightIcon className='nav__arrow'/> 
      </div>
    </div>
  )
}
