import bybirth from '../fixtures/bybirth.json';
    describe('By birth test', () => {
      bybirth.forEach((user) => {

          
        it('bybirth', () => {
          
          cy.visit('https://ccimsinternal.infodev.com.np/');
          cy.get('.form-control').eq(0).type('mohan');
          cy.get('.form-control').eq(1).type('Test@123');
          cy.get('.btn').click();
          cy.wait(4000);
          cy.get(':nth-child(5) > .mastermenu-link').click();
          
          cy.get(':nth-child(5) > .submenu-link').click();
          cy.get('#firstNameNp').type(firstNameNp);
          cy.get('#lastNameNp').type(lastNameNp);
          cy.get('#firstName').type(firstName);
          cy.get('#lastName').type(lastName);
          cy.get('#gender').type(gender);

          cy.get('#birthRegistrationNo').type(birthRegistrationNo);
          cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(DOB+'{enter}');
          
          cy.get('#district_address0').click();
          cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
          cy.wait(2000);
          cy.get('tr.ng-star-inserted > :nth-child(4)').click();
          cy.get('#localBody_address0').click();
          cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
          cy.wait(2000);
          cy.get(':nth-child(5) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type(wardno +'{enter}');

          cy.get('#sameAsPermanentAddress_address1').click();

          cy.get('#firstNameNp_0').type(firstNameNp_0);
          cy.get('#firstName_0').type(firstName_0);
          cy.wait(2000);
          cy.get('#citizenshipNo_0').type(citizenshipNo_0);
          cy.get('#citizenshipType_0').select('वंशज');
          cy.get('#localBody_family0').click();
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.wait(2000);
          cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type(wardno +'{enter}');
          

          cy.get('.nav > :nth-child(2)').click();
          cy.get('#firstNameNp_1').type(firstNameNp_1);
          cy.get('#firstName_1').type(firstName_1);
          cy.get('#citizenshipNo_1').type(citizenshipNo_1);
          cy.get('#citizenshipType_1').select('वंशज');
          cy.get('#localBody_family1').click();
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type(wardno +'{enter}');

          cy.get('#recommendFirstNameNp').type(recommendFirstNameNp);
          cy.get('#recommendLastNameNp').type(recommendLastNameNp);
          cy.get('.mb-2.mt-1 > .col-4 > .form-group > .formValidationDiv > .input-group > #officeName').click();
          cy.get('tbody > :nth-child(1) > :nth-child(2)').click();

          cy.get('#copyDetailsFrom_father').click();
          cy.get('#citizenshipIssuedDistrict').click();
          cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
          cy.wait(2000)
          cy.get('tr.ng-star-inserted > :nth-child(4)').click();

          cy.get('#reviewerName').click();
        cy.get(':nth-child(2) > tb-search-field > .form-control-icon > .header-filter').type('रविन');
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(2)').click();
        cy.get('#approverName').click();
        cy.get(':nth-child(2) > tb-search-field > .form-control-icon > .header-filter').type('रविन');
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(2)').click();

          cy.get('.btn-blue').click();

          cy.get('.px-4 > .btn').click();


          // cy.get('#dropdownUser').click();
          // cy.get('.dropdown--list > :nth-child(3)').click();

          








        });
      });
    });
      