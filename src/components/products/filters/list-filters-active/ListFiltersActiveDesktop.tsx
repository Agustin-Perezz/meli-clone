import { useContext } from 'react';
import { FiltersContext } from '../../../../context/filters-context';

import close from '../../../../assets/svg/close.svg';

export const ListFiltersActiveDesktop = () => {

  const { filters, removeFilter } = useContext( FiltersContext );

  return (
    <ul className={`filters__active__desktop ${ filters.length === 0 && 'not-filters'}`}>
      { 
        filters.map(( filter, index ) => (
          <li 
            onClick={() => removeFilter( filter.id_filter )}
            className='filters__active__desktop__filter' 
            key={ index } 
            data-test-id='filter-active' 
          >
            <span className='filters__active__desktop__filter--label'> { filter.name } </span>
            <img src={ close } className='filters__active__desktop__filter--icon' alt='close-icon'/>
          </li>
        ))
      }
    </ul>
  )
}
