import React from 'react';
import { AvailableFilter } from '../../../../../models/resultProducts';

import { ChevronDownIcon } from '@heroicons/react/outline';

interface Props {
  filter: AvailableFilter;
}

export const FilterMobile : React.FC<Props> = ({ filter }) => {

  const [showFilters, setShowFilters] = React.useState( false );

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
          filter.values.map(( item, index ) => (
            <li className="list__inside" key={ index }>
              <span className='list__link list__link--inside'> { item.name } </span>
            </li>
          ))
        }
      </ul>
    </ul>
)}
