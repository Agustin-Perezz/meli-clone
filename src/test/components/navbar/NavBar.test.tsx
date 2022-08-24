import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { NavBar } from '../../../components/navbar/NavBar';
import { MemoryRouter } from 'react-router-dom';
import { ProductsContext } from '../../../context/products-context/ProductsContext';

describe('Pruebas en <NavBar />', () => { 
    
    const contextValue = { 
        isLoadingData: false,
        queryProduct: null,
        data: null,
        setQueryProduct: jest.fn(),
        resetContext: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('render component', () => { 
        const component = render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
        component.getByText('Enviar a Capital Federal');
    });

    test('setQueryPrduct deve ser llamado al submit del form', () => { 
        render ( 
            <ProductsContext.Provider value={{ ...contextValue }}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </ProductsContext.Provider> 
        );
        const form = screen.getByRole('form');
        const input = screen.getByRole('input');

        fireEvent.change( input, { target: { value: 'a10' } } );
        fireEvent.submit( form );

        expect( contextValue.setQueryProduct ).toHaveBeenCalledTimes(1);
        expect( contextValue.setQueryProduct ).toHaveBeenCalledWith('a10');
    });

});