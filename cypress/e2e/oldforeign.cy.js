    
    describe('Login Test', () => {
      function operatorlogin() {
        cy.visit('https://ccimsinternal.infodev.com.np/');
        cy.get('.form-control').eq(0).type('rupa');
        cy.get('.form-control').eq(1).type('User@123');
        cy.get('.btn').click();
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
        cy.get('#firstNameNp').type(user.firstNameNp);
        cy.get('#lastNameNp').type(user.lastNameNp);
        cy.get('#firstName').type(user.firstName);
        cy.get('#lastName').type(user.lastName);
        cy.get('#gender').type(user.gender);

        cy.get('#isForeignBirth').click();
        cy.get('#birthRegistrationNo').type(user.birthRegistrationNo);
        cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.DOB+'{enter}');
        cy.get('#birthCountryId').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.country);
        cy.wait(2000);
        cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
        cy.get('#birthCountryAddressNp').type(user.countryaddressnp);
        cy.get('#birthCountryAddress').type(user.countryaddress);
        cy.get('#localBody_address1').click();
        cy.get('tbody > :nth-child(3) > :nth-child(2)').click();
        cy.get(':nth-child(1) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(user.wardno+'{enter}');
          
        cy.get('#firstNameNp_0').type(user.firstNameNp_0);
        cy.get('#firstName_0').type(user.firstName_0);
        cy.wait(2000);
        cy.get('#citizenshipNo_0').type(user.citizenshipNo_0);
        cy.get('#formerAddress_family0').click();
        cy.get('#district_family0').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district2);
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#vdc_family0').click();
        cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
        cy.wait(2000);
        cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(user.wardno1+'{enter}');
          

        cy.get('.nav > :nth-child(2)').click();
        cy.get('#firstNameNp_1').type(user.firstNameNp_1);
        cy.get('#firstName_1').type(user.firstName_1);
        cy.get('#citizenshipNo_1').type(user.citizenshipNo_1);
        cy.get('#formerAddress_family1').click();
        cy.get('#district_family1').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district3);
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#vdc_family1').click();
        cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
        cy.wait(2000);
        cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(user.wardno2+'{enter}');

        cy.get('#recommendFirstNameNp').type(user.recommendFirstNameNp);
        cy.get('#recommendLastNameNp').type(user.recommendLastNameNp);
        cy.get('.mb-2.mt-1 > .col-4 > .form-group > .formValidationDiv > .input-group > #officeName').click();
        cy.get('tbody > :nth-child(1) > :nth-child(2)').click();

          cy.get('#copyDetailsFrom_father').click();
          cy.get('.btn-blue').should('exist').and('contain', 'आवेदन हेर्नुहोस्')
          cy.get('.ng-star-inserted').should('exist').and('contain', 'रिसेट गर्नुहोस्')
          cy.get('.btn-blue').click()
          cy.get('.toast-message').should('include.text', ' डाटा सफलतापूर्वक सेव गरिएको छ ')
          cy.get('.formValidationTooltip').should('not exist', 'यो क्षेत्र आवश्यक छ।');
    
    
          // cy.get('.px-4 > .btn').click();
          cy.wait(2000)
          cy.get('.mb-3').should('exist').and('contain', ' प्रिन्ट')
          cy.get('.px-4 > .btn').click()
          cy.get('.toast-message').should('include.text', 'डाटा सफलतापूर्वक ल्याइयो')
          cy.get('h5.ng-star-inserted').should('include.text', 'दैनिक समग्र सूची')

          






            })
          })

        });
      });
      