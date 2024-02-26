///<reference types = 'cypress'/>
describe('adoptionapproval', () => {
    it('Approval of Adoption', () => {
      cy.visit('/')
  
      cy.get('input[type="username"]').type('rabin');
      cy.get('input[type="password"]').type('Test@123');
      cy.get('.btn').click();
      
      cy.get('.ic-approval').click();
      
      cy.get('.lan-change-link').click(); 
      cy.get('[title="Matrimonial Adoption"]').click();
      
      cy.get('.ic-eye-true').eq(0).click();
      cy.get('h5.ng-star-inserted').should('include.text',' Adoption Citizenship Application');
      
      cy.get('.btn-outline-red').should('exist').and('include.text','Reject');
      cy.get('.btn-blue').eq(1).should('exist').and('include.text','Approve').click();
      
      cy.get('#cancelBtn').should('exist').and('include.text','Cancel');
      cy.get('#confirmBtn').should('exist').and('include.text','Save').click();
          
      cy.get('.modal-body-info > p').should('include.text','Generated Citizenship No.');
  
      cy.get('.modal-footer > .btn').click();
      cy.get('.ng-trigger > .ng-tns-c42-2').should('exist','Application approved successfully');
  
      cy.get(':nth-child(2) > .mastermenu-link').click();
    });
  
    it('Rejection of Adoption', () => {
      cy.visit('/')
  
      cy.get('input[type="username"]').type('rabin');
      cy.get('input[type="password"]').type('Test@123');
      cy.get('.btn').click();
      cy.get('.ic-approval').click();
      cy.get('.lan-change-link').click();
      cy.get('[title="Matrimonial Adoption"]').click();
  
      cy.get('.ic-eye-true').eq(0).click();
      cy.get('.btn-outline-red').should('exist').and('include.text','Reject').click();
      cy.get('#approvalRemarks').type('This should be rejected');
      cy.get('.flex-end > .btn-blue').should('exist').and('include.text',('Reject')).click();
      cy.get('.btn-outline-gray').should('exist').and('include.text',('Cancel'));
      cy.get('#toast-container').should('exist').and('include.text','Application rejected successfully');
    });
  });
  