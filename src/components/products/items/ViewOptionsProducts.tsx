
import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

interface ItemsProps { 
  active_item: 'most-relevant' | 'lowest-price' | 'bigest-price';
  name_item: 'Más relevante' | 'Menor precio' | 'Mayor precio';
}

export const ViewOptionsProducts : React.FC<{}> = ({}) => {

  const [showMenu, setShowMenu] = React.useState( false );
  const [{ active_item, name_item }, setActiveItem] = React.useState<ItemsProps>({
    active_item: 'most-relevant',
    name_item: 'Más relevante',
  });

  const handleClick = ({ active_item, name_item }: ItemsProps ) => {
    setActiveItem({ active_item, name_item });
    setShowMenu( false );
  }
  
  return (
    <div className="products__options">
      <span className="products__options__name"> Ordenar por </span>
      <button className="products__options__dropdown" onClick={() => setShowMenu(prev => !prev)}> 
        <span className="products__options__text"> { name_item } </span>
        <ChevronDownIcon className={`products__options__icon ${ showMenu && 'products__options__icon--show'}`} />
      </button>
      <ul className={`float__menu ${ showMenu && 'float__menu--show'}`}>
        <li 
          className={`float__menu__item ${ active_item == 'most-relevant' && 'float__menu__item--active'}`}
          onClick={() => handleClick({ active_item: 'most-relevant', name_item: 'Más relevante' })}
        > Más relevantes </li>
        <li 
          className={`float__menu__item ${ active_item == 'lowest-price' && 'float__menu__item--active'}`}
          onClick={() => handleClick({ active_item: 'lowest-price', name_item: 'Menor precio' })}
        > Menor precio </li>
        <li 
          className={`float__menu__item ${ active_item == 'bigest-price' &&  'float__menu__item--active'}`}
          onClick={() => handleClick({ active_item: 'bigest-price', name_item: 'Mayor precio' })}
        > Mayor precio </li>
      </ul>
    </div>
)}
