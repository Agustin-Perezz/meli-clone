import React, { useContext } from 'react';
import { AvailableFilter } from '../../../../models/resultProducts';
import { FiltersContext } from '../../../../context/filters-context/FiltersContext';

interface Props {
  filter: AvailableFilter;
}

export const FiltersDesktop : React.FC<Props> = ({ filter }) => {

  const { setNewFilter } = useContext( FiltersContext );

  return (
    <div className='filter__desktop__box' > 
      <div className="filter__desktop__title">
        <h3> { filter.name } </h3> 
      </div>
      <ul className="filter__deskop__box--children">
        { 
          filter.values.map(( filter_children, index ) => (
            <li 
              className="filter__desktop__children" 
              data-test-id='filter-button-test'
              key={ index } 
              onClick={() => setNewFilter({ key: filter.id, id_filter: filter_children.id, name: filter_children.name })}
            >
              <span className="filter__desktop__children--name"> { filter_children.name } </span>
              <span className="filter__desktop__children--total"> ({ filter_children.results }) </span>
            </li>
          ))
        }
      </ul>
    </div>  
)}
