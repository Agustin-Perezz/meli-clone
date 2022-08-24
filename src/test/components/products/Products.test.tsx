import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react';
import { Products } from '../../../components/products';
import { ProductsContext } from '../../../context/products-context';

describe('Pruebas <Products />', () => { 

    test('if isLoadingData is true, the component should render loading-ui-component', () => { 
        const contexValues = { 
            data: null, 
            isLoadingData: true,
            queryProduct: null,
            setQueryProduct: jest.fn(),
            resetContext: jest.fn(),
        }
        render ( 
            <ProductsContext.Provider value={{ ...contexValues }}>
                <Products />
            </ProductsContext.Provider> 
        ) 
        screen.getByText('Loading...');
    });

})
