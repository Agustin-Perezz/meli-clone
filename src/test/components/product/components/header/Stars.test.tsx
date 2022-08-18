import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Stars } from '../../../../../components/product/components/header/Stars'

describe('Pruebas en <Stars />', () => { 

    beforeEach(() => {
        render( <Stars rating_average={3} total_reviews={6} />)
    })

    test('render component and view total reviews', () => { 
        expect( screen ).toMatchSnapshot();
        screen.getByText('(6)');
    })
})
