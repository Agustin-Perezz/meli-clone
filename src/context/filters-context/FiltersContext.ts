import { createContext } from "react";
import { SortState } from './FiltersProvider';

export type Filter = {
  key: string,
  id_filter: string,
  name: string,
}

export interface FiltersContextProps { 
  filters: Filter[];
  textSortActive?: 'Más relevante' | 'Menor precio' | 'Mayor precio';
  idSortActive: 'relevance' | 'price_asc' | 'price_desc';

  // Methods
  setSort: React.Dispatch<React.SetStateAction<SortState>>
  setFilters: React.Dispatch<React.SetStateAction<Filter[] | []>>
  setNewFilter: ( { key, id_filter }: Filter ) => void;
  removeFilter: ( key: string ) => void;
}

export const FiltersContext = createContext<FiltersContextProps>( {} as FiltersContextProps );
