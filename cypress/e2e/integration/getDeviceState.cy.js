// cypress/integration/deviceState.spec.js

describe("Device State API", () => {
  it("should fetch the correct device states", () => {
    // Sending a GET request to the endpoint
    cy.request("GET", "http://localhost:3000/devices/getdevicesstate").then(
      (response) => {
        // Check that the response status is 200
        expect(response.status).to.eq(200);

        // Check that the response body has the expected structure
        expect(response.body).to.have.property("on");
        expect(response.body).to.have.property("off");

        // Check that the values of 'on' and 'off' are numbers
        expect(response.body.on).to.be.a("string");
        expect(response.body.off).to.be.a("string");
      }
    );
  });
});
