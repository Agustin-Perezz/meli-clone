import React from 'react';
import { FilterMobile } from './FilterMobile';
import { AvailableFilter } from '../../../../../models/resultProducts';
import { StateProps } from '../ListFiltersMobile';

import go_back from '../../../../../assets/go_back.svg';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<StateProps>>;
  show: boolean;
  filters: AvailableFilter[];
}

export const FilterModal : React.FC<Props> = ({ filters, show, setShowModal }) => {

  return (
    <div className={`filters__mobile__modal ${ show && 'filters__mobile__modal--show' }`}>
      <div className="filters__mobile__header">
        <img className='filters__mobile__header--back' alt='go_back' 
          src={ go_back } 
          onClick={ () => setShowModal({ show: false })} 
        />
        <h1 className='filters__mobile__header--title'> Filtrar por </h1>
      </div>
      {
        filters.map(( filter, index ) => (
          <FilterMobile filter={ filter } key={ index } />
        ))
      }
  </div>
)}
