describe("Event API", () => {
  it("should retrieve all events", () => {
    cy.request("GET", "http://localhost:3000/events/getevents").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
      }
    );
  });
});
