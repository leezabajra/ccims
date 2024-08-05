describe('data correction Test', () => {
    function operatorlogin() {
      cy.visit('https://ccimsinternal.infodev.com.np/');
      cy.get('.form-control').eq(0).type('sharmila');
      cy.get('.form-control').eq(1).type('User@123');
      cy.get('.btn').click();
      cy.url().should('eq', 'https://ccimsinternal.infodev.com.np/#/featured/dashboard')
      cy.wait(2000);
    }

    it.only('Using Valid datas', () => {
      operatorlogin()
      cy.get(':nth-child(3) > .mastermenu-link').click();
      cy.get(':nth-child(2) > :nth-child(11) > tb-action-btn > .dropdown > a > .ic-more-vertical').click();
      cy.get(':nth-child(2) > :nth-child(11) > tb-action-btn > .dropdown > .dropdown-menu > .list > :nth-child(7) > .btn').click();
      cy.get('.d-flex.ng-star-inserted > .btn-sm').click();

      // cy.get(':nth-child(7) > .mastermenu-link').click();
      // cy.get('.col-1 > .btn').click();
      // cy.get('#citizenshipNo').type('२८-०१-८०-००२३३');
      // cy.get('#issueDistrictId').click();
      // cy.wait(3000)
      // cy.get('input.header-filter[placeholder="खोज्नुहोस्"]').eq(6).click().type('lalitpur', { force: true })
      // cy.get('.ng-star-inserted').contains(" Lalitpur ").click()
      // cy.get('.modal-footer > .flex-end > .btn-blue').click();
      // cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'हेमन्त')

      cy.get('#editReason').select(' हराएकाे ');
      // पतिको नाम थप/घट , अन्य , संसोधित , झुत्रो/पुरानो , बसाईं सराइ //
      //   cy.get('#firstNameNp').type('');
      cy.get('#middleNameNp').type('कुमार');
      cy.get('#middleName').type('kumar');
      //   cy.get('#lastNameNp').type('');
      // cy.get('#genderId').type('');

      cy.get('#copyNumber').clear().type('1')
      // cy.get('#husband').click()
      cy.get('.mt-2 > .form-group > .switch-wrapper > .switch > .slider').click()
      cy.get('#unidentifiedDOBAge').type('18')
      cy.get('#unidentifiedDOBAgeNp').type('१८')
      // cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20261215{enter}');
      
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

      cy.get('.btn-blue').click()
      cy.get('.flex-end > .btn').click();

      

    })
})