/// <reference types="cypress" />

describe('Register functionality', () => {
    it('should successfully register a user', () => {
      cy.visit('localhost:3000'); // Adjust the URL if needed

      // Fill in registration form
      cy.get('input[name="ngfregister"]').type('12345'); // Change to a valid NGF number
      cy.get('input[name="passwordregister"]').type('password123'); // Change to a valid password
      cy.get('form').submit();

      // Check if registration is successful
      // check in console if response = 200
      console.log(cy.request('localhost:3000'));
      cy.request('localhost:3000').then((response) => {
        expect(response.status).to.equal(200);
      });

     });
  });
  