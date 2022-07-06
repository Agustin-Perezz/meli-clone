
import React from 'react';
import { StateProps } from '../ListFiltersMobile';

import go_back from '../../../../../assets/go_back.svg';

interface Props { 
  setShowModal: React.Dispatch<React.SetStateAction<StateProps>>;
  show: boolean;
}

export const SortModal : React.FC<Props> = ({ setShowModal, show }) => {
  return (
    <div className={`filters__mobile__modal ${ show && 'filters__mobile__modal--show' }`}>
      <div className="filters__mobile__header">
        <img className='filters__mobile__header--back' alt='go_back' 
          src={ go_back } 
          onClick={ () => setShowModal({ show: false })} 
        />
        <h1 className='filters__mobile__header--title'> Ordenar por </h1>
      </div>
      <ul className="sort__options">
        <li className="sort__option">
          <span className='sort__option__text sort__option--actived'>Más relevantes</span>
        </li>
        <li className="sort__option">
          <span className='sort__option__text'>Menor precio</span>
        </li>
        <li className="sort__option">
          <span className='sort__option__text'>Mayor precio</span>
        </li>
      </ul>
    </div>
)}
