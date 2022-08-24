import React from 'react';
import { AvailableFilter, AvailableSort } from '../../../../models/resultProducts';
import { NavBarFiltersMobile } from './NavBarFiltersMobile';
import { FilterModal } from './filter-modal/FilterModal';
import { SortModal } from './sort-modal/SortModal';

interface Props {
  filters: AvailableFilter[];
  sorts: AvailableSort[];
}

export interface StateModal {
  show: boolean;
  typeModal?: 'filters' | 'sorts';
}

export const ListFiltersMobile : React.FC<Props> = ({ filters, sorts }) => {
  
  const [{ show, typeModal: typeModa }, setSettingsModal ] = React.useState<StateModal>({
    show: false,
  });

  show ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';

  return ( 
    <div className='filters__mobile'> 
      <NavBarFiltersMobile setShowModal={ setSettingsModal }/>
      { 
        typeModa === 'filters' ?
          ( <FilterModal filters={ filters} setShowModal={ setSettingsModal } show={ show } /> )
        :
        typeModa === 'sorts' && 
          ( <SortModal setShowModal={ setSettingsModal } show={ show } sorts={ sorts } /> )
      }
    </div> 
  )
}