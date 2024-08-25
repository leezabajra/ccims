///<reference types = 'cypress'/>

function login() {
    cy.visit('https://ccimsinternal.infodev.com.np/')
    cy.get('input[type="username"]').type('rabin');
    cy.get('input[type="password"]').type('Test@123');
    cy.get('.btn').click()
    // cy.contains('बबरमहल').click()
    cy.get('.ic-approval').click()
    cy.url().should('eq', 'https://ccimsinternal.infodev.com.np/#/featured/approvals');
    cy.get('h5').should('exist').should('contain', 'अनुमोदन')
}

it('Approval of By Birth', () => {
    login()
    cy.get('[title="जन्मसिद्ध"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.wait(2000)
    cy.get('.btn-outline-red').should('exist').and('contain', ' अस्वीकार गर्नुहोस् ')
    cy.get('.btn-blue').should('exist').and('contain', 'अनुमोदन गर्नुहोस')
    cy.get('.btn-blue').eq(0).click({ timeout: 10000 })
    cy.get('.body-title').should('exist').and('contain', 'के तपाईं सुरक्षित गर्न चाहनुहुन्छ?')
    cy.get('#cancelBtn').should('exist').and('contain', ' रद्द गर्नुहोस् ')
    cy.get('#confirmBtn').should('exist').and('contain', ' सुरक्षित गर्नुहोस् ')
    cy.get('#confirmBtn').click()

cy.get('.toast-message').should('include.text', ' आवेदन सफलतापूर्वक स्वीकृत गरिएको छ ')
    cy.get('.text-blue').should('exist')
    cy.get('.btn-outline-gray').should('exist').and('contain', 'समाप्त')
    cy.get('.btn-outline-gray').click()
});

it('Approval of NRN', () => {
    login()
    cy.get('h5').should('exist').should('contain', 'अनुमोदन')
    cy.get('[title="गैरआवासीय"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.get('.btn-blue').eq(1).click({ timeout: 10000 })
    cy.get('.btn-outline-red').should('exist').and('contain', ' अस्वीकार गर्नुहोस् ')
    cy.get('.btn-blue').should('exist').and('contain', 'अनुमोदन गर्नुहोस')
    cy.get('.body-title').should('exist').and('contain', 'के तपाईं सुरक्षित गर्न चाहनुहुन्छ?')
    cy.get('#cancelBtn').should('exist').and('contain', ' रद्द गर्नुहोस् ')
    cy.get('#confirmBtn').should('exist').and('contain', ' सुरक्षित गर्नुहोस् ')
    cy.get('#confirmBtn').click()
    //cy.get('.modal-footer > .btn').shadow('exist').click()
    cy.get('.toast-message').should('include.text', ' आवेदन सफलतापूर्वक स्वीकृत गरिएको छ ')
    cy.get('.text-blue').should('exist')
    cy.get('.btn-outline-gray').should('exist').and('contain', 'समाप्त')
    cy.get('.btn-outline-gray').click()

});

it('Approval of Matrimonial Adoption', () => {
    login()
    cy.get('h5').should('exist').should('contain', 'अनुमोदन')
    cy.get('[title="वैवाहिक अङ्गीकृत"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.get('.btn-blue').eq(1).click({ timeout: 10000 })
    cy.get('#confirmBtn').click()
    //cy.get('.modal-footer > .btn').shadow('exist').click()
});



it('Approval of Hereditary', () => {
    login()
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


})

it('Approval of According to Birth', () => {
    login()
    cy.get('h5').should('exist').should('contain', 'अनुमोदन')
    cy.get('[title="जन्मको आधारमा"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.get('.btn-blue').eq(1).click({ timeout: 10000 })
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

it.only('Approval of Citizenship Copy', () => {
    login()
    cy.get('[title="नागरिकता प्रतिलिपि"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.get('.btn-blue').eq(1).click({ timeout: 20000 })
    cy.get('.btn-outline-red').should('exist').and('contain', ' अस्वीकार गर्नुहोस् ')
    cy.get('.btn-blue').should('exist').and('contain', 'अनुमोदन गर्नुहोस')
    cy.get('.body-title').should('exist').and('contain', 'के तपाईं सुरक्षित गर्न चाहनुहुन्छ?')
    cy.get('#cancelBtn').should('exist').and('contain', ' रद्द गर्नुहोस् ')
    cy.get('#confirmBtn').should('exist').and('contain', ' सुरक्षित गर्नुहोस् ')
    cy.get('#confirmBtn').click()

    });

it('Approval of Reacquisition', () => {
    login()
    cy.get('[title="पुन: जारी"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.get('.btn-blue').eq(1).click({ timeout: 20000 })
    cy.get('.btn-outline-red').should('exist').and('contain', ' अस्वीकार गर्नुहोस् ')
    cy.get('.btn-blue').should('exist').and('contain', 'अनुमोदन गर्नुहोस')
    cy.get('.body-title').should('exist').and('contain', 'के तपाईं सुरक्षित गर्न चाहनुहुन्छ?')
    cy.get('#cancelBtn').should('exist').and('contain', ' रद्द गर्नुहोस् ')
    cy.get('#confirmBtn').should('exist').and('contain', ' सुरक्षित गर्नुहोस् ')
    cy.get('#confirmBtn').click()
});

it('Approval of  Data Correction', () => {
    login()
    cy.get('[title="डाटा सुधार"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.pause()
    cy.get('.btn-outline-red').should('exist').and('contain', ' अस्वीकार गर्नुहोस् ')
    cy.get('.btn-blue').eq(0).click({ timeout: 40000 })
    cy.get('.btn-blue').should('exist').and('contain', 'अनुमोदन गर्नुहोस')
    cy.get('.body-title').should('exist').and('contain', 'के तपाईं सुरक्षित गर्न चाहनुहुन्छ?')
    cy.get('#cancelBtn').should('exist').and('contain', ' रद्द गर्नुहोस् ')
    cy.get('#confirmBtn').should('exist').and('contain', ' सुरक्षित गर्नुहोस् ')
    cy.get('#confirmBtn').click()
});

it('Approval of  Old Citizenship Hereditary', () => {
    login()
    cy.get('[title="पुरानो नागरिकता वंशज"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.get('.btn-blue').eq(1).click({ timeout: 20000 })
    cy.get('.btn-outline-red').should('exist').and('contain', ' अस्वीकार गर्नुहोस् ')
    cy.get('.btn-blue').should('exist').and('contain', 'अनुमोदन गर्नुहोस')
    cy.get('.body-title').should('exist').and('contain', 'के तपाईं सुरक्षित गर्न चाहनुहुन्छ?')
    cy.get('#cancelBtn').should('exist').and('contain', ' रद्द गर्नुहोस् ')
    cy.get('#confirmBtn').should('exist').and('contain', ' सुरक्षित गर्नुहोस् ')
    cy.get('#confirmBtn').click()
});

it('Approval of  Relinquish', () => {
    login()
    cy.get('[title="त्याग"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.get('.ic-eye-true').click({ timeout: 20000 })
    cy.get('.btn-blue').click({ timeout: 20000 })
    cy.get('#confirmBtn').click()
});

it('Approval of Minor NID', () => {
    login()
    cy.get('[title="नाबालक परिचय पत्र"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.get('.btn-blue').click({ timeout: 20000 })
    cy.get('#confirmBtn').click()
});

it('Approval of Minor NID Copy', () => {
    login()
    cy.get('[title="नाबालक परिचय पत्र प्रतिलिपि"]').click()
    cy.get('.ic-eye-true').eq(0).click({ timeout: 10000 })
    cy.get('.btn-blue').click({ timeout: 20000 })
    cy.get('#confirmBtn').click()
});


