describe('Pratilipi Test', () => {
    beforeEach(() => {
      cy.visit('https://ccimsinternal.infodev.com.np/');
    });
      
    it('validation 0 - 20 count', () => {
      cy.get('.form-control').eq(0).type('sharmila');
      cy.get('.form-control').eq(1).type('User@123');
      cy.get('.btn').click();

      cy.wait(2000)
      cy.get(':nth-child(7) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('२८-०१-८१-०००८८	');
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
      cy.get(':nth-child(1) > .btn-name').click()

      cy.get('#copyReason').select('हराएको');
      cy.get('#copyNumber').clear().type('0');
      cy.get('#copyDetailsFrom_self').click();
      
      cy.get('#recommendFirstNameNp').type('shyam');
      cy.get('#recommendLastNameNp').type('sharma');
      cy.get('#designationId').click();
      cy.get('tbody > :nth-child(1) > :nth-child(3)').click();

      cy.get('.btn-blue').click();
     

      const expectedMessage = ' कृपया प्रतिलिपि नम्बर ० भन्दा बदी वा २० भन्दा कम को दायरामा राख्नुहोला | ';
    // Target the div by its class and role, then check its text content
    cy.get('div[role="alertdialog"]', { timeout: 2000 }) 
    .should('have.class', 'toast-message')
    .and('have.text', expectedMessage);
    cy.pause()
        
    });

    it('validation Pratilipi count error', () => {
        cy.get('.form-control').eq(0).type('sharmila');
        cy.get('.form-control').eq(1).type('User@123');
        cy.get('.btn').click();
  
        cy.wait(2000)
        cy.get(':nth-child(7) > .mastermenu-link').click();
        cy.get('.col-1 > .btn').click();
        cy.get('#citizenshipNo').type('२८-०१-८०-००१७३	');
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
        cy.get(':nth-child(1) > .btn-name').click()
  
        cy.get('#copyReason').select('हराएको');
        cy.get('#copyNumber').clear().type('1');
        cy.get('#copyDetailsFrom_self').click();
        
        cy.get('#recommendFirstNameNp').type('shyam');
        cy.get('#recommendLastNameNp').type('sharma');
        cy.get('#designationId').click();
        cy.get('tbody > :nth-child(1) > :nth-child(3)').click();
  
        cy.get('.btn-blue').click();
       
        const expectedMessage = 'अवैध प्रतिलिपि नम्बर वा प्रविष्ट गरिएको प्रतिलिपि नम्बर पहिले नै जारी गरिएको छ';
        cy.contains('div[role="alertdialog"]', expectedMessage, { timeout: 10000 })
        .should('be.visible');
      
          
    });

    it('validation 7 days validation', () => {
        cy.get('.form-control').eq(0).type('sharmila');
        cy.get('.form-control').eq(1).type('User@123');
        cy.get('.btn').click();
  
        cy.wait(2000)
        cy.get(':nth-child(7) > .mastermenu-link').click();
        cy.get('.col-1 > .btn').click();
        cy.get('#citizenshipNo').type('२८-०१-८०-००२१४');
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
        cy.get(':nth-child(1) > .btn-name').click()
              
        const expectedMessage = 'पछिल्लो आवेदन अनुमोदन भएको मिति देखि 7 दिन सम्म डाटा सुधार गर्न सकिन्छ। 7 दिन नाघे पछि मात्र नयाँ प्रतिलिपि आवेदन दिन सकिन्छ।';
      // Target the div by its class and role, then check its text content
        cy.get('div[role="alertdialog"]', { timeout: 2000 }) 
        .should('have.class', 'toast-message')
        .and('have.text', expectedMessage);
      
    });

    it('validation for entry in old pratilipi after new pratilipi when count is serially', () => {
      cy.get('.form-control').eq(0).type('sharmila');
      cy.get('.form-control').eq(1).type('User@123');
      cy.get('.btn').click();

      cy.wait(2000)
      cy.get(':nth-child(7) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('२८-०१-८०-००१७३	');
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
      cy.get(':nth-child(1) > .btn-name').click()

      cy.get('#copyReason').select('हराएको');
      cy.get('#copyNumber').clear().type('1');
      cy.get('#copyDetailsFrom_self').click();
      
      cy.get('#recommendFirstNameNp').type('shyam');
      cy.get('#recommendLastNameNp').type('sharma');
      cy.get('#designationId').click();
      cy.get('tbody > :nth-child(1) > :nth-child(3)').click();

      cy.get('.btn-blue').click();
     
      const expectedMessage = 'अवैध प्रतिलिपि नम्बर वा प्रविष्ट गरिएको प्रतिलिपि नम्बर पहिले नै जारी गरिएको छ';
      cy.contains('div[role="alertdialog"]', expectedMessage, { timeout: 10000 })
      .should('be.visible');
    
        
    });

    it('validation for entry in old pratilipi after new pratilipi when count 1', () => {
      cy.get('.form-control').eq(0).type('sharmila');
      cy.get('.form-control').eq(1).type('User@123');
      cy.get('.btn').click();

      cy.wait(2000)
      cy.get(':nth-child(7) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      // cy.get('#citizenshipNo').type('1061/165	');
      cy.wait(5000)
      // cy.get('.date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20181025{enter}');
      cy.get('#fullNameNp').type('फिरोज आलम गदी	')
      cy.get('#issueDistrictId').click();
      cy.wait(3000)
      cy.get('input.header-filter[placeholder="खोज्नुहोस्"]').eq(6).click().type('parsa',{force:true})
      cy.get('.ng-star-inserted').contains(" Parsa ").click()

      cy.get('.modal-footer > .flex-end > .btn-blue').click();
      // cy.get(':nth-child(4) > :nth-child(3)').should('include.text', '3068/177')
      // cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'शारदा देवी')
      
      cy.wait(2000);
      cy.get('.ic-more-vertical').eq(0).click();
      // cy.wait(2000)
      // cy.get(':nth-child(2) > :nth-child(12) > tb-action-btn > .dropdown > a > .ic-more-vertical').click({ force: true });
      cy.wait(2000)
      cy.get('button.btn.btn-icon.btn-sm')
  .contains('प्रतिलिपि')
  .click({force: true})
      cy.get('h5.ng-star-inserted').should('exist').and('include.text','नागरिकताको प्रतिलिपि');
      cy.get('.btn-base-primary').should('exist').and('include.text','पछाडि जानुहोस्');
      cy.wait(3000);
      cy.get('.btn-blue').should('exist').and('include.text','थप्नुहोस्').click();
      cy.get(':nth-child(2) > .btn-name').click()

      cy.get('#copyReason').select('हराएको');
      cy.get('#copyNumber').clear().type('7');
      cy.get('#copyDetailsFrom_self').click();
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
      
      cy.get('#officeBtn').click()
      cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click()
      cy.get('#recommendFirstNameNp').type('shyam');
      cy.get('#recommendLastNameNp').type('sharma');
      cy.get('#designationId').click();
      cy.get('tbody > :nth-child(1) > :nth-child(3)').click();

      cy.get('.btn-blue').click();
     
      const expectedMessage = 'अवैध प्रतिलिपि नम्बर वा प्रविष्ट गरिएको प्रतिलिपि नम्बर पहिले नै जारी गरिएको छ';
      cy.contains('div[role="alertdialog"]', expectedMessage, { timeout: 10000 })
      .should('be.visible');
    
        
    });

    it('validation for entry count 0 in data correction', () => {
      cy.get('.form-control').eq(0).type('sharmila');
      cy.get('.form-control').eq(1).type('User@123');
      cy.get('.btn').click();

      cy.wait(2000)
      cy.get(':nth-child(7) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('८११६०८९६	');
      cy.get('#issueDistrictId').click();
      cy.wait(3000)
      cy.get('input.header-filter[placeholder="खोज्नुहोस्"]').eq(6).click().type('parsa',{force:true})
      cy.get('.ng-star-inserted').contains(" Parsa ").click()

      cy.get('.modal-footer > .flex-end > .btn-blue').click();
      // cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'हेमन्त')
      
      cy.wait(2000);
      cy.get('.ic-more-vertical').eq(0).click();
      cy.wait(2000)
      cy.get('button.btn-icon').contains('डाटा सुधार').click();
      cy.wait(3000);
      cy.get('.btn-blue').should('exist').and('include.text','थप्नुहोस्').click();

      cy.wait(2000)
      cy.get('select#editReason').select('LOST');
      cy.get('#copyNumber').clear().type('0');
            
      cy.get('.btn-blue').click();
     
      const expectedMessage = 'अवैध प्रतिलिपि नम्बर';
      cy.contains('div[role="alertdialog"]', expectedMessage, { timeout: 10000 })
      .should('be.visible');
    
        
    });

    it('validation for entry increase and decrease after 7 days', () => {
      cy.get('.form-control').eq(0).type('sharmila');
      cy.get('.form-control').eq(1).type('User@123');
      cy.get('.btn').click();

      cy.wait(2000)
      cy.get(':nth-child(7) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('८११६०८९६	');
      cy.get('#issueDistrictId').click();
      cy.wait(3000)
      cy.get('input.header-filter[placeholder="खोज्नुहोस्"]').eq(6).click().type('parsa',{force:true})
      cy.get('.ng-star-inserted').contains(" Parsa ").click()

      cy.get('.modal-footer > .flex-end > .btn-blue').click();
      // cy.get('tbody > :nth-child(1) > :nth-child(2)').should('include.text', 'हेमन्त')
      
      cy.wait(2000);
      cy.get('.ic-more-vertical').eq(0).click();
      cy.wait(2000)
      cy.get('button.btn-icon').contains('डाटा सुधार').click();
      cy.wait(3000);
      cy.get('.btn-blue').should('exist').and('include.text','थप्नुहोस्').click();

      cy.wait(2000)
      cy.get('select#editReason').select('LOST');
      cy.get('#copyNumber').clear().type('6');
            
      cy.get('.btn-blue').click();
     
      const expectedMessage = 'प्रतिलिपि नम्बर प्रतिलिपि अनुमोदन भएको 7 दिन भित्र मात्र सम्पादन गर्न सकिन्छ।प्रतिलिपि नम्बर परिवर्तन गर्न कृपया नयाँ प्रतिलिपि आवेदन दिनुहोस्।';
      cy.contains('div[role="alertdialog"]', expectedMessage, { timeout: 10000 })
      .should('be.visible');
    
        
    });

    

    



});