/// <reference types="cypress" />
export {};
describe('End-to-End Tests', () => {
  it('should successfully log in a user and fill in scores on Matchpage', () => {
    
    cy.visit('https://s3ip2.vercel.app');
    cy.get('input[name="ngf"]').type('126');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/profiel/126');

    // Go to the HoleNumberPage
    cy.visit('https://s3ip2.vercel.app/wedstrijden/126/1/1/1');  

    // Assuming the input field has the class 'input' and the button has the class 'button'
    for (let i = 1; i <= 18; i++) {
      cy.get('input[name="score"]').type('3'); 
      cy.get('button[name="nexthole"]').click(); 
    }

    // Confirm Submission
    cy.get('button[type="submit"]').click(); // Click the "Submit to API" button

    // Check if the API call was successful (you might need to adjust the API endpoint and response validation)
    cy.intercept('POST', 'http://localhost:3001/round').as('apiSubmit');
    cy.get('button[type="submit"]').click(); // Click the "Confirm Submission" button
    cy.wait('@apiSubmit').its('response.statusCode').should('eq', 200);

  });
});
