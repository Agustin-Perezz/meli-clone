import React from 'react';

import arrow_down from '../../../../assets/svg/arrow_down.svg';

interface Props { 
  children: JSX.Element | JSX.Element[];
  dropdown_title: string;
  additional_className?: string;
  custom_fz?: string;
}
export const ModalDropdown : React.FC<Props> = ({ children, dropdown_title, additional_className, custom_fz }) => {

  const [show, setShow] = React.useState( false );

  return (
    <div className='dropdown__container' >  
      <div 
        className={`dropdown__header ${ additional_className } ${ show && 'dropdown__header--hidden' }`} 
        onClick={() => setShow( !show )} 
        data-testid='dropdown-header'
      >
        <div className={`dropdown__header__title ${ custom_fz }`}> { dropdown_title } </div>
        <img src={ arrow_down } className='dropdown__header__icon' alt='down_arrow' />
      </div>
      <div data-testid='content' className={`dropdown__content ${ show && 'dropdown__content--show' }`}>
        { children }
      </div>
      <button 
        className={`dropdown__button ${ !show && 'dropdown__button--disabled'}`} 
        onClick={() => setShow( !show )}
        > 
          Ocultar contenido 
      </button>
    </div>  
)}
