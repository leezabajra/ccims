    
    describe('Login Test', () => {
        beforeEach(() => {
          cy.visit('https://ccimsinternal.infodev.com.np/');
        });
          
        it('login', () => {
          
          
          cy.get('.form-control').eq(0).type('mohan');
          cy.get('.form-control').eq(1).type('Test@123');
          cy.get('.btn').click();
          cy.wait(4000);
          cy.get(':nth-child(5) > .mastermenu-link').click();
         
          cy.get(':nth-child(6) > .submenu-link').click();
          cy.get('#firstNameNp').type('सुधा');
          cy.get('#lastNameNp').type('कार्की');
          cy.get('#firstName').type('sudha');
          cy.get('#lastName').type('karki');
          cy.get('#gender').type('f');

          cy.get('#birthRegistrationNo').type('665236');
          cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20621111{enter}');
          
          cy.get('#district_address0').click();
          cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
          cy.wait(2000);
          cy.get('tr.ng-star-inserted > :nth-child(4)').click();
          cy.get('#localBody_address0').click();
          cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
          cy.wait(2000);
          cy.get(':nth-child(5) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type('5{enter}');

          cy.get('#sameAsPermanentAddress_address1').click();

          cy.get('#firstNameNp_0').type('नरेन');
          cy.get('#firstName_0').type('naren');
          cy.wait(2000);
          cy.get('#citizenshipNo_0').type('86242');
          cy.get('#citizenshipType_0').select('वंशज');
          cy.get('#localBody_family0').click();
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.wait(2000);
          cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type('5{enter}');
          

          cy.get('.nav > :nth-child(2)').click();
          cy.get('#firstNameNp_1').type('अमृता');
          cy.get('#firstName_1').type('amrita');
          cy.get('#citizenshipNo_1').type('26546');
          cy.get('#citizenshipType_1').select('वंशज');
          cy.get('#localBody_family1').click();
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type('5{enter}');

          cy.get('#recommendFirstNameNp').type('श्याम');
          cy.get('#recommendLastNameNp').type('लामा');
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
      