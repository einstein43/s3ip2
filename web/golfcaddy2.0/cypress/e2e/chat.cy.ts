export {};
describe("ChatComponent E2E Test", () => {
  it("should send and receive messages", () => {
     cy.visit("http://localhost:3000/profiel/126");
    cy.wait(1000);
   
     cy.get('input[type="text"]').type("Cypress");
    cy.wait(1000);
     cy.get("button").contains("Send").click();
    cy.wait(1000);
 
    cy.get("Cypress").should("be.visible");

   });
});
