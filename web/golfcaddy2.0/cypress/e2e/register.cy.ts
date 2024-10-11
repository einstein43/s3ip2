 export {};

describe('Registration Flow', () => {
  it('should successfully register a new user', () => {
     
    cy.visit('http://localhost:3000/');  

     cy.get('input[name="ngf"]').type('126');   
    cy.get('input[name="password"]').type('password123');  

     cy.get('button[type="submit"]').click();

    
    cy.url().should('include', '/profiel/126').debug(); 
  });
});
