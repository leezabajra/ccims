///<reference types = 'cypress'/>
import adoptiondata from "../fixtures/adoptiondata.json"
describe('adoption', () => {
    adoptiondata.forEach((user) =>{

    
    it('adoption', () => {
        cy.visit('https://ccimsinternal.infodev.com.np/#/auth/login');
        function login(){
                    
        cy.get('.form-control').eq(0).type('mohan');
        cy.get('.form-control').eq(1).type('Test@123');
        cy.get('.btn').click();
        }
        function adoption(){
        cy.get('.lan-change-link').as('lang').should("exist")
        cy.get('@lang').click();
        //select adoption
        cy.get(':nth-child(5) > .mastermenu-link').click();
        cy.get(':nth-child(2) > .submenu-link').should('exist').click();
        }
        function indivdetail(){
        //adoption
        // cy.get('#citizenshipType').should('be.visible').and('.ng-star-inserted').click();
        // cy.get('.ng-star-inserted').eq(0).trigger('click');
        //firstname
        cy.get('#firstNameNp').type(user.firstNameNp)
        cy.get('#lastNameNp').type(user.lastNameNp)
        // cy.get('.upload-button > .btn').selectFile('cypress/fixtures/tt.png',{force:true});
        cy.get('#firstName').type(user.firstName);
        cy.get('#lastName').type(user.lastName);
        cy.get('#gender').type(user.gender);
        cy.get('#religion').type(user.religion);
        }
        function birthdetail(){
        //DOB
        cy.get('.col-4 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type('20500909,{enter}');
        cy.get(':nth-child(3) > .formcard__form > :nth-child(1)').click();
        // cy.get('#birthCountryId').click();
        // cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Anguilla').dblclick({force:true});
        cy.get('#birthCountryBtn > .ic-search').click();
        cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type(user.birthcountry);
        // cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('canada');
        // cy.get(':nth-child(3) > tb-search-field > .form-control-icon > .header-filter').type('india');
        cy.wait(2000);
        cy.get(user.countryselect).dblclick();
        cy.wait(2000)
        // canada
        // cy.get('tr.ng-star-inserted > :nth-child(3)').click();
        // india
        // cy.get('tbody > :nth-child(3) > :nth-child(3)').click();       
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
        function spousedetail(){     
        // spousedetails
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
        function livingplaceinnepal(){
            // maariage_date
            cy.get(':nth-child(2) > :nth-child(3) > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.marriagedate)
            cy.get('.mb-3 > .col-8 > .form-group > .formValidationDiv > app-date-picker > .justify-content-between > .input-icon-BS > .form-control').type(user.livingsincedate)
            cy.get('#copyDetailsFrom_husband').click();
            cy.wait(10000);
            cy.get('#identificationFirstNameNp').then(($checkspousedata)=>{
                if($checkspousedata.val()===''){
                    cy.get('#identificationFirstNameNp').type('tested');

                }
                else{

                }
            })
            
        }
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
                cy.pause();
                cy.get('.btn-blue').click();
                cy.get('.px-4 > .btn').click();
            }
        }
        
    )}
        
        login();
        adoption();
        indivdetail();
        birthdetail();
        spousedetail();
        livingplaceinnepal();
        populateddata();
    });
    });
});