import hereditarydata from '../fixtures/hereditarydata.json';
    describe('Login Test', () => {
      hereditarydata.forEach((user) => {
          
      
        it('login', () => {
          
          cy.visit('https://ccimsinternal.infodev.com.np/');
          cy.get('.form-control').eq(0).type('mohan');
          cy.get('.form-control').eq(1).type('Test@123');
          cy.get('.btn').click();
          cy.wait(4000);
          cy.get(':nth-child(5) > .mastermenu-link').click();
          cy.get('#collapseExample_4 > :nth-child(1) > .submenu-link').click();
          
          cy.get('h5.ng-star-inserted').should('exist').and('contain.text',' वंशज नातामा नागरिकता आवेदन')
          cy.get('#firstNameNp').type(user.firstNameNp);
          cy.get('#lastNameNp').type(user.lastNameNp);
          cy.get('#firstName').type(user.firstName);
          cy.get('#lastName').type(user.lastName);
          cy.get('#gender').type(user.gender);

          cy.get('#birthRegistrationNo').type(user.birthRegistrationNo);
          cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.DOB+'{enter}');
          
          cy.get('#localBody_address0').click();
          cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
          cy.wait(2000);
          cy.get(':nth-child(5) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type(user.wardno+'{enter}');

          cy.get('#sameAsPermanentAddress_address1').click();

          cy.get('#firstNameNp_0').type('दिपक');
          cy.get('#firstName_0').type('dipak');
          cy.wait(2000);
          cy.get('#citizenshipNo_0').type(user.citizenshipNo_0);
          cy.get('#localBody_family0').click();
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.wait(2000);
          cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type(user.wardno+'{enter}');
          

          cy.get('.nav > :nth-child(2)').click();
          cy.get('#firstNameNp_1').type('निलिमा');
          cy.get('#firstName_1').type('nilima');
          cy.get('#citizenshipNo_1').type(user.citizenshipNo_1);
          cy.get('#localBody_family1').click();
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type(user.wardno+'{enter}');

          cy.get('#recommendFirstNameNp').type(user.recommendFirstNameNp);
          cy.get('#recommendLastNameNp').type(user.recommendLastNameNp);
          cy.get('.mb-2.mt-1 > .col-4 > .form-group > .formValidationDiv > .input-group > #officeName').click();
          cy.get('tbody > :nth-child(1) > :nth-child(2)').click();

          cy.get('#copyDetailsFrom_father').click();

          cy.get('.btn-blue').click();

          // cy.get('.formValidationTooltip').scrollIntoView();
          // cy.get('.formValidationTooltip').should('be.visible').and('have.text', 'यो क्षेत्र आवश्यक छ।');

          // cy.get('.px-4 > .btn').click();


          // cy.get('#dropdownUser').click();
          // cy.get('.dropdown--list > :nth-child(3)').click();

          






        });

        });
      });
      