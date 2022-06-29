import React from 'react';
import { AvailableFilter } from '../../../../models/resultProducts';
import { FilterMobile } from './FilterMobile';
import { NavBarFiltersMobile } from './NavBarFiltersMobile';

import go_back from '../../../../assets/go_back.svg';

interface Props {
  filters: AvailableFilter[];
}

export interface StateProps {
  show: boolean;
  typeModa?: 'filters' | 'sorts';
}

export const ListFiltersMobile : React.FC<Props> = ({ filters }) => {
  
  const [{ show, typeModa }, setShowModal] = React.useState<StateProps>({
    show: false,
  });

  return ( 
    <div className='filters__mobile'> 
      <NavBarFiltersMobile setShowModal={ setShowModal }/>
      <div 
        className={
          `filters__mobile__modal ${ show && typeModa === 'filters' &&  'filters__mobile__modal--show'}`}>
          <div className="filters__mobile__header">
            <img className='filters__mobile__header--back' alt='go_back' src={ go_back } onClick={ () => setShowModal({ show: false })} />
            <h1 className='filters__mobile__header--title'> Filtrar por </h1>
          </div>
        {
          filters.map(( filter, index ) => (
            <FilterMobile filter={ filter } key={ index } />
          ))
        }
      </div>
    </div> 
  )
}