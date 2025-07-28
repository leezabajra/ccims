
describe('old ctz', () => {

    function operatorlogin() {
        cy.visit('https://ccimsinternal.infodev.com.np/');
        cy.get('.form-control').eq(0).type('sagaraao-operator');
        cy.get('.form-control').eq(1).type('Test@123');
        cy.get('.btn').click();
        cy.url().should('eq', 'https://ccimsinternal.infodev.com.np/#/featured/dashboard')
        cy.wait(2000);
      }
      
      
    it('Using valid datas', () => {
        cy.fixture('oldctz')
        .its('data').then(user =>{
            user.forEach((user)=>{
            operatorlogin()
            cy.get(':nth-child(6) > .mastermenu-link').click();
            // cy.url().should('eq', 'https://ccimsinternal.infodev.com.np/#/featured/citizenship/hereditary')
            // cy.pause()
            

        cy.get('#citizenshipType').select(user.citizenshipTypeH);
        cy.get(':nth-child(2) > #citizenshiNumberNep > .formValidationDiv > #citizenshipNoNp').type(user.ctzno);
        cy.get(':nth-child(3) > #citizenshiNumberNep > .formValidationDiv > #citizenshipNoNp').type(user.ctznonp);
        cy.get('#citizenshipIssuedDistrictName').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district);
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#citizenshipIssuedOfficeName').click();
        cy.get('tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted').click();
        cy.wait(2000)
        cy.get(':nth-child(3) > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.issuedate+'{enter}');
        cy.get('#firstNameNp').type(user.firstnamenp);
        cy.get('#lastNameNp').type(user.lastnamenp);
        cy.get('#firstName').type(user.firstname);
        cy.get('#lastName').type(user.lastname);
        cy.get('#gender').type(user.gender);
        cy.get(':nth-child(1) > .col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.dateofbirth+'{enter}');
        cy.get('#formerAddress_address0').click();
        cy.get('#district_address0').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district1);
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#vdc_address0').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.vdc);
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(3)').click();
        cy.get(':nth-child(4) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(user.wardno+'{enter}');

        cy.get('#district_address1').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district);
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#localBody_address1').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.localbody1);
        cy.wait(2000);
        cy.get('tr.ng-star-inserted > :nth-child(3)').click();
        cy.get(':nth-child(6) > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(user.wardno+'{enter}');

        cy.get('#firstNameNp_0').type(user.firstnamenp1);
        cy.get('#firstName_0').type(user.firstname1);
        cy.get('#citizenshipNo_0').type(user.ctzno1);
        cy.get('#citizenshipType_0').select('वंशज');
        cy.get('#formerAddress_family0').click();
        cy.get('#district_family0').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district);
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#vdc_family0').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.vdc);
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(3)').click();
        cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(user.wardno+'{enter}');

        cy.get('.nav > :nth-child(2)').click();
        cy.get('#firstNameNp_1').type(user.firstnamenp2);
        cy.get('#firstName_1').type(user.firstname2);
        cy.get('#citizenshipNo_1').type(user.ctzno2);
        cy.get('#citizenshipType_1').select('वंशज');
        cy.get('#formerAddress_family1').click();
        cy.get('#district_family1').click();
        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district);
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
        cy.get('#vdc_family1').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.vdc);
        cy.wait(2000)
        cy.get('tr.ng-star-inserted > :nth-child(3)').click();
        cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type(user.wardno+'{enter}');
        cy.get('#oldCitizenshipIssuerName').type(user.issuername);
        cy.get('#oldCitizenshipIssuerDesignation').type(user.designation);
      
        // cy.get('.btn-blue').should('exist').and('contain', 'आवेदन हेर्नुहोस्')
        // cy.get('.ng-star-inserted').should('exist').and('contain', 'रिसेट गर्नुहोस्')
        cy.get('.btn-blue').click();
        // cy.get('.toast-message').should('include.text', ' डाटा सफलतापूर्वक सेव गरिएको छ ')
        // cy.get('.px-4 > .btn').click()
        // cy.get('.toast-message').should('include.text', 'डाटा सफलतापूर्वक ल्याइयो')
        // cy.get('h5.ng-star-inserted').should('include.text', 'दैनिक समग्र सूची')








            

            });


    });
});
});