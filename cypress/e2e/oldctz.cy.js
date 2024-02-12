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
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      cy.get('#citizenshipIssuedOfficeName').click();
      cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      cy.wait(2000)
      cy.get(':nth-child(3) > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.issuedate+'{enter}');
      cy.get('#firstNameNp').type(user.firstnamenp);
      cy.get('#lastNameNp').type(user.lastnamenp);
      cy.get('#firstName').type(user.firstname);
      cy.get('#lastName').type(user.lastname);
      cy.get('#gender').type(user.gender);
      cy.get(':nth-child(1) > .col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.dateofbirth+'{enter}');
      cy.get('#formerAddress_address0').click();
      cy.get('#district_address0').click();
      cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district1);
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      cy.get('#vdc_address0').click();
      cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.vdc);
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      cy.get(':nth-child(4) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
      cy.get('.select2-search__field').type(user.wardno+'{enter}')








      
    });
});
});