 

describe('Registration Flow', () => {
  it('should successfully register a new user', () => {
    // Visit the registration page
    cy.visit('http://localhost:3000'); // Adjust the path based on your application's route

    // Fill in the registration form
    cy.get('input[name="ngf"]').type('123456'); // Replace '123456' with the desired ngf number
    cy.get('input[name="password"]').type('password123'); // Replace 'password123' with the desired password

    // Submit the registration form
    cy.get('button[type="submit"]').click();

    // Wait for registration to complete and check for success
   
     cy.url().should('include', '/profiel/123456'); // Adjust the path based on your application's route
  });
});
