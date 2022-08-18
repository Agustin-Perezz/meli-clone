import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Product } from '../../../components/product/Product';
import { ProductContext } from '../../../context/product-context';

import mockInformationRespose from './MockTestInformation.json'

describe('Pruebas en <Product />', () => { 

    window.scrollTo = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('render component', () => { 
        render( 
            <ProductContext.Provider value={{ dataProduct: { ...mockInformationRespose }}}>
                <Product /> 
            </ProductContext.Provider>
        );
        screen.getByTestId('product-mobile-component');
    })
});