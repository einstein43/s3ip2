/// <reference types="cypress" />
export {};
export default {};
describe('Login functionality', () => {
    it('should successfully log in a user', () => {
      cy.visit('https://s3ip2.vercel.app'); 
  
      // Fill in login form
      cy.get('input[name="ngf"]').type('12345'); 
      cy.get('input[name="password"]').type('password123'); 
      cy.get('button[type="submit"]').click();
  
      // Check if login is successful
      cy.url().should('include', '/profiel/12345');  
    });
  });
  