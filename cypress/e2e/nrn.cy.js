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
      cy.get(':nth-child(4) > .submenu-link').click();

      
        cy.get('#firstNameNp').type('लिसा');
        cy.get('#lastNameNp').type('महर्जन');
        cy.get('#firstName').type('lisa');
        cy.get('#lastName').type('maharjan');
       cy.get('#gender').type('f');
        cy.get('#religion').select('हिन्दु');
        cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20401111{enter}');
        cy.get('#district_address0').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('ललितपुर');
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(3)').click({force:true});
        cy.get('#localBody_address0').click();
        cy.get(':nth-child(2) > tb-search-field > .form-control-icon > .header-filter').type('गोदावरी');
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(2)').click();
        cy.get('app-address-module.ng-star-inserted > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type('3{enter}');
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
        cy.get('#firstNameNp_0').type('राम');
        cy.get('#lastNameNp_0').type('शाक्य');
        cy.get('#firstName_0').type('ram');
        cy.get('#lastName_0').type('shakya');
        cy.get('#citizenshipNo_0').type('3424');
        cy.get('#citizenshipType_0').select('वंशज');
        cy.get('#nrnIssuedDistrictIdentifyBtn > .ic-search').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
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
        cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type('3{enter}');
        cy.get('.nav > :nth-child(2)').click()
        cy.get('#firstNameNp_1').type('सिता');
        cy.get('#lastNameNp_1').type('शाक्य');
        cy.get('#firstName_1').type('sita');
        cy.get('#lastName_1').type('shakya');
        cy.get('#citizenshipNo_1').type('4512');
        cy.get('#citizenshipType_1').select('वंशज');
        cy.get('#district_family1').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#localBody_family1').click();
        cy.get(':nth-child(6) > :nth-child(3)').click();
        cy.get('#select2-wardNumber_family1-container').type('3{enter}');
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
        cy.get('.px-4 > .btn').click();







    
    });
});