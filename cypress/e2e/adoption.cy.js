

///<reference types = 'cypress'/>
// import adoptiondata from "../fixtures/adoptiondata.json"

describe('adoption', () => {
    function operatorlogin() {
        cy.visit('/');
        cy.get('.form-control').eq(0).type('mohan');
        cy.get('.form-control').eq(1).type('Test@123');
        cy.get('.btn').click();
    }

    function approverlogin() {
        cy.visit('/');
        cy.get('input[type="username"]').type('rabin');
        cy.get('input[type="password"]').type('Test@123');
        cy.get('.btn').click();
        cy.get('.ic-approval').click();
        cy.get('.lan-change-link').click();
    }

    it("valid", () => {
        operatorlogin();
        cy.fixture('adoptiondata')
            .its('data').then(user => {
                user.forEach((user) => {
                    function adoption() {
                        cy.get('.lan-change-link').as('lang').should("exist")
                        cy.get('@lang').click();
                        cy.get(':nth-child(5) > .mastermenu-link').click();
                        cy.get(':nth-child(2) > .submenu-link').should('exist').click();
                        cy.get('h5.ng-star-inserted').should('exist').and('contain.text', 'Adoption Citizenship Application');
                    }
                    adoption();

                    function indivdetail() {
                        cy.get('#firstNameNp').type(user.firstNameNp);
                        cy.get('#lastNameNp').type(user.lastNameNp)
                        cy.get('#firstName').type(user.firstName);
                        cy.get('#lastName').type(user.lastName);
                        cy.get('#gender').type(user.gender);
                        cy.get('#religion').type(user.religion);
                    }
                    indivdetail();

                    function birthdetail() {
                        cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.dob);
                        // cy.pause();
                        cy.get(':nth-child(3) > .formcard__form > :nth-child(1)').click();
                        cy.get('#birthCountryBtn > .ic-search').click();
                        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.birthcountry);
                        cy.wait(2000);
                        cy.get(user.countryselect).dblclick();
                        cy.wait(2000)
                        cy.get('#birthCountryAddressNp').type(user.birthCountryAddressNp);
                        cy.get('#birthCountryAddress').type(user.birthCountryAddress);
                        cy.get('#district_address1').click();
                        cy.wait(1000);
                        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district);
                        cy.wait(2000);
                        cy.get('tr.ng-star-inserted > :nth-child(4)').click();
                        cy.get('#localBody_address1').click();
                        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.localbody);
                        cy.wait(1000);
                        cy.get(user.localbodyselector).eq(0).click({ force: true });
                        cy.get('app-address-module.ng-star-inserted > :nth-child(1) > .col-2 > .form-group > .select2 > .selection > .select2-selection').type(user.wardno);
                        cy.get('#toleStreet_address1').type(user.toleStreet_address1, { force: true });
                    }
                    birthdetail();

                    function spousedetail() {
                        cy.get('#firstNameNp_2').type(user.firstNameNp_2);
                        cy.get('#lastNameNp_2').type(user.lastNameNp_2);
                        cy.get('#firstName_2').type(user.firstName_2);
                        cy.get('#lastName_2').type(user.lastName_2);
                        cy.get('#citizenshipNo_2').type(user.citizenshipNo_2);
                        cy.get('#district_family2').click();
                        cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.spousedistrict);
                        cy.wait(2000);
                        cy.get('tr.ng-star-inserted > :nth-child(4)').eq(0).click({ force: true });
                        cy.get('#localBody_family2').click();
                        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.localbodyspouse);
                        cy.wait(1000);
                        cy.get('tr.ng-star-inserted > :nth-child(3)').eq(0).click();
                        cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').type(user.spouseward);
                    }
                    spousedetail();

                    function livingplaceinnepal() {
                        cy.get(':nth-child(2) > :nth-child(3) > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.marriagedate)
                        cy.get('.mb-3 > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.livingsincedate)
                        cy.get('#copyDetailsFrom_husband').click();
                        cy.wait(2000);
                        cy.get('#identificationFirstNameNp').then(($checkspousedata) => {
                            if ($checkspousedata.val() === '') {
                                cy.get('#identificationFirstNameNp').type('tested');
                            } else {
                                cy.wait(500);
                            }
                        })
                    }
                    livingplaceinnepal()

                    function populateddata() {
                        cy.get('.mb-3 > .form-group > .formValidationDiv > .input-group > #officeName').then(($recoffice) => {
                            if ($recoffice.val() === '') {
                                cy.get('.mb-3 > .form-group > .formValidationDiv > .input-group > #officeName').click();
                                cy.get('#recommendFirstNameNp').type('टेस्ट')
                                cy.get('#recommendMiddleNameNp').type('टेस्ट')
                                cy.get('#recommendLastNameNp').type('टेस्ट')
                                cy.get('.mb-2.mt-1 > .col-4 > .form-group > .formValidationDiv > .input-group > #officeName').click();
                            } else {
                                // cy.pause();
                                cy.get('.btn-blue').should('exist').and('contain', 'View Application').click();
                                cy.get('.btn-outline-gray').should('exist');
                                cy.get('p.formValidationTooltip').should('not.exist', 'This is required');
                                cy.wait(1000);
                                cy.get('.px-4 > .btn').should('exist').click();
                                cy.get('.toast-message').should('include.text', user.submitassertiontext)
                                cy.get('h5.ng-star-inserted').should('exist').and('include.text', 'Overall List');
                            }
                        })
                    }
                    populateddata();
                });
            });
    });


