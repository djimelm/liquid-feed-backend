describe("Feed API", () => {
  it("should retrieve the last feed added and print the response", () => {
    cy.request("/feeds/getfeed").then((response) => {
      // Log the entire response
      cy.log(JSON.stringify(response));

      // Log specific parts of the response
      cy.log("Status:", response.status);
      cy.log("Body:", JSON.stringify(response.body));

      // Alternatively, you can use console.log for debugging in the browser's console
      console.log(response);

      // Assertions
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("feedName");
      expect(response.body).to.have.property("dm");
      expect(response.body).to.have.property("calibration");
      expect(response.body).to.have.property("deviceID");
    });
  });
});
