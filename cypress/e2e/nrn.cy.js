import { faker } from '@faker-js/faker/locale/ne';


describe('Login Test', () => {
    beforeEach(() => {
      cy.visit('https://ccimsinternal.infodev.com.np/');
    });
      
    it('login', () => {
      
      
      cy.get('.form-control').eq(0).type('shashi@yopmail.com');
      cy.get('.form-control').eq(1).type('User@123');
      cy.get('.btn').click();
      cy.wait(4000);
     cy.get('.active > .fs-5').click()
      cy.get(':nth-child(5) > .mastermenu-link').click();
      cy.get(':nth-child(3) > .submenu-link').click();

      
        cy.get('#firstNameNp').type(faker.person.firstName());
        cy.get('#lastNameNp').type(faker.person.lastName());
        cy.get('#firstName').type(faker.person.firstName());
        cy.get('#lastName').type(faker.person.lastName());
       cy.get('#gender').type('m');
        cy.get('#religion').select('हिन्दु');
        cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20401111{enter}');
        cy.get('#district_address0').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('ललितपुर');
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(3)').click({force:true});
        cy.get('#localBody_address0').click();
        cy.get(':nth-child(2) > tb-search-field > .form-control-icon > .header-filter').type('लल');
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(2)').click();
        cy.wait(2000)
     cy.get('#wardNumber_address0').select('5'); // selects ५



     cy.get('#citizenshipCountryNameNp').click();
        cy.get(':nth-child(2) > tb-search-field > .form-control-icon > .header-filter').type('ऑस्ट्रेलिया');
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(2)').click();
        cy.get('#nrnCitizenshipNumber').type('13124');
        cy.get('.formcard__form > :nth-child(4) > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20401111{enter}');
        cy.get('#passportNumber').type('45635');
        cy.get(':nth-child(6) > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20701111{enter}');
        cy.get('#passportIssuingAuthority').type('embassy');
        cy.get(':nth-child(7) > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20831212{enter}');
        cy.get('#nrnForeignAddress').type('australia');

        cy.get('#firstNameNp_0').type(faker.person.firstName('male'));
        cy.get('#lastNameNp_0').type(faker.person.lastName());
        cy.get('#firstName_0').type(faker.person.firstName('male'));
        cy.get('#lastName_0').type(faker.person.lastName());
        cy.get('#citizenshipNo_0').type('3424');
        cy.get('#citizenshipType_0').select('वंशज');
        cy.get('#nrnIssuedDistrictIdentifyBtn > .ic-search').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('kathmandu');
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#district_family0').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(4) > .ng-star-inserted').click();
        cy.get('#localBody_family0').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click();
        cy.wait(2000)
        cy.get('#wardNumber_family0').select('5'); // selects ५

        cy.get('.nav > :nth-child(2)').click()
        cy.get('#firstNameNp_1').type(faker.person.firstName('female'));
        cy.get('#lastNameNp_1').type(faker.person.lastName());
        cy.get('#firstName_1').type(faker.person.firstName('female'));
        cy.get('#lastName_1').type(faker.person.lastName());
        cy.get('#citizenshipNo_1').type('4512');
        cy.get('#citizenshipType_1').select('वंशज');
        cy.get('#district_family1').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#localBody_family1').click();
        cy.get(':nth-child(6) > :nth-child(3)').click();
        cy.get('#wardNumber_family1').select('5'); // selects ५

     cy.get('#officeBtn > .ic-search').click();
        cy.get(':nth-child(2) > tb-search-field > .form-control-icon > .header-filter').type('३');
        cy.get('tbody > :nth-child(2) > :nth-child(2)').click()

        cy.get('#recommendFirstNameNp').type('shiv');
        cy.get('#recommendLastNameNp').type('mahat');
        cy.get('#designationId > .ic-search').click();
        cy.get('tbody > :nth-child(1) > :nth-child(2)').click();
        cy.get('#copyDetailsFrom_father').click();
        cy.get('.col-6 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20800711{enter}');
        cy.get('.citizenship__wrapper__buttons > .btn-blue').click();
        cy.get('.btn-blue').should('exist').and('contain', 'आवेदन हेर्नुहोस्')
        cy.get('.ng-star-inserted').should('exist').and('contain', 'रिसेट गर्नुहोस्')
        cy.wait(2000)
        // cy.get('.btn-blue').click();
        cy.get('.toast-message').should('include.text', ' डाटा सफलतापूर्वक सेव गरिएको छ ')
        cy.get('.px-4 > .btn').click()
        cy.get('.toast-message').should('include.text', 'डाटा सफलतापूर्वक ल्याइयो')
        cy.get('h5.ng-star-inserted').should('include.text', 'दैनिक समग्र सूची')







    
    });
});