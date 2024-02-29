describe('Login Test', () => {
    beforeEach(() => {
      cy.visit('https://ccimsinternal.infodev.com.np/');
    });
      
    it.only('pratilipi for nochange', () => {
      
      
      cy.get('.form-control').eq(0).type('rupa');
      cy.get('.form-control').eq(1).type('User@123');
      cy.get('.btn').click();
      cy.get(':nth-child(9) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('२९-०१-७४-०४५१३');
      cy.get('.modal-footer > .flex-end > .btn-blue').click();
      cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'धिरज')
      
      cy.wait(2000);
      cy.get('.ic-more-vertical').eq(0).click();
      cy.wait(2000)
      cy.get(':nth-child(1) > :nth-child(12) > tb-action-btn > .dropdown > .dropdown-menu > .list > :nth-child(6) > .btn').should('exist').click();
      cy.get('h5.ng-star-inserted').should('exist').and('include.text','नागरिकताको प्रतिलिपि');
      cy.get('.btn-base-primary').should('exist').and('include.text','पछाडि जानुहोस्');
      cy.wait(3000);
      cy.get('.header-background > .d-flex.ng-star-inserted > .btn-sm').should('exist').and('include.text','थप्नुहोस्').click();
      cy.get('#copyReason').select('हराएको');
      cy.get('#copyDetailsFrom_father').click();
      cy.get('.btn-blue').click();
      cy.get('.formValidationTooltip').should('not.exist', 'यो क्षेत्र आवश्यक छ।')
      cy.get('.px-4 > .btn').click();
      })
    
  
  

    it('pratilipi add husband dont delete father ', () => {
      
      cy.get('.form-control').eq(0).type('mohan');
      cy.get('.form-control').eq(1).type('Test@123');
      cy.get('.btn').click();
      cy.get(':nth-child(9) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('1757');
      cy.get('.modal-footer > .flex-end > .btn-blue').click();
      cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'धिरज')
      cy.wait(2000);
      cy.get('.ic-more-vertical').eq(0).click();
      cy.wait(2000)
      cy.get(':nth-child(1) > :nth-child(12) > tb-action-btn > .dropdown > .dropdown-menu > .list > :nth-child(6) > .btn').should('exist').click();
      cy.get('h5.ng-star-inserted').should('exist').and('include.text','नागरिकताको प्रतिलिपि');
      cy.get('.btn-base-primary').should('exist').and('include.text','पछाडि जानुहोस्');
      cy.wait(3000);
      cy.get('.header-background > .d-flex.ng-star-inserted > .btn-sm').click();
      cy.get('#copyReason').select('हराएको');
      cy.get('#husband').click();
      cy.get(':nth-child(5) > .formcard__title > div.d-flex > .switch-wrapper > .switch').click();
      cy.get('.formValidationDiv > #firstNameNp').type('श्याम');
      cy.get('.formValidationDiv > #lastNameNp').type('महर्जन');
      cy.get('.form-group > #firstName').type('shyam');
      cy.get('.form-group > #lastName').type('maharjan');
      cy.get('#husbandAddressCountry').click();
      cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('nepal');
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      cy.get('#citizenshipNo').type('5885');
      cy.get('.col-4.ng-star-inserted > .form-group > #citizenshipType').select('वंशज');
      cy.get('#district_husband').click();
      cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
      cy.wait(2000);
      cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      cy.get('#localBody_husband').click();
      cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
      cy.wait(2000);
      cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      cy.get('#select2-wardNumber_husband-container').click();
      cy.get('.select2-search__field').type('5{enter}');

      cy.get('#copyDetailsFrom_husband').click();
      cy.pause();
      cy.get('.btn-blue').click();
      cy.get('.px-4 > .btn').click();
      });
    
    
  

    it('pratilipi add husband delete father ', () => {
      
      
      cy.get('.form-control').eq(0).type('mohan');
      cy.get('.form-control').eq(1).type('Test@123');
      cy.get('.btn').click();
      cy.get(':nth-child(9) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('२९-०१-८०-४०७४३०');
      cy.get('.modal-footer > .flex-end > .btn-blue').click();
      cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'धिरज')
      cy.wait(2000);
      cy.get('.ic-more-vertical').eq(0).click();
      cy.wait(2000)
      cy.get(':nth-child(1) > :nth-child(12) > tb-action-btn > .dropdown > .dropdown-menu > .list > :nth-child(6) > .btn').should('exist').click();
      cy.get('h5.ng-star-inserted').should('exist').and('include.text','नागरिकताको प्रतिलिपि');
      cy.get('.btn-base-primary').should('exist').and('include.text','पछाडि जानुहोस्');
      cy.wait(3000);
      cy.get('.header-background > .d-flex.ng-star-inserted > .btn-sm').click();
      cy.get('#copyReason').select('हराएको');
      cy.get('#husband').click()
      cy.get('#firstNameNp_0').clear()
      cy.get('#lastNameNp_0').clear()
      
      cy.get(':nth-child(5) > .formcard__title > div.d-flex > .switch-wrapper > .switch').click();
      cy.get('.formValidationDiv > #firstNameNp').type('श्याम');
      cy.get('.formValidationDiv > #lastNameNp').type('महर्जन');
      cy.get('.form-group > #firstName').type('shyam');
      cy.get('.form-group > #lastName').type('maharjan');
      cy.get('#husbandAddressCountry').click();
      cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('nepal');
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      cy.get('#citizenshipNo').type('5885');
      cy.get('.col-4.ng-star-inserted > .form-group > #citizenshipType').select('वंशज');
      cy.get('#district_husband').click();
      cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
      cy.wait(2000);
      cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      cy.get('#localBody_husband').click();
      cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
      cy.wait(2000);
      cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      cy.get('#select2-wardNumber_husband-container').click();
      cy.get('.select2-search__field').type('5{enter}');
      
      cy.get('#copyDetailsFrom_husband').click();
      cy.pause();
      cy.get('.btn-blue').click();
      cy.get('.px-4 > .btn').click();
      })
    
  
    it.skip('pratilipi remove husband add father details ', () => {
      
      
      cy.get('.form-control').eq(0).type('mohan');
      cy.get('.form-control').eq(1).type('Test@123');
      cy.get('.btn').click();
      cy.get(':nth-child(9) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('29-01-068-04654');
      cy.get('.modal-footer > .flex-end > .btn-blue').click();
      cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'धिरज')
      cy.wait(2000);
      cy.get('.ic-more-vertical').eq(0).click();
      cy.wait(2000)
      cy.get(':nth-child(1) > :nth-child(12) > tb-action-btn > .dropdown > .dropdown-menu > .list > :nth-child(6) > .btn').should('exist').click();
      cy.get('h5.ng-star-inserted').should('exist').and('include.text','नागरिकताको प्रतिलिपि');
      cy.get('.btn-base-primary').should('exist').and('include.text','पछाडि जानुहोस्');
      cy.wait(3000);
      cy.get('.header-background > .d-flex.ng-star-inserted > .btn-sm').click();
      cy.get('#copyReason').select('हराएको');
      cy.get('#firstNameNp_0').type('विजय');
      cy.get('#lastNameNp_0').type('श्रेष्ठ')
      cy.get('#firstName_0').type('bijay');
      cy.get('#lastName_0').type('shrestha')
      cy.wait(2000);
      cy.get('#citizenshipNo_0').type('95623');
      cy.get('#localBody_family0').click();
      cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
      cy.wait(2000);
      cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
      cy.get('.select2-search__field').type('5{enter}');
      cy.get(':nth-child(5) > .formcard__title > div.d-flex > .switch-wrapper > .switch').click();
      cy.get('#copyDetailsFrom_father').click();
      cy.pause();
      cy.get('.btn-blue').click();
      cy.get('.px-4 > .btn').click();
      });
    
      it.only('underapproved case',()=>{      
        cy.get('.form-control').eq(0).type('mohan');
        cy.get('.form-control').eq(1).type('Test@123');
        cy.get('.btn').click();
        cy.get(':nth-child(9) > .mastermenu-link').click();
        cy.get('.col-1 > .btn').click();
        cy.get('#citizenshipNo').type('29-01-80-407411');
        cy.get('.modal-footer > .flex-end > .btn-blue').click();
        cy.wait(2000);
        cy.get('.ic-more-vertical').eq(0).click();
        cy.wait(2000)
        cy.get(':nth-child(1) > :nth-child(12) > tb-action-btn > .dropdown > .dropdown-menu > .list > :nth-child(6) > .btn').should('exist').click();
        cy.get('h5.ng-star-inserted').should('exist').and('include.text','नागरिकताको प्रतिलिपि');
        cy.get('.btn-base-primary').should('exist').and('include.text','पछाडि जानुहोस्');
        cy.wait(3000);
        cy.get('.header-background > .d-flex.ng-star-inserted > .btn-sm').click();
        cy.wait(1000);
        cy.get('.ng-trigger', { timeout: 5000 }).should('be.visible').and('includes.text','नागरिकता प्रतिलिपि आवेदन पहिले नै अनुमोदन अन्तर्गत छ। सो आवेदनलाई सम्पादन गर्नुहोस् वा अर्को आवेदन सिर्जना गर्नु अघि सो आवेदनलाई अनुमोदन गर्नुहोस्।');
        cy.wait(2000);
    })
  

  it.skip('skipthese',() =>{
    cy.get('#localBody_address1').click();
    cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('changunarayan');
    cy.wait(2000);
    cy.get('tr.ng-star-inserted > :nth-child(3)').click();
    cy.get('#select2-wardNumber_address1-container').click();
    cy.get('.select2-search__field').type('5{enter}');
    cy.get('#citizenshipNo_0').type('XXX');
    cy.get('#citizenshipType_0').select('वंशज');
    // cy.get('.nav > :nth-child(2)').click();
    // cy.get('#citizenshipNo_1').type('XXX');
    // cy.get('#citizenshipType_1').select('वंशज');
    // cy.get('#hasHusbandDetail').click();
    cy.get('#recommendFirstNameNp').type('हरि');
    cy.get('#recommendLastNameNp').type('मगर');
    cy.get('#designationId').click();
    cy.get('tbody > :nth-child(1) > :nth-child(2)').click();
    cy.get('#copyDetailsFrom_self').click();
    // cy.get('#issuedByNameNp').type('ramkrishna thapa');
    // cy.get('#issuerDesignationNameNp').type('प्र.अ');
  })

});