it("minor", () => {
    operatorlogin();
    cy.fixture('adoptiondata')
    .its('data2').then(user =>{
        user.forEach((user)=>{
    function adoption(){
    cy.get('.lan-change-link').as('lang').should("exist")
    cy.get('@lang').click();
    //select adoption
    cy.get(':nth-child(5) > .mastermenu-link').click();
    cy.get(':nth-child(2) > .submenu-link').should('exist').click();
    //validation for the adoption form opened.
    cy.get('h5.ng-star-inserted').should('exist').and('contain.text','Adoption Citizenship Application');
    }
    adoption()
    function indivdetail(){
    //adoption
    // cy.get('#citizenshipType').should('be.visible').and('.ng-star-inserted').click();
    // cy.get('.ng-star-inserted').eq(0).trigger('click');
    //firstname
    cy.get('#firstNameNp').type(user.firstNameNp);
    cy.get('#lastNameNp').type(user.lastNameNp)
    // cy.get('.upload-button > .btn').selectFile('cypress/fixtures/tt.png',{force:true});
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#gender').type(user.gender);
    cy.get('#religion').type(user.religion);
    }
    indivdetail()
    function birthdetail(){
    //DOB
    cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.dob);
    // cy.pause();
    cy.get(':nth-child(3) > .formcard__form > :nth-child(1)').click();
    cy.get('#birthCountryBtn > .ic-search').click();
    cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.birthcountry);
    cy.wait(2000);
    cy.get(user.countryselect).dblclick();
    cy.wait(2000)      
    cy.get('#birthCountryAddressNp').type(user.birthCountryAddressNp);
    cy.get('#birthCountryAddress').type(user.birthCountryAddress);
    //nepals permanent address
    //district
    cy.get('#district_address1').click();
    cy.wait(1000);
    cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.district); 
    cy.wait(2000);
    cy.get('tr.ng-star-inserted > :nth-child(4)').click();
    //Local body
    cy.get('#localBody_address1').click();
    cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.localbody);
    cy.wait(1000);
    cy.get(user.localbodyselector).eq(0).click({force:true});
    // wardno
    cy.get('app-address-module.ng-star-inserted > :nth-child(1) > .col-2 > .form-group > .select2 > .selection > .select2-selection').type(user.wardno);
    cy.get('#toleStreet_address1').type(user.toleStreet_address1, {force: true});
    }
    birthdetail()
    function spousedetail(){     
    // spousedetails
    // cy.get('.toast-message').should('exist').and('include.text','address');
    cy.get('#firstNameNp_2').type(user.firstNameNp_2);
    cy.get('#lastNameNp_2').type(user.lastNameNp_2);
    cy.get('#firstName_2').type(user.firstName_2);
    cy.get('#lastName_2').type(user.lastName_2);
    cy.get('#citizenshipNo_2').type(user.citizenshipNo_2);
    cy.get('#district_family2').click();
    cy.get(':nth-child(4) > tb-search-field > .form-control-icon > .header-filter').type(user.spousedistrict);
    cy.wait(2000);
    cy.get('tr.ng-star-inserted > :nth-child(4)').eq(0).click({force:true});
    cy.get('#localBody_family2').click();
    cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.localbodyspouse);
    cy.wait(1000);
    cy.get('tr.ng-star-inserted > :nth-child(3)').eq(0).click();
    cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').type(user.spouseward);
    }
    spousedetail();
    function livingplaceinnepal(){
        // maariage_date
        cy.get(':nth-child(2) > :nth-child(3) > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.marriagedate)
        cy.get('.mb-3 > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.livingsincedate)
        cy.get('#copyDetailsFrom_husband').click();
        cy.wait(2000);
        cy.get('#identificationFirstNameNp').then(($checkspousedata)=>{
            if($checkspousedata.val()===''){
                cy.get('#identificationFirstNameNp').type('tested');

            }
            else{
                cy.wait(500);
            }
        })
        
    }
    livingplaceinnepal()
    function populateddata(){
    // recommendedoffice
    cy.get('.mb-3 > .form-group > .formValidationDiv > .input-group > #officeName').then(($recoffice)=>{
        if($recoffice.val()===''){
            cy.get('.mb-3 > .form-group > .formValidationDiv > .input-group > #officeName').click();
            cy.get('#recommendFirstNameNp').type('टेस्ट')
            cy.get('#recommendMiddleNameNp').type('टेस्ट')
            cy.get('#recommendLastNameNp').type('टेस्ट')
            cy.get('.mb-2.mt-1 > .col-4 > .form-group > .formValidationDiv > .input-group > #officeName').click();              
            
        }
        else{
            // cy.pause();
            cy.get('.btn-blue').should('exist').and('contain', 'View Application').click();
            cy.get('.btn-outline-gray').should('exist');
            cy.get('.toast-message').should('be.visible').and ('include.text',user.submitassertiontext)
            cy.get('p.formValidationTooltip').should('not.exist', 'This is required');
            cy.wait(1000);
            cy.get('.px-4 > .btn').should('not.exist');
            // cy.get('.toast-message').should('be.visible').and ('include.text',user.submitassertiontext)


            cy.get('.toast-message').should('not.include.text',user.submitassertiontext2);
            // cy.get('h5.ng-star-inserted').should('exist').and('include.text','Overall List');

        }
    }
    
    
)}
populateddata();

    
});
});
});


