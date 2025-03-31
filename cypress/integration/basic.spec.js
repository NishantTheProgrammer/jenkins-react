describe('Basic Test', () => {
    it('visits the Cypress page', () => {
      cy.visit('https://www.cypress.io'); // visit Cypress website
      cy.contains('The most reliable web testing framework').should('be.visible'); // assert text on page
    });
  });