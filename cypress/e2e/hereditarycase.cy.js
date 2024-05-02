
describe('hereditary', () => {

  function approvallogin() {
    cy.visit('https://ccimsinternal.infodev.com.np/')
    cy.get('input[type="username"]').type('leeza');
    cy.get('input[type="password"]').type('Test@123');
    cy.get('.btn').click()
    // cy.contains('बबरमहल').click()
    cy.get('.active').click()
    cy.get('.ic-approval').click()
    cy.url().should('eq', 'https://ccimsinternal.infodev.com.np/#/featured/approvals');
    cy.get('h5').should('exist').should('contain', 'अनुमोदन')
}

function operatorlogin() {
  cy.visit('https://ccimsinternal.infodev.com.np/');
  cy.get('.form-control').eq(0).type('nikhil1');
  cy.get('.form-control').eq(1).type('Test@123');
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
       
        cy.get('#birthRegistrationNo').type(user.birthRegistrationNo);
        cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.DOB + '{enter}');
        // cy.get('#district_address0').click();
        // cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district0);
        // cy.wait(2000)
        // cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        // cy.get('#localBody_address0').click();
        // cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.localbody0);
        // cy.wait(2000);
        // cy.get('tr.ng-star-inserted > :nth-child(3)').click();
   
        cy.get('#localBody_address0').click();
        cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
        cy.wait(2000);
        cy.get(':nth-child(5) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type('5{enter}');
   
        cy.get('#sameAsPermanentAddress_address1').click();
   
        cy.get('#firstNameNp_0').type(user.firstNameNp_0);
        cy.get('#firstName_0').type(user.firstName_0);
        cy.wait(2000);
        cy.get('#citizenshipNo_0').type(user.citizenshipNo_0);
        cy.get('#district_family0').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district1);
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#localBody_family0').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.localbody1);
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(3)').click();
        cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(user.wardno1+'{enter}');
   
   
        cy.get('.nav > :nth-child(2)').click();
        cy.get('#firstNameNp_1').type(user.firstNameNp_1);
        cy.get('#firstName_1').type(user.firstName_1);
        cy.get('#citizenshipNo_1').type(user.citizenshipNo_1);
        cy.get('#district_family1').click()
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district2)
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#localBody_family1').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.localbody2);
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(3)').click()
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
   
   
        // cy.get('.px-4 > .btn').click();
        cy.wait(2000)
        cy.get('.mb-3').should('exist').and('contain', ' प्रिन्ट')
        cy.get('.px-4 > .btn').click()
        cy.get('.toast-message').should('include.text', 'डाटा सफलतापूर्वक ल्याइयो')
        cy.get('h5.ng-star-inserted').should('include.text', 'दैनिक समग्र सूची')
   
        })
    })
      });

      it('Using invalid datas- minor case', () => {
        cy.fixture('hereditary')
        .its('data2').then(user =>{
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
   
        cy.get('#birthRegistrationNo').type(user.birthRegistrationNo);
        cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.DOB + '{enter}');
   
        cy.get('#localBody_address0').click();
        cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
        cy.wait(2000);
        cy.get(':nth-child(5) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type('5{enter}');
   
        cy.get('#sameAsPermanentAddress_address1').click();
   
        cy.get('#firstNameNp_0').type(user.firstNameNp_0);
        cy.get('#firstName_0').type(user.firstName_0);
        cy.wait(2000);
        cy.get('#citizenshipNo_0').type(user.citizenshipNo_0);
        cy.get('#localBody_family0').click();
        cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
        cy.wait(2000);
        cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type('5{enter}');
   
   
        cy.get('.nav > :nth-child(2)').click();
        cy.get('#firstNameNp_1').type(user.firstNameNp_1);
        cy.get('#firstName_1').type(user.firstName_1);
        cy.get('#citizenshipNo_1').type(user.citizenshipNo_1);
        cy.get('#localBody_family1').click();
        cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
        cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type('5{enter}');
   
        cy.get('#recommendFirstNameNp').type(user.recommendFirstNameNp);
        cy.get('#recommendLastNameNp').type(user.recommendLastNameNp);
        cy.get('.mb-2.mt-1 > .col-4 > .form-group > .formValidationDiv > .input-group > #officeName').click();
        cy.get('tbody > :nth-child(1) > :nth-child(2)').click();
   
        cy.get('#copyDetailsFrom_father').click();
        cy.get('.btn-blue').should('exist').and('contain', 'आवेदन हेर्नुहोस्')
        cy.get('.ng-star-inserted').should('exist').and('contain', 'रिसेट गर्नुहोस्')
        cy.get('.btn-blue').click()
        cy.get('.toast-message').should('include.text', 'तपाई यस आवेदनको लागि १६ वर्ष पुगेको हुनुपर्छ ।')
            })
        })
   
   
      });
      it('Using No data', () => {
        operatorlogin()
        cy.get(':nth-child(5) > .mastermenu-link').click();
        cy.get('#collapseExample_4 > :nth-child(1) > .submenu-link').click();
        cy.url().should('eq', 'https://ccimsinternal.infodev.com.np/#/featured/citizenship/hereditary')
        cy.get('.ng-star-inserted').should('contain', ' वंशज नातामा नागरिकता आवेदन')
        cy.get('.btn-blue').click()
        cy.get('p.formValidationTooltip')
          .first()
          .should('be.visible')
          .should('have.text', 'यो क्षेत्र आवश्यक छ।');
       
      });

      it('Approval of Hereditary', () => {
        approvallogin()
        cy.get('[title="वंशज"]').click()
        cy.get('.ic-eye-true').eq(0).click()
        cy.get('.btn-blue').eq(1).click()
        cy.get('.btn-outline-red').should('exist').and('contain', ' अस्वीकार गर्नुहोस् ')
        cy.get('.btn-blue').should('exist').and('contain', 'अनुमोदन गर्नुहोस')
        cy.get('.body-title').should('exist').and('contain', 'के तपाईं सुरक्षित गर्न चाहनुहुन्छ?')
        cy.get('#cancelBtn').should('exist').and('contain', ' रद्द गर्नुहोस् ')
        cy.get('#confirmBtn').should('exist').and('contain', ' सुरक्षित गर्नुहोस् ')
        cy.get('#confirmBtn').click()
    
        cy.get('.toast-message').should('include.text', ' आवेदन सफलतापूर्वक स्वीकृत गरिएको छ ')
        cy.get('.text-blue').should('exist')
        cy.get('.btn-outline-gray').should('exist').and('contain', 'समाप्त')
        cy.get('.btn-outline-gray').click()
    
    
    });

    it('Rejection of Hereditary', () => {
      approvallogin();
      cy.get('[title="वंशज"]').should('exist').click();
  
      cy.get('.ic-eye-true').eq(0).click();
      cy.get('.btn-outline-red').should('exist').and('include.text', 'अस्वीकार गर्नुहोस्').click();
      cy.get('#approvalRemarks').type('This should be rejected');
      cy.get('.flex-end > .btn-blue').should('exist').and('include.text', 'अस्वीकार गर्नुहोस्').click();
      cy.get('.btn-outline-gray').should('exist').and('include.text', 'रद्द गर्नुहोस्');
      cy.get('#toast-container').should('exist').and('include.text', 'आवेदन सफलतापूर्वक अस्वीकृत गरिएको छ');
  });
  
  it('Print' , () => {
    operatorlogin();
    cy.get(':nth-child(3) > .mastermenu-link').click();
    cy.get('.ic-more-vertical').click();
    cy.get('.list > :nth-child(2) > .btn').click();
    cy.get('.print-preview-wrapper-front > .w-100 > div > .btn').click();
    cy.wait(5000);
    cy.get('.print-preview-wrapper-back > .w-100 > div > .btn').click();
  })
});