
import { faker } from '@faker-js/faker/locale/en';

    describe('Login Test', () => {
                
      function operatorlogin() {
        cy.visit('https://ccimsinternal.infodev.com.np/');
        cy.get('.form-control').eq(0).type('bkings');
        cy.get('.form-control').eq(1).type('Test@123');
        cy.get('.btn').click();
        // cy.get('.active').click()
        cy.url().should('eq', 'https://ccimsinternal.infodev.com.np/#/featured/dashboard')
        cy.wait(2000);
      }
      
        it.only('Using Valid datas', () => {
          cy.fixture('hereditary')
            .its('data').then(user =>{
                  user.forEach((user)=>{
                    operatorlogin()
              cy.get(':nth-child(5) > .mastermenu-link').click();
              cy.get('#collapseExample_4 > :nth-child(1) > .submenu-link').click();
              cy.url().should('eq', 'https://ccimsinternal.infodev.com.np/#/featured/citizenship/hereditary')
              cy.get('.ng-star-inserted').should('contain', ' वंशज नातामा नागरिकता आवेदन')
          
              const nepaliName = faker.phone.number('/fd##')
              cy.get('#firstNameNp').type(nepaliName);
              cy.log(nepaliName)
          cy.get('#firstNameNp').type(faker.person.firstName('/fd##'));
          cy.get('#lastNameNp').type(faker.person.lastName('Yatra##'));
          cy.get('#firstName').type(faker.person.firstName('ranjan##'));
          

          cy.get('#lastName').type(faker.person.lastName());
          cy.get('#gender').type(user.gender);
          cy.pause()

          cy.get('#birthRegistrationNo').type(user.birthRegistrationNo);
          cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.DOB+'{enter}');
          
          cy.get('#localBody_address0').click();
          cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
          cy.wait(2000);
          cy.get(':nth-child(5) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type(user.wardno+'{enter}');

          cy.get('#sameAsPermanentAddress_address1').click();

          cy.get('#firstNameNp_0').type('आदर्श');
          cy.get('#firstName_0').type('adharsh');
          cy.wait(2000);
          cy.get('#citizenshipNo_0').type(user.citizenshipNo_0);
          cy.get('#localBody_family0').click();
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
          cy.wait(2000);
          cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type(user.wardno+'{enter}');
          

          cy.get('.nav > :nth-child(2)').click();
          cy.get('#firstNameNp_1').type('अश्मी');
          cy.get('#firstName_1').type('ashmi');
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

          cy.get('.formValidationTooltip').scrollIntoView();
          cy.get('.formValidationTooltip').should('be.visible').and('have.text', 'यो क्षेत्र आवश्यक छ।');

          cy.get('.px-4 > .btn').click();


          // cy.get('#dropdownUser').click();
          // cy.get('.dropdown--list > :nth-child(3)').click();

          






        });

        });
      
        });
      });