import { faker } from '@faker-js/faker/locale/ne';

const BASE_URL = 'https://ccimsinternal.infodev.com.np';

function operatorlogin() {
  cy.visit(BASE_URL);
  cy.get('.form-control').eq(0).type('sharmila');
  cy.get('.form-control').eq(1).type('User@123');
  cy.get('.btn').click();
  cy.url().should('eq', `${BASE_URL}/#/featured/dashboard`);
  cy.wait(2000);
}

function approverlogin() {
  cy.visit(BASE_URL);
  cy.get('input[type="username"]').type('leeza');
  cy.get('input[type="password"]').type('Test@123');
  cy.get('.btn').click();
  cy.get('.active > .fs-5').click();
  cy.get('.ic-approval').click();
  cy.url().should('eq', `${BASE_URL}/#/featured/approvals`);
  cy.get('h5').should('contain', 'अनुमोदन');
}

function fillParentDetails(index, gender, citizenshipNo, wardno) {
  cy.get(`#firstNameNp_${index}`).type(faker.person.firstName(gender));
  cy.get(`#firstName_${index}`).type(faker.person.firstName(gender));
  cy.get(`#citizenshipNo_${index}`).type(citizenshipNo);
  cy.get(`#localBody_family${index}`).click();
  cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
  cy.get('.application-card-form > app-address-module > :nth-child(2) .select2-selection').click();
  cy.get('.select2-search__field').type(`${wardno}{enter}`);
}

describe('Hereditary Citizenship Test Suite', () => {
  it.only('Using Valid datas', () => {
    cy.fixture('hereditary').its('data').then(users => {
      users.forEach(user => {
        operatorlogin();

        // Navigation
        cy.get(':nth-child(5) > .mastermenu-link').click();
        cy.get('#collapseExample_4 > :nth-child(1) > .submenu-link').click();
        cy.get('.ng-star-inserted').should('contain', ' वंशज नातामा नागरिकता आवेदन');

        // Main Applicant
        cy.get('#firstNameNp').type(faker.person.firstName());
        cy.get('#lastNameNp').type(faker.person.lastName());
        cy.get('#firstName').type(faker.person.firstName());
        cy.get('#lastName').type(faker.person.lastName());
        cy.get('#gender').type(user.gender);

        cy.get('#birthRegistrationNo').type(user.birthRegistrationNo);
        cy.wait(2000)
        cy.get('#dateOfBirth').type(user.DOB + '{enter}');

        // Address
        cy.get('#localBody_address0').click();
        cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
        cy.wait(1000);
        cy.get(':nth-child(5) .select2-selection').click();
        cy.get('.select2-search__field').type('5{enter}');
        cy.get('#sameAsPermanentAddress_address1').click();

        // Father Details
        fillParentDetails(0, 'male', user.citizenshipNo_0, user.wardno);

        // Mother Details
        cy.get('.nav > :nth-child(2)').click();
        fillParentDetails(1, 'female', user.citizenshipNo_1, user.wardno);

        // Recommender
        cy.get('#recommendFirstNameNp').type(user.recommendFirstNameNp);
        cy.get('#recommendLastNameNp').type(user.recommendLastNameNp);
        cy.get('#officeName').click();
        cy.get('tbody > :nth-child(1) > :nth-child(2)').click();

        // Copy Father Details
        cy.get('#copyDetailsFrom_father').click();

        // Submit
        cy.get('.btn-blue').click();
        cy.get('.px-4 > .btn').click();
      });
    });
  });

  it('Approval of Hereditary', () => {
    approverlogin();
    cy.get('[title="वंशज"]').click();
    cy.get('.ic-eye-true').eq(0).click();
    cy.get('.btn-blue').eq(1).click();

    // Confirmation UI
    cy.get('.btn-outline-red').should('contain', ' अस्वीकार गर्नुहोस् ');
    cy.get('.btn-blue').should('contain', 'अनुमोदन गर्नुहोस');
    cy.get('.body-title').should('contain', 'के तपाईं सुरक्षित गर्न चाहनुहुन्छ?');
    cy.get('#cancelBtn').should('contain', ' रद्द गर्नुहोस् ');
    cy.get('#confirmBtn').should('contain', ' सुरक्षित गर्नुहोस् ').click();

    cy.get('.toast-message').should('include.text', ' आवेदन सफलतापूर्वक स्वीकृत गरिएको छ ');
    cy.get('.text-blue').should('exist');
    cy.get('.btn-outline-gray').click();
  });
});
