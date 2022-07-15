
import React, { useContext } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { AvailableSort } from '../../../models/resultProducts';
import { FiltersContext } from '../../../context/filters-context';

interface Props {
  sorts: AvailableSort[];
}

export const ViewOptionsProducts : React.FC<Props> = ({ sorts }) => {

  const [showMenu, setShowMenu] = React.useState( false );

  const { textSortActive, idSortActive, setSort } = useContext( FiltersContext );

  const handleClick = ({ name, id }: AvailableSort ) => {
    setSort({ textSortActive: name, idSortActive: id });
    setShowMenu( false );
  }

  return (
    <div className="products__options">
      <span className="products__options__name"> Ordenar por </span>
      <button className="products__options__dropdown" onClick={() => setShowMenu(prev => !prev)}> 
        <span className="products__options__text"> { textSortActive } </span>
        <ChevronDownIcon className={`products__options__icon ${ showMenu && 'products__options__icon--show'}`} />
      </button>
      <ul className={`float__menu ${ showMenu && 'float__menu--show'}`}>
        {
          sorts.map(({ name, id }, index ) => ( 
            <li 
              className={`float__menu__item ${ id === idSortActive && 'float__menu__item--active' }`} 
              key={ index }
              onClick={() => handleClick({ name, id })} 
            >
              { name }
            </li>
          ))
        }
      </ul>
    </div>
)}
