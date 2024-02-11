    
    describe('Login Test', () => {
        beforeEach(() => {
          cy.visit('https://ccimsinternal.infodev.com.np/');
        });
          
        it('login', () => {
          // Fill in the login form with incorrect credentials
          cy.get('.form-control').eq(0).type('mohan');
          cy.get('.form-control').eq(1).type('Test@123');
          cy.get('.btn').click();
          cy.wait(4000);
          cy.get(':nth-child(5) > .mastermenu-link').click();
          cy.get('#collapseExample_4 > :nth-child(1) > .submenu-link').click();
          // cy.get('#firstNameNp').type('श्रद्धा');
          // cy.get('#lastNameNp').type('श्रेष्ठ');
          // cy.get('#firstName').type('shraddha');
          // cy.get('#lastName').type('shrestha');
          // cy.get('#gender').type('f');
          // cy.get('#mother').click();

          // cy.get('#birthRegistrationNo').type('665');
          // cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20621109{enter}');

          cy.get('#formerAddress_address0').click();
          cy.get('#district_address0').click();
          cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
          cy.wait(2000)
          cy.get('tr.ng-star-inserted > :nth-child(4)').click();
          cy.get('#vdc_address0').click();
          cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('madhyapurthimi');
          cy.wait(2000)
          cy.get('tr.ng-star-inserted > :nth-child(3)').click();
          cy.get(':nth-child(5) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type('5{enter}');

          cy.get('#localBody_address1').click();
          cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('changunarayan');
          cy.wait(2000)
          cy.get('tr.ng-star-inserted > :nth-child(3)').click();
          cy.get(':nth-child(1) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type('5{enter}')

          cy.get('#firstNameNp_0').type('प्रशान्त');
          cy.get('#firstName_0').type('prashant');
          cy.wait(2000);
          cy.get('#citizenshipNo_0').type('86242');
          cy.get('#formerAddress_family0').click();
          cy.get('#district_family0').click();
          cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
          cy.wait(2000)
          cy.get('tr.ng-star-inserted > :nth-child(4)').click();
          cy.get('#vdc_family0').click();
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.wait(2000);
          cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type('5{enter}');
          

          // cy.get('.nav > :nth-child(2)').click();
          // cy.get('#firstNameNp_1').type('निलिमा');
          // cy.get('#firstName_1').type('nilima');
          // cy.get('#citizenshipNo_1').type('26546');
          // cy.get('#localBody_family1').click();
          // cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          // cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          // cy.get('.select2-search__field').type('5{enter}');

          // cy.get('#recommendFirstNameNp').type('श्याम');
          // cy.get('#recommendLastNameNp').type('लामा');
          // cy.get('.mb-2.mt-1 > .col-4 > .form-group > .formValidationDiv > .input-group > #officeName').click();
          // cy.get('tbody > :nth-child(1) > :nth-child(2)').click();

          // cy.get('#copyDetailsFrom_father').click();

          // cy.get('.btn-blue').click();

          // cy.get('.px-4 > .btn').click();

          








        });
      });
      