import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react';
import { ListFiltersActiveDesktop } from '../../../../../components/products/filters/list-filters-active';
import { FiltersContext, FiltersContextProps } from '../../../../../context/filters-context/FiltersContext';

describe('Pruebas en <ListFiltersActiveDesktop />', () => { 

    const contextValues : FiltersContextProps = { 
        filters: [{ key: '1324', id_filter: 'asf', name: 'test'}],
        textSortActive: 'Más relevante',
        idSortActive: 'relevance',
        setSort: jest.fn(),
        setFilters: jest.fn(),
        setNewFilter: jest.fn(),
        removeFilter: jest.fn(),
    }

    beforeEach(() => {         
        render (  
                <FiltersContext.Provider value={{ ...contextValues }}>
                    <ListFiltersActiveDesktop />
                </FiltersContext.Provider> 
            )
        jest.clearAllMocks()  
    });

    test('render component', () => { 
        expect( screen ).toMatchSnapshot();
    })

    test('when clicking on the filter the removeFilter function should be called', () => { 
        const filter_box = document.querySelector('li');
        fireEvent.click( filter_box! );
        expect( contextValues.removeFilter ).toHaveBeenCalledTimes(1);
    })

});