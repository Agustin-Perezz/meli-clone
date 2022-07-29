
import React from 'react';

import arrow_down from '../../../assets/svg/arrow_down.svg';

interface Props { 
  children: JSX.Element | JSX.Element[];
  dropdown_title: string;
  
}
export const ModalDropdown : React.FC<Props> = ({ children, dropdown_title }) => {

  const [show, setShow] = React.useState( false );

  return (
    <div className='dropdown__container'>  
      <div 
        className={`dropdown__header ${ show && 'dropdown__header--hidden' }`} 
        onClick={() => setShow( !show )} 
      >
        <div className='dropdown__header__title'> { dropdown_title } </div>
        <img src={ arrow_down } className='dropdown__header__icon' alt='down_arrow' />
      </div>
      <div className={`dropdown__content ${ show && 'dropdown__content--show' }`}>
        { children }
      </div>
    </div>  
)}
