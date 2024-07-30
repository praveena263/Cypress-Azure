describe("Handle New Tab Opening", () => {
    /* 
      
    
    */
  it("should handle new tab opening", () => {
    cy.visit("https://www.grubhub.com/");
    cy.contains("h1", "Get food delivery and more").should("be.visible");

    cy.multiTab();
    cy.get(".c-button").first().click()
   // cy.multiTab2();
    cy.contains("h4", "Get good food on the go").should("be.visible");
  });
});
