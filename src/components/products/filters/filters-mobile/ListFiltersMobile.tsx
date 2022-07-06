import React from 'react';
import { AvailableFilter } from '../../../../models/resultProducts';
import { NavBarFiltersMobile } from './NavBarFiltersMobile';

import { FilterModal } from './filter-modal/FilterModal';
import { SortModal } from './sort-modal/SortModal';

interface Props {
  filters: AvailableFilter[];
}

export interface StateProps {
  show: boolean;
  typeModa?: 'filters' | 'sorts';
}

export const ListFiltersMobile : React.FC<Props> = ({ filters }) => {
  
  const [{ show, typeModa }, setSettingsModal ] = React.useState<StateProps>({
    show: false,
  });

  return ( 
    <div className='filters__mobile'> 
      <NavBarFiltersMobile setShowModal={ setSettingsModal }/>
      { 
        typeModa === 'filters' ?
          ( <FilterModal filters={ filters} setShowModal={ setSettingsModal } show={ show } /> )
        :
        typeModa === 'sorts' && 
          ( <SortModal setShowModal={ setSettingsModal } show={ show } /> )
      }
    </div> 
  )
}