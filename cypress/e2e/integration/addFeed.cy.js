describe("Cattle API", () => {
  it("should add a new cattle record", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/feeds/add",
      body: {
        feedName: "Inki",
        dm: 55,
        calibration: 10,
        deviceID: "02",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Feed added successfully");
    });
  });
});
