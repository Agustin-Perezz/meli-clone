import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { ModalDropdown } from '../../../../../components/product/components/modal-dropdown'

describe('Pruebas en <ModalDropdown />', () => { 
    test('el componente deve mostrar el contenido y el title pasado en las props', () => { 
        render( 
            <ModalDropdown 
                children={ <h2>this is a test</h2> }
                dropdown_title='Title test'
                additional_className='classNameTest'
            />
        );  
        const header = screen.getByTestId('dropdown-header');

        screen.getByText('Title test');
        screen.getByText('this is a test');
        expect( header).toHaveClass('classNameTest');
    });
});
