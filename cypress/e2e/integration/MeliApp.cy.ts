/// <reference types="cypress"/>

describe('Test in <MeliApp />', () => { 

    beforeEach(() => {
        cy.visit('http://localhost:3000/meli-clone/items');
        cy.viewport(1180, 700);
    })

    it('front-end page can be opened', () => { 
        cy.contains('Meli Clone developed by Agustin');
    });

    it('user can search a product', () => { 
        const queryProuct = 'Tv Smart 60'
        cy.searchProduct( queryProuct );
        cy.contains( queryProuct );
    });

    it('user can apply filters', () => { 
        const queryProuct = 'Tv Smart 60';
        const textFilter = 'En cuotas';
        cy.searchProduct( queryProuct );
        cy.contains( textFilter ).click();
        cy.get('.filters__active__desktop__filter span')
            .should('contain.text', textFilter)
            .should('have.css', 'color', 'rgba(0, 0, 0, 0.62)');
    });
    
    it('user can visit any product', () => { 
        const queryProuct = 'a10';
        cy.searchProduct( queryProuct );
        cy.get('.box__image--container').first().click();
        cy.contains('Stock disponible');
        cy.contains('Características generales')
        cy.contains('Preguntas y respuestas');
    });
    
});
