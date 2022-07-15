import React, { useContext } from 'react';
import { AvailableFilter } from '../../../../../models/resultProducts';
import { FiltersContext, Filter } from '../../../../../context/filters-context/FiltersContext';
import { StateModal } from '../ListFiltersMobile';

import { ChevronDownIcon } from '@heroicons/react/outline';

interface Props {
  filter: AvailableFilter;
  setShowModal: React.Dispatch<React.SetStateAction<StateModal>>;
}

export const FilterMobile : React.FC<Props> = ({ filter, setShowModal }) => {

  const { setNewFilter } = useContext( FiltersContext );
  const [showFilters, setShowFilters] = React.useState( false );

  const handleClick = ( newFilter: Filter ) => {
    setNewFilter( newFilter );
    setShowModal({ show: false });
  }

  return (
    <ul className="list">
      <li className="list__item" onClick={ () => setShowFilters( prev => !prev )} >
        <div className="list__button">
          <span className='list__link'> { filter.name } </span>
          <ChevronDownIcon className={`list__arrow ${ showFilters && 'list__arrow--up'}`}/>
        </div>       
      </li>
      <ul className={`list__show ${ showFilters && 'list__show--open'}`}> 
        {
          filter.values.map(( filter_children, index ) => (
            <li 
              className="list__inside" 
              key={ index }   
              onClick={() => handleClick({ key: filter.id, id_filter: filter_children.id, name: filter_children.name })} 
            >
              <span className='list__link list__link--inside'> { filter_children.name } </span>
            </li>
          ))
        }
      </ul>
    </ul>
)}
