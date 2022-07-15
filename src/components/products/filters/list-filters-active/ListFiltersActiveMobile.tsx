import { useContext } from 'react';
import { FiltersContext } from '../../../../context/filters-context';

import close from '../../../../assets/svg/close.svg';

export const ListFiltersActiveMobile = () => {

  const { filters, removeFilter } = useContext( FiltersContext );
  
  return (
    <ul className={`filters__active ${ filters.length === 0 && 'not-filters'}`}>
      {
        filters.map(( filter, index ) => ( 
          <li className='filters__active__filter' key={ index } onClick={() => removeFilter( filter.id_filter )}>
            <span className='filters__active__filter--label'> { filter.name } </span>
            <img src={ close } className='filters__active__filter--icon' alt='close-icon'/>
          </li>
        ))
      }
    </ul>
  )
}
