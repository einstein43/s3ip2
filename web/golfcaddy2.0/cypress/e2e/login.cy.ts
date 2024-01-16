/// <reference types="cypress" />
export default {};
describe('Login functionality', () => {
    it('should successfully log in a user', () => {
      cy.visit('/'); // Adjust the URL if needed
  
      // Fill in login form
      cy.get('input[name="ngf"]').type('12345'); // Use a registered NGF number
      cy.get('input[name="password"]').type('password123'); // Use the corresponding password
      cy.get('form').submit();
  
      // Check if login is successful
      cy.contains('User logged in successfully!').should('exist');
    });
  });
  