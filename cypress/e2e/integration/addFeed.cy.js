describe("Cattle API", () => {
  it("should add a new cattle record", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/feeds/add",
      body: {
        feedName: "Uree",
        dm: 65,
        calibration: 2,
        deviceID: "0DM",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Feed added successfully");
    });
  });
});
