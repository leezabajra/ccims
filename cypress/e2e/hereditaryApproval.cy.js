///<reference types = 'cypress'/>

it('Approval of Hereditary', () => {
    cy.visit('/')

    cy.get('input[type="username"]').type('radha');
    cy.get('input[type="password"]').type('Test@123');
    cy.get('.btn').click();
    cy.contains('बबरमहल').click()
    cy.pause()
    cy.get('.ic-approval').click()
    cy.get('[title="वंशज"]').click()
    cy.get('.ic-eye-true').eq(0).click()
    cy.get('.btn-blue').eq(1).click()
    cy.get('#confirmBtn').click()

});