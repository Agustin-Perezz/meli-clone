import { StateModal } from './ListFiltersMobile';

import sync_icon from '../../../../assets/svg/sync_arrow.svg';
import filter_icon from '../../../../assets/svg/filter_icon.svg';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<StateModal>>;
}

export const NavBarFiltersMobile : React.FC<Props> = ({ setShowModal }) => {
  return (
    <nav className='filters__nav'> 
      <div className="filters__nav__bottom" onClick={ () => setShowModal({ show: true, typeModal: 'sorts' })}>
        <img src={ sync_icon } alt="sync-icon" />
        <span> Ordenar </span>
      </div>
      <div className="filters__nav__arrives">
        <span> Llegan mañana </span>
        <label className='switch'>
          <input type="checkbox" />
          <span className='slider'></span>
        </label>
      </div>  
      <div className="filters__nav__bottom" onClick={ () => setShowModal({ show: true, typeModal: 'filters' })}>
        <img src={ filter_icon } alt="filter-icon"/>
        <span > Filtrar </span>
      </div>
    </nav>
)}
