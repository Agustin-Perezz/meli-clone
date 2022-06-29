import React from 'react';

import sync_icon from '../../../../assets/sync_arrow.svg';
import filter_icon from '../../../../assets/filter_icon.svg';
import { StateProps } from './ListFiltersMobile';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<StateProps>>;
}

export const NavBarFiltersMobile : React.FC<Props> = ({ setShowModal }) => {
  return (
    <nav className='filters__nav'> 
      <div className="filters__nav__bottom">
        <img src={ sync_icon } alt="" />
        <button onClick={ () => setShowModal({ show: true, typeModa: 'sorts' })}> Ordenar </button>
      </div>
      <div className="filters__nav__arrives">
        <span> Llegan mañana </span>
        <label className='switch'>
          <input type="checkbox" />
          <span className='slider'></span>
        </label>
      </div>  
      <div className="filters__nav__bottom">
        <img src={ filter_icon } alt="" />
        <button onClick={ () => setShowModal({ show: true, typeModa: 'filters' }) }> Filtrar </button>
      </div>
    </nav>
)}
