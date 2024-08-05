describe('Pratilipi Test', () => {
    beforeEach(() => {
      cy.visit('https://ccimsinternal.infodev.com.np/');
    });
      
    it('pratilipi for nochange', () => {
      cy.get('.form-control').eq(0).type('sharmila');
      cy.get('.form-control').eq(1).type('User@123');
      cy.get('.btn').click();
      cy.wait(2000)
      cy.get(':nth-child(7) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('457');
      cy.get('#issueDistrictId').click();
      cy.wait(3000)
      cy.get('input.header-filter[placeholder="खोज्नुहोस्"]').eq(6).click().type('lalitpur',{force:true})
      cy.get('.ng-star-inserted').contains(" Lalitpur ").click()

      cy.get('.modal-footer > .flex-end > .btn-blue').click();
      // cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'हेमन्त')
      
      cy.wait(2000);
      cy.get('.ic-more-vertical').eq(0).click();
      cy.wait(2000)
      cy.get(':nth-child(1) > :nth-child(12) > tb-action-btn > .dropdown > .dropdown-menu > .list > :nth-child(6) > .btn').should('exist').click();
      cy.get('h5.ng-star-inserted').should('exist').and('include.text','नागरिकताको प्रतिलिपि');
      cy.get('.btn-base-primary').should('exist').and('include.text','पछाडि जानुहोस्');
      cy.wait(3000);
      cy.get('.btn-blue').should('exist').and('include.text','थप्नुहोस्').click();
      cy.get(':nth-child(2) > .btn-name').click()
      
      cy.get('#copyReason').select('हराएको');
      cy.get('#copyDetailsFrom_self').click();
      
      cy.get('.formValidationTooltip').should('not.exist', 'यो क्षेत्र आवश्यक छ।')
      cy.get('#pratilipiIssuedDistrictBtn').click();
      cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(4)').click();

      cy.get('#pratilipiIssuedDistrictBtn').click()
      cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur')
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(4)').click()
      cy.get('#pratilipiIssuedOfficeBtn').click()
      cy.get('tbody > :nth-child(1) > :nth-child(3)').click();
      cy.get('input[appdatepicker]')
      .eq(4)
      .type('20810406{enter}') // Type a valid date (YYYY-MM-DD)
      .should('have.value', '2081-04-06');
      cy.get('#pratilipiIssuedByNameNp').type('श्याम थापा');
      cy.get('#pratilipiIssuerDesignationNameNp').type('प्र.अ')
      
      cy.get('.px-4 > .btn').click();
      });

    it('pratilipi count change', () => {
        cy.get('.form-control').eq(0).type('sharmila');
        cy.get('.form-control').eq(1).type('User@123');
        cy.get('.btn').click();
        cy.wait(2000)
        cy.get(':nth-child(7) > .mastermenu-link').click();
        cy.get('.col-1 > .btn').click();
        cy.get('#citizenshipNo').type('२८-०१-८१-००१२६');
        cy.get('#issueDistrictId').click();
        cy.wait(3000)
        cy.get('input.header-filter[placeholder="खोज्नुहोस्"]').eq(6).click().type('lalitpur',{force:true})
        cy.get('.ng-star-inserted').contains(" Lalitpur ").click()
  
        cy.get('.modal-footer > .flex-end > .btn-blue').click();
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'हेमन्त')
        
        cy.wait(2000);
        cy.get('.ic-more-vertical').eq(0).click();
        cy.wait(2000)
        cy.get(':nth-child(1) > :nth-child(12) > tb-action-btn > .dropdown > .dropdown-menu > .list > :nth-child(6) > .btn').should('exist').click();
        cy.get('h5.ng-star-inserted').should('exist').and('include.text','नागरिकताको प्रतिलिपि');
        cy.get('.btn-base-primary').should('exist').and('include.text','पछाडि जानुहोस्');
        cy.wait(3000);
        cy.get('.btn-blue').should('exist').and('include.text','थप्नुहोस्').click();
        cy.get(':nth-child(2) > .btn-name').click()
        
        cy.get('#copyReason').select('हराएको');
        cy.get('#copyNumber').type('2')
        cy.get('#copyDetailsFrom_self').click();
        
        cy.get('.formValidationTooltip').should('not.exist', 'यो क्षेत्र आवश्यक छ।')
        cy.get('#pratilipiIssuedDistrictBtn').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        
        cy.get('#pratilipiIssuedDistrictBtn').click()
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur')
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click()
        cy.get('#pratilipiIssuedOfficeBtn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(3)').click();
        cy.get('input[appdatepicker]')
        .eq(4)
        .type('20810406{enter}') // Type a valid date (YYYY-MM-DD)
        .should('have.value', '2081-04-06');
        cy.get('#pratilipiIssuedByNameNp').type('श्याम थापा');
        cy.get('#pratilipiIssuerDesignationNameNp').type('प्र.अ')
        
        cy.get('.px-4 > .btn').click();
      });

    it.only('pratilipi all details change', () => {
      cy.get('.form-control').eq(0).type('sharmila');
      cy.get('.form-control').eq(1).type('User@123');
      cy.get('.btn').click();
      cy.wait(2000)
      cy.get(':nth-child(7) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('२८-०१-८०-००२३३');
      cy.get('#issueDistrictId').click();
      cy.wait(3000)
      cy.get('input.header-filter[placeholder="खोज्नुहोस्"]').eq(6).click().type('lalitpur', { force: true })
      cy.get('.ng-star-inserted').contains(" Lalitpur ").click()

      cy.get('.modal-footer > .flex-end > .btn-blue').click();
      cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'हेमन्त')

      cy.wait(2000);
      cy.get('.ic-more-vertical').eq(0).click();
      cy.wait(2000)
      cy.get(':nth-child(1) > :nth-child(12) > tb-action-btn > .dropdown > .dropdown-menu > .list > :nth-child(6) > .btn').should('exist').click();
      cy.get('h5.ng-star-inserted').should('exist').and('include.text', 'नागरिकताको प्रतिलिपि');
      cy.get('.btn-base-primary').should('exist').and('include.text', 'पछाडि जानुहोस्');
      cy.wait(3000);
      cy.get('.btn-blue').should('exist').and('include.text', 'थप्नुहोस्').click();
      cy.get(':nth-child(2) > .btn-name').click()

      cy.get('#copyReason').select('हराएको');
      cy.get('#firstNameNp').clear().type('मोहन');
      // cy.get('#middleNameNp').type('');
      cy.get('#lastNameNp').clear().type('लामा');
      cy.get('#firstName').clear().type('Mohan')
      // cy.get('#middleName').type('')
      cy.get('#lastName').clear().type('Lama')
      cy.get('#genderId').type('M')
      cy.get('#copyNumber').clear().type('1')
      // cy.get('#husband').click()
      cy.get('.mt-2 > .form-group > .switch-wrapper > .switch > .slider').click()
      cy.get('#unidentifiedDOBAge').type('18')
      cy.get('#unidentifiedDOBAgeNp').type('१८')
      // cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20261215{enter}');
      cy.get('#pratilipiIssuedDistrictBtn').click()
      cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur')
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(4)').click()

      cy.get('#pratilipiIssuedOfficeBtn').click()
      cy.get('tbody > :nth-child(1) > :nth-child(3)').click();
      cy.get('input[appdatepicker]')
        .eq(4)
        .type('20810406{enter}') // Type a valid date (YYYY-MM-DD)
        .should('have.value', '2081-04-06');
      cy.get('#pratilipiIssuedByNameNp').type('श्याम थापा');
      cy.get('#pratilipiIssuerDesignationNameNp').type('प्र.अ')

      cy.get('#formerAddress_address0').click()
      cy.get('#district_address0').click()
      cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      cy.get('#vdc_address0').click();
      cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      cy.get('#select2-wardNumber_address0-container').click()
      cy.get('.select2-search__field').type('1{enter}')

      // cy.get('#districtBtn_address0').click()
      // cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      // cy.wait(2000)
      // cy.get('tr.ng-star-inserted > :nth-child(4)').click()
      // cy.get('#localBody_address0').click()
      // cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('lalipur');
      // cy.wait(2000)
      // cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      // cy.get('#select2-wardNumber_address0-container').click()
      // cy.get('.select2-search__field').type('1{enter}')

      cy.get('#firstNameNp_0').clear().type('राम');
      // cy.get('#middleNameNp_0').type('');
      cy.get('#lastNameNp_0').clear().type('लामा');
      cy.get('#firstName_0').clear().type('ram');
      // cy.get('#middleName_0').type('');
      cy.get('#lastName_0').clear().type('lama');
      cy.get('#citizenshipNo_0').click();
      cy.get('#citizenshipType_0').select('वंशज').should('have.value', 'HEREDITARY')

      cy.get('#formerAddress_family0').click();
      cy.get('#district_family0').click();
      cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      cy.get('#vdc_family0').click();
      cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(3)').click()
      cy.get('#select2-wardNumber_family0-container').type('1{enter}')

      // cy.get('#district_family0').click();
      // cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      // cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      // cy.get('#localBody_family0').click();
      // cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').click();
      // cy.get('tr.ng-star-inserted > :nth-child(3)').click()
      // cy.get('#select2-wardNumber_family0-container').click()

      // cy.get('.nav > :nth-child(2)').click();
      // cy.get('#firstNameNp_1').clear().type('सरिता');
      // cy.get('#middleNameNp_1').clear().type('कुमारी');
      // cy.get('#lastNameNp_1').clear().type('लामा');
      // cy.get('#firstName_1').clear().type('sarita');
      // cy.get('#middleName_1').clear().type('kumari');
      // cy.get('#lastName_1').clear().type('lama');
      // cy.get('#citizenshipNo_1').click();
      // cy.get('#citizenshipType_1').select(' वंशज ').should('have.value','HEREDITARY')

      // cy.get('#formerAddress_family1').click();
      // cy.get('#district_family1').click();
      // cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      // cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      // cy.get('#vdc_family1').click();
      // cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').click();
      // cy.get('tr.ng-star-inserted > :nth-child(3)').click()
      // cy.get('#select2-wardNumber_family1-container').click()

      // cy.get('#district_family1').click();
      // cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      // cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      // cy.get('#localBody_family1').click();
      // cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').click();
      // cy.get('tr.ng-star-inserted > :nth-child(3)').click()
      // cy.get('#select2-wardNumber_family1-container').click()

      // cy.get('#husband').click();
      // cy.get(':nth-child(5) > .formcard__title > div.d-flex > .switch-wrapper > .switch').click();
      // cy.get('.formValidationDiv > #firstNameNp').type('श्याम');
      // cy.get('.formValidationDiv > #lastNameNp').type('महर्जन');
      // cy.get('.form-group > #firstName').type('shyam');
      // cy.get('.form-group > #lastName').type('maharjan');
      // cy.get('#husbandAddressCountry').click();
      // cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('nepal');
      // cy.wait(2000)
      // cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      // cy.get('#citizenshipNo').type('5885');
      // cy.get('.col-4.ng-star-inserted > .form-group > #citizenshipType').select('वंशज');
      // cy.get('#district_husband').click();
      // cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
      // cy.wait(2000);
      // cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      // cy.get('#localBody_husband').click();
      // cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('bhaktapur');
      // cy.wait(2000);
      // cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      // cy.get('#select2-wardNumber_husband-container').click();
      // cy.get('.select2-search__field').type('5{enter}');

      cy.get('#isEmployeeFamily').click();
      cy.get('#employeeFirstNameNp').type('राम');
      cy.get('#employeeMiddleNameNp').type('कुमार');
      cy.get('#employeeLastNameNp').type('लामा');
      cy.get('#employeeFirstName').type('ram')
      cy.get('#employeeMiddleName').type('kumar')
      cy.get('#employeeLastName').type('lama')
      cy.get('#sanketNo').type('6564');
      cy.get('#empOffice').type('office');
      cy.get('#positionId').select('राजपत्रांकित द्धितिय श्रेणी');
      cy.get('#district_employeefamily').click();
      cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(4)').click();
      cy.get('#localBody_employeefamily').click();
      cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur');
      cy.wait(2000)
      cy.get('tr.ng-star-inserted > :nth-child(3)').click();
      cy.wait(2000)
      cy.get('#select2-wardNumber_employeefamily-container').click();
      cy.get('.select2-search__field').type('5{enter}');
      cy.get(':nth-child(5) > .col-4 > .form-group > .formValidationDiv > .input-group > #officeName').click();
      cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('police');
      cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
      cy.get(':nth-child(5) > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20701111{enter}');

      cy.get('#copyDetailsFrom_self').click();
      cy.get('.btn-blue').click()
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
                 
        cy.get('#pratilipiIssuedDistrictBtn').click()
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur')
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click()
        cy.get('#pratilipiIssuedOfficeBtn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(3)').click();
        cy.get('input[appdatepicker]')
          .eq(4)
          .type('20810406{enter}') // Type a valid date (YYYY-MM-DD)
          .should('have.value', '2081-04-06');
        cy.get('#pratilipiIssuedByNameNp').type('श्याम थापा');
        cy.get('#pratilipiIssuerDesignationNameNp').type('प्र.अ')

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

        cy.get('.btn-blue').click();
        cy.get('.px-4 > .btn').click();
      });    
          
    it('pratilipi remove husband add father details ', () => {
              
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
        cy.get('h5.ng-star-inserted').should('exist').and('include.text', 'नागरिकताको प्रतिलिपि');
        cy.get('.btn-base-primary').should('exist').and('include.text', 'पछाडि जानुहोस्');
        cy.wait(3000);
        cy.get('.header-background > .d-flex.ng-star-inserted > .btn-sm').click();

        cy.get('#copyReason').select('हराएको');
        cy.get('#pratilipiIssuedDistrictBtn').click()
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type('lalitpur')
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click()
        cy.get('#pratilipiIssuedOfficeBtn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(3)').click();
        cy.get('input[appdatepicker]')
          .eq(4)
          .type('20810406{enter}') // Type a valid date (YYYY-MM-DD)
          .should('have.value', '2081-04-06');
        cy.get('#pratilipiIssuedByNameNp').type('श्याम थापा');
        cy.get('#pratilipiIssuerDesignationNameNp').type('प्र.अ')
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
            
    it('underapproved case',()=>{      
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
      });

    it.only('Approval of Hereditary', () => {
      cy.visit('/')

      cy.get('input[type="username"]').type('leeza');
      cy.get('input[type="password"]').type('Test@123');
      cy.get('.btn').click();
      cy.get('.active').click()
      cy.get('.ic-approval').click()
      cy.get('[title="पुरानो नागरिकता प्रतिलिपि"]').click()
      cy.get('.ic-eye-true').eq(0).click()
      cy.get('.btn-blue').eq(1).click()
      cy.get('#confirmBtn').click();

      cy.get(':nth-child(2) > .mastermenu-link').click();
      cy.get('tr.ng-star-inserted > :nth-child(11)').click();
      cy.get('.list > :nth-child(2) > .btn').click()
      });
          
        
          
});