///<reference types = 'cypress'/>
import adoptiondata from "../fixtures/adoptiondata.json"
describe('adoptionapproval', () => {
    adoptiondata.forEach((user) =>{
it('Approval of Adoption', () => {
    cy.visit('/')

    cy.get('input[type="username"]').type('rabin');
    cy.get('input[type="password"]').type('Test@123');
    cy.get('.btn').click();
    cy.get('.ic-approval').click()
    cy.get('.lan-change-link').click()
    cy.get('.approval__container__subMenu__box__icon__yellow > .ic-file').click()

    cy.get('.ic-eye-true').eq(0).click()
    // approval
    cy.get('.btn-blue').eq(1).click()
    cy.get('#confirmBtn').click()
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(2) > .mastermenu-link').click();

});
    })
})
