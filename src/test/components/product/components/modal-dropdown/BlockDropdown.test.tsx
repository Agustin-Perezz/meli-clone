import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { BlockDropdown } from '../../../../../components/product/components/modal-dropdown/BlockDropdown'

describe('Pruebas en <BlockDropdown />', () => { 
    test('el componente deve renderizar correctamente el title pasado en las props', () => { 
        const title = 'Test title'
        render( <BlockDropdown content_title={ title } /> );
        screen.getByText( title );
    })
});