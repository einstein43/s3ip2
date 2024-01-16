/// <reference types="cypress" />
export default {};
describe('Register functionality', () => {
    it('should successfully register a user', () => {
      cy.visit('localhost:3000');  

      // Fill in registration form
      cy.get('input[name="ngfregister"]').type('12345'); 
      cy.get('input[name="passwordregister"]').type('password123'); 
      cy.get('form').submit();

      // Check if registration is successful
      // check in console if response = 200
      console.log(cy.request('localhost:3000'));
      cy.request('localhost:3000').then((response) => {
        expect(response.status).to.equal(200);
      });

     });
  });
  