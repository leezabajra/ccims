    
    describe('Login Test', () => {
        beforeEach(() => {
          cy.visit('/');
        });
          
        it('login', () => {
          cy.get('input[type="username"]').type('mohan');
          cy.get('input[type="password"]').type('Test@123');
          cy.get('.btn').click();
          cy.get('.ng-star-inserted').should('contain', 'ड्यासबोर्ड')
          cy.contains('नयाँ नागरिकता').click({timeout: 4000})
          cy.get('#collapseExample_4 > :nth-child(1) > .submenu-link').click();
          cy.pause()
          cy.get('#firstNameNp').type('राजिव');
          cy.get('#lastNameNp').type('महर्जन');
          cy.get('#firstName').type('rajiv');
          cy.get('#lastName').type('shrestha');
          cy.get('#gender').type('m');

          cy.get('#isForeignBirth').click();
          cy.get('#birthRegistrationNo').type('665');
          cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20621109{enter}');
          cy.get('#birthCountryId').click();
          cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('america');
          cy.wait(2000);
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.get('#birthCountryAddressNp').type('न्यु यर्क');
          cy.get('#birthCountryAddress').type('new york');
          cy.get('#localBody_address1').click();
          cy.get('tbody > :nth-child(3) > :nth-child(2)').click();
          cy.get(':nth-child(1) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type('5{enter}');

          // cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          // cy.wait(2000);
          // cy.get(':nth-child(5) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          // cy.get('.select2-search__field').type('5{enter}');

          // cy.get('#sameAsPermanentAddress_address1').click();

          cy.get('#firstNameNp_0').type('प्रशान्त');
          cy.get('#firstName_0').type('prashant');
          cy.wait(2000);
          cy.get('#citizenshipNo_0').type('86242');
          cy.get('#localBody_family0').click();
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.wait(2000);
          cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type('5{enter}');
          

          cy.get('.nav > :nth-child(2)').click();
          cy.get('#firstNameNp_1').type('निलिमा');
          cy.get('#firstName_1').type('nilima');
          cy.get('#citizenshipNo_1').type('26546');
          cy.get('#localBody_family1').click();
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type('5{enter}');

          cy.get('#recommendFirstNameNp').type('श्याम');
          cy.get('#recommendLastNameNp').type('लामा');
          cy.get('.mb-2.mt-1 > .col-4 > .form-group > .formValidationDiv > .input-group > #officeName').click();
          cy.get('tbody > :nth-child(1) > :nth-child(2)').click();
          cy.pause()
          cy.get('#copyDetailsFrom_father').click();

          cy.get('.btn-blue').click();

          cy.get('.px-4 > .btn').click();

          








        });
      });
      