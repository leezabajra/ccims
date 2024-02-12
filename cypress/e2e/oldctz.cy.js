import oldctz from '../fixtures/oldctz.json';
describe('Login Test', () => {
    oldctz.forEach((user) => {
      
      
    it('login', () => {
        cy.visit('https://ccimsinternal.infodev.com.np/');
    
      
        cy.get('.form-control').eq(0).type('mohan');
        cy.get('.form-control').eq(1).type('Test@123');
        cy.get('.btn').click();
        cy.wait(4000);
        cy.get(':nth-child(6) > .mastermenu-link').click();

      cy.get('#citizenshipType').select(user.citizenshipType2);
      cy.get(':nth-child(2) > #citizenshiNumberNep > .formValidationDiv > #citizenshipNoNp').type(user.ctzno);
      cy.get(':nth-child(3) > #citizenshiNumberNep > .formValidationDiv > #citizenshipNoNp').type(user.ctznonp);
      cy.get('#citizenshipIssuedDistrictName').click();
      cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district);
      cy.get('tr.ng-star-inserted > :nth-child(4)').click()
    });
});
});