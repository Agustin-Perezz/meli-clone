/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      searchProduct: typeof searchProduct;
    }
  }
  
  const searchProduct = (value: string): Cypress.Chainable<JQuery> => {
    cy.get('[placeholder="Estoy buscando..."]').type( value );
    return cy.get('button:first').click();
  }

  Cypress.Commands.add('searchProduct', searchProduct);