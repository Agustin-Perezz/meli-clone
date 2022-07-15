import React from 'react';
import { FiltersContext, Filter } from './FiltersContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface SortState {
  textSortActive?: 'Más relevante' | 'Menor precio' | 'Mayor precio';
  idSortActive: 'relevance' | 'price_asc' | 'price_desc';
}

const sorted_filters = JSON.parse( localStorage.getItem('filters') as string ) as Filter[];

const INIT_STATE_FILTERS : Filter[] | [] = sorted_filters || [];

const INIT_STATE_SORT : SortState = {
  textSortActive: 'Más relevante',
  idSortActive: 'relevance',
};

export const FiltersProvider : React.FC<Props> = ({ children }) => {

  const [ filters, setFilters ] = React.useState( INIT_STATE_FILTERS );
  const [ sort, setSort ] = React.useState( INIT_STATE_SORT );
  
  React.useEffect(() => {
    const stored_filters = localStorage.getItem('filters');
    if ( stored_filters ) {  
      setFilters( JSON.parse( stored_filters ));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('filters', JSON.stringify( filters )); 
  }, [ filters ]);

  const setNewFilter = ( newFilter : Filter ) => {
    setFilters([ ...filters, { ...newFilter } ]);
  }
  
  const removeFilter = ( id: string ) => {
    const newFilters: Filter[] = filters.filter( filter => filter.id_filter !== id ); 
    setFilters([ ...newFilters ]);
  }
  

  return (
    <FiltersContext.Provider value={{
      filters,
      ...sort,

      // Methods
      setSort,
      setFilters,
      setNewFilter,
      removeFilter
    }}>
      { children }
    </FiltersContext.Provider>
)}