it('Approval of Adoption', () => {
    approverlogin();
    cy.get('[title="Matrimonial Adoption"]').should('exist').click();
    
    cy.get('.ic-eye-true').eq(0).click();
    cy.get('h5.ng-star-inserted').should('include.text', ' Adoption Citizenship Application');
    
    cy.get('.btn-outline-red').should('exist').and('include.text', 'Reject');
    cy.get('.btn-blue').eq(1).should('exist').and('include.text', 'Approve').click();
    
    cy.get('#cancelBtn').should('exist').and('include.text', 'Cancel');
    cy.get('#confirmBtn').should('exist').and('include.text', 'Save').click();
        
    cy.get('.modal-body-info > p').should('include.text', 'Generated Citizenship No.');
    
    cy.get('.modal-footer > .btn').click();
    cy.get('.ng-trigger > .ng-tns-c42-2').should('exist', 'Application approved successfully');
    
    cy.get(':nth-child(2) > .mastermenu-link').click();
});

it('Rejection of Adoption', () => {
    approverlogin();
    cy.get('[title="Matrimonial Adoption"]').should('exist').click();

    cy.get('.ic-eye-true').eq(0).click();
    cy.get('.btn-outline-red').should('exist').and('include.text', 'Reject').click();
    cy.get('#approvalRemarks').type('This should be rejected');
    cy.get('.flex-end > .btn-blue').should('exist').and('include.text', 'Reject').click();
    cy.get('.btn-outline-gray').should('exist').and('include.text', 'Cancel');
    cy.get('#toast-container').should('exist').and('include.text', 'Application rejected successfully');
});
});