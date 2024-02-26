    
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
          cy.get(':nth-child(3) > .submenu-link').click();
          cy.get('#firstNameNp').type('मार्कस');
          cy.get('#lastNameNp').type('फर्नान्देस');
          cy.get('#firstName').type('marcus');
          cy.get('#lastName').type('fernandes');
          cy.get('#gender').type('m');

          cy.get('.formcard__form > :nth-child(1) > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20631015{enter}');

          cy.get('#birthCountryId').click();
          cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('united states of america')
          cy.wait(2000)
          cy.get('tr.ng-star-inserted > :nth-child(3)').click();
          cy.get('#birthCountryAddressNp').type('न्यु यर्क');
          cy.get('#birthCountryAddress').type('new york');
          
          
          cy.get('#district_address1').click();
          cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
          cy.wait(2000);
          cy.get('tr.ng-star-inserted > :nth-child(4)').click();
          cy.get('#localBody_address1').click();
          cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('changunarayan');
          cy.wait(2000);
          cy.get('tr.ng-star-inserted > :nth-child(3)').click();
          cy.wait(2000);
          cy.get(':nth-child(1) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
          cy.get('.select2-search__field').type('2{enter}')
          
          cy.get('#firstNameNp_0').type('दिपक');
          cy.get('#firstName_0').type('dipak');
          cy.get('#lastNameNp_0').type('फर्नान्देस');
          cy.get('#lastName_0').type('fernandes')
          cy.wait(2000);
          cy.get('#citizenshipNo_0').type('86242');
          cy.get('#famAddressCountry_0').click();
          cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('united states of america');
          cy.wait(2000)
          cy.get('tr.ng-star-inserted > :nth-child(3)').click();
          cy.get('#addressNameNp_0').type('न्यु यर्क');
          cy.get('#addressName_0').type('new york');
 
          cy.get('.nav > :nth-child(2)').click();
          cy.get('#firstNameNp_1').type('निलिमा');
          cy.get('#firstName_1').type('nilima');
          cy.get('#lastNameNp_1').type('फर्नान्देस');
          cy.get('#lastName_1').type('fernandes')
          cy.get('#citizenshipNo_1').type('26546');
          cy.get('#famAddressCountry_1').click();
          cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('india');
          cy.wait(2000)
          cy.get('tbody > :nth-child(3) > :nth-child(3)').click();
          cy.get('#addressNameNp_1').type('देल्ही');
          cy.get('#addressName_1').type('delhi')

        cy.get('.mb-3 > .form-group > .formValidationDiv > .input-group > .btn').click();
        cy.wait(2000)
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('changunarayan');
        cy.wait(2000);
        cy.get('tbody > :nth-child(4) > :nth-child(3) > .ng-star-inserted').click();
        cy.get('#recommendFirstNameNp').type('श्याम');
        cy.get('#recommendLastNameNp').type('लामा');
        cy.get('.mb-2.mt-1 > .col-4 > .form-group > .formValidationDiv > .input-group > #officeName').click();
        cy.get('tbody > :nth-child(1) > :nth-child(2)').click();

        cy.get('#copyDetailsFrom_father').click();
        cy.get('#reviewerName').click();
        cy.get(':nth-child(2) > tb-search-field > .form-control-icon > .header-filter').type('रविन');
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(2)').click();
        cy.get('#approverName').click();
        cy.get(':nth-child(2) > tb-search-field > .form-control-icon > .header-filter').type('रविन');
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(2)').click();
        cy.get('.btn-blue').should('exist').and('contain', 'आवेदन हेर्नुहोस्')
        cy.get('.ng-star-inserted').should('exist').and('contain', 'रिसेट गर्नुहोस्')
        cy.get('.btn-blue').click();
        cy.get('.toast-message').should('include.text', ' डाटा सफलतापूर्वक सेव गरिएको छ ')
        cy.get('.px-4 > .btn').click()
        cy.get('.toast-message').should('include.text', 'डाटा सफलतापूर्वक ल्याइयो')
        cy.get('h5.ng-star-inserted').should('include.text', 'दैनिक समग्र सूची')
        

        

          








        });
      });
      