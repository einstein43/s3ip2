export {};
describe("ChatComponent E2E Test", () => {
  it("should send and receive messages", () => {
    // Visit the page with the ChatComponent
    cy.visit("https://s3ip2.vercel.app/profiel/126");
    cy.wait(1000);
   
    // Type a message in the input field
    cy.get('input[type="text"]').type("Hello, Cypress!");
    cy.wait(1000);
    // Click the send button
    cy.get("button").contains("Send").click();
    cy.wait(1000);
    // Verify that the message is displayed

    cy.get("message").should("be.visible");

    // Add more assertions as needed based on your application behavior
  });
});
