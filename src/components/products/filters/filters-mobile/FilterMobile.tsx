import React from 'react';
import { AvailableFilter } from '../../../../models/resultProducts';

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
          <svg className={`list__arrow ${ showFilters && 'list__arrow--up'}`} viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path fill="none" fillRule="evenodd" d="M1 1.343L6.657 7 1 12.657"></path></svg>
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
