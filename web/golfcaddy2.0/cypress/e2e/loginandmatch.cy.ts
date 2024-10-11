/// <reference types="cypress" />
export {};
describe('End-to-End Tests', () => {
  it('should successfully log in a user and fill in scores on Matchpage', () => {
    
    cy.visit('http://localhost:3000');
    cy.get('input[name="ngf"]').type('126');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/profiel/126');

     cy.visit('http://localhost:3000/wedstrijden/126/1/1/1');  

     for (let i = 1; i <= 18; i++) {
      cy.get('input[name="score"]').type('3'); 
      cy.get('button[name="nexthole"]').click(); 
    }

     cy.get('button[type="submit"]').click(); 

     cy.intercept('POST', 'http://localhost:3001/score/new').as('handleApiSubmit');
    cy.get('button[type="submit"]').click();  
    cy.wait('@handleApiSubmit').its('response.statusCode').should('eq', 500);

  });
});
