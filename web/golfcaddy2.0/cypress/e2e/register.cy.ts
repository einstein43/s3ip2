 export {};

describe('Registration Flow', () => {
  it('should successfully register a new user', () => {
     
    cy.visit('https://s3ip2.vercel.app');  

    // Fill in the registration form
    cy.get('input[name="ngf"]').type('126');   
    cy.get('input[name="password"]').type('password123');  

    // Submit the registration form
    cy.get('button[type="submit"]').click();

    // Wait for registration to complete and check for success
   
    cy.url().should('include', 'https://s3ip2.vercel.app/profiel/126').debug(); // Adjust the path based on your application's route
  });
});
