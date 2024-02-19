describe('Login Test', () => {
    beforeEach(() => {
      cy.visit('https://ccimsinternal.infodev.com.np/');
    });
      
    it('login', () => {
      
      cy.get('.form-control').eq(0).type('mohan');
      cy.get('.form-control').eq(1).type('Test@123');
      cy.get('.btn').click();
  
      cy.get(':nth-child(9) > .mastermenu-link').click();
      cy.get('.col-1 > .btn').click();
      cy.get('#citizenshipNo').type('५९१०');
      cy.get('#fullNameNp').type('शिव')
      cy.get('.modal-footer > .flex-end > .btn-blue').click();
      cy.wait(2000);
      cy.get('tr.ng-star-inserted > :nth-child(12)').click();
      cy.wait(2000)
      cy.get(':nth-child(6) > .btn').click();
      cy.wait(3000);
      cy.get('.btn-sm').click();
  
      cy.get('#copyReason').select('हराएको');
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
      cy.get('.btn-blue').click();
      cy.get('.px-4 > .btn').click();
  
    })
  })