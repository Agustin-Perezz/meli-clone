
import React, { useContext } from 'react';
import { StateModal } from '../ListFiltersMobile';
import { AvailableSort } from '../../../../../models/resultProducts';
import { FiltersContext } from '../../../../../context/filters-context/FiltersContext';

import go_back from '../../../../../assets/svg/go_back.svg';

interface Props { 
  setShowModal: React.Dispatch<React.SetStateAction<StateModal>>;
  show: boolean;
  sorts: AvailableSort[];
}

interface idSort { 
  id: 'relevance' | 'price_asc' | 'price_desc';
}

export const SortModal : React.FC<Props> = ({ setShowModal, show, sorts }) => {

  const { idSortActive, setSort } = useContext( FiltersContext );

  const handleClick = ({ id } : idSort ) => {
    setSort({ idSortActive: id });
    setShowModal({ show: false });
  }
  
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
        {
          sorts.map(({ name, id }, index ) => ( 
            <li 
              className={`sort__option ${ id === idSortActive && 'sort__option--actived' }`} 
              key={ index }
              onClick={() => handleClick({ id })} 
            >
              <span className='sort__option__text'> { name } </span>
            </li>
          ))
        }
      </ul>
    </div>
)}
