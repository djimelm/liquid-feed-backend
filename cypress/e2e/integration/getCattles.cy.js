describe("Cattle API", () => {
  it("should retrieve all cattles", () => {
    cy.request("GET", "http://localhost:3000/cattles/get").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });
});
