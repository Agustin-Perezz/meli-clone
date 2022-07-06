import React from 'react';
import { AvailableFilter } from '../../../../models/resultProducts';

interface Props {
  filter: AvailableFilter;
}

export const FiltersDesktop : React.FC<Props> = ({ filter }) => {
  return (
    <div className='filter__desktop__box'> 
      <div className="filter__desktop__title">
        <h3> { filter.name } </h3> 
      </div>
      <ul className="filter__deskop__box--children">
        { 
          filter.values.map(( filter_children, index ) => (
            <li className="filter__desktop__children" key={ index }>
              <span className="filter__desktop__children--name"> { filter_children.name } </span>
              <span className="filter__desktop__children--total"> ({ filter_children.results }) </span>
            </li>
          ))
        }
      </ul>
    </div>  
)}
