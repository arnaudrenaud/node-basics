describe("Web app", () => {
  describe("/", () => {
    it("renders last post content", () => {
      cy.visit("/");
      cy.get("body").invoke("text").should("equal", "Mon premier post.");
    });
  });
});
