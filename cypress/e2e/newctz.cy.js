// cypress/e2e/hereditary_form.cy.js
import { faker } from '@faker-js/faker/locale/ne';

const BASE_URL = 'https://ccimsinternal.infodev.com.np';

function login(username, password) {
  cy.visit(BASE_URL);
  cy.get('.form-control').eq(0).type(username);
  cy.get('.form-control').eq(1).type(password);
  cy.get('.btn').click();
}

function fillHereditaryForm(user) {
  cy.get(':nth-child(5) > .mastermenu-link').click();
  cy.get('#collapseExample_4 > :nth-child(1) > .submenu-link').click();
  cy.url().should('include', '/#/featured/citizenship/hereditary');

  cy.get('#firstNameNp').type(faker.person.firstName());
  cy.get('#lastNameNp').type(faker.person.lastName());
  cy.get('#firstName').type(faker.person.firstName());
  cy.get('#lastName').type(faker.person.lastName());
  cy.get('#gender').type(user.gender);
  cy.get('#birthRegistrationNo').type('546');
  cy.get('app-date-picker input.form-control').eq(2).type('20641015{enter}');



  cy.get('#localBody_address0').click();
  cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
  cy.get(':nth-child(5) .select2-selection').click();
  cy.get('.select2-search__field').type('5{enter}');
  cy.get('#sameAsPermanentAddress_address1').click();

  // Father's infouser.DOB
  cy.get('#firstNameNp_0').type(faker.person.firstName('male'));
  cy.get('#firstName_0').type(faker.person.firstName('male'));
  cy.get('#citizenshipNo_0').type('546');
  cy.get('#localBody_family0').click();
  cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
  cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection', { timeout: 10000 }).click();
  cy.get('.select2-search__field').type('5{enter}');

  // Mother's info
  cy.get('.nav > :nth-child(2)').click();
  cy.get('#firstNameNp_1').type(faker.person.firstName('female'));
  cy.get('#firstName_1').type(faker.person.firstName('female'));
  cy.get('#citizenshipNo_1').type('65');
  cy.get('#localBody_family1').click();
  cy.get('tbody > :nth-child(2) > :nth-child(2)').click();
  cy.get('.application-card-form > app-address-module > :nth-child(2) > .col-2 > .form-group > .select2 > .selection > .select2-selection').click();
  cy.get('.select2-search__field').type('5{enter}');

  // Recommender info
  cy.get('#recommendFirstNameNp').type('श्याम');
  cy.get('#recommendLastNameNp').type('श्रेष्ठ');
  cy.get('#officeName').click();
  cy.get('tbody > :nth-child(1) > :nth-child(2)').click();

  cy.get('#copyDetailsFrom_father').click();
  cy.get('.btn-blue').click();
  cy.get('.px-4 > .btn').click();
}

describe('Hereditary Citizenship Application', () => {
  beforeEach(() => {
    login('sharmila', 'User@123');
  });

  it('submits valid hereditary citizenship applications', () => {
    cy.fixture('hereditary').then((data) => {
      data.data.forEach((user) => {
        fillHereditaryForm(user);
      });
    });
  });
});

describe('Edge Cases - Hereditary Citizenship Form', () => {
  it('shows validation errors on empty submission', () => {
    login('sharmila', 'User@123');
    cy.get(':nth-child(5) > .mastermenu-link').click();
    cy.get('#collapseExample_4 > :nth-child(1) > .submenu-link').click();
    cy.get('.btn-blue').click(); // Try submitting without filling anything

    cy.get('.formValidationTooltip').should('exist');
    cy.get('.formValidationTooltip').each(($el) => {
      expect($el.text().trim()).to.not.be.empty;
    });
  });

  it('rejects invalid citizenship number format', () => {
    login('sharmila', 'User@123');
    cy.get(':nth-child(5) > .mastermenu-link').click();
    cy.get('#collapseExample_4 > :nth-child(1) > .submenu-link').click();

    cy.get('#firstNameNp').type('टेस्ट');
    cy.get('#firstName').type('Test');
    cy.get('#citizenshipNo_0').type('abc123!@#'); // Invalid format

    cy.get('.btn-blue').click();
    cy.get('.formValidationTooltip').should('contain', 'मान्य नागरिकता नम्बर दिनुहोस्');
  });

  it('displays error for future date of birth', () => {
    login('sharmila', 'User@123');
    cy.get(':nth-child(5) > .mastermenu-link').click();
    cy.get('#collapseExample_4 > :nth-child(1) > .submenu-link').click();

    const futureDate = '2100-01-01';

    cy.get('#birthRegistrationNo').type('123456');
    cy.get('.formValidationDiv app-date-picker input.form-control').type(futureDate + '{enter}');
    cy.get('.btn-blue').click();

    cy.get('.formValidationTooltip').should('contain', 'भविष्यको मिति मान्य छैन');
  });
});

describe('Hereditary Approval Process', () => {
  it('approves a hereditary application', () => {
    login('leeza', 'User@123');
    cy.get('.active > .fs-5').click();
    cy.get('.ic-approval').click();
    cy.url().should('include', '/#/featured/approvals');
    cy.get('h5').should('contain', 'अनुमोदन');

    cy.get('[title="वंशज"]').click();
    cy.get('.ic-eye-true').first().click();
    cy.get('.btn-blue').eq(1).click();
    cy.get('#confirmBtn').click();
    cy.get('.toast-message').should('include.text', 'आवेदन सफलतापूर्वक स्वीकृत गरिएको छ');
    cy.get('.btn-outline-gray').click();
  });
});
