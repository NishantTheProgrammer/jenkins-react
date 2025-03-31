describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[type="number"]').first().type('10')
    cy.get('input[type="number"]').last().type('20')
    cy.get('button').click()
    cy.get('p').should('have.text', 'Result: 30')
  })
})