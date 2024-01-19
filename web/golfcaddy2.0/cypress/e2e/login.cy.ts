/// <reference types="cypress" />
 
export {};
describe('Login functionality', () => {
    it('should successfully log in a user', () => {
      cy.visit('http://localhost:3000'); 
  
      // Fill in login form
      cy.get('input[name="ngf"]').type('126'); 
      cy.get('input[name="password"]').type('password123'); 
      cy.get('button[type="submit"]').click();
  cy.wait(5000);
      // Check if login is successful
      cy.url().should('include', 'http://localhost:3000/profiel/126').debug();;  
    });
  });
  