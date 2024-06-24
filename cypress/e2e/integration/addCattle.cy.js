describe("Cattle API", () => {
  it("should add a new cattle record", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/cattles/add",
      body: {
        cattleID: "3",
        cattleName: "Bob",
        deviceLocation: "Stillwater",
        lbs: 99.85,
        startTime: "2024-05-26 10:15:00", // Correct format
        endTime: "2024-05-26 10:22:00", // Correct format
        wheelDistance: 150,
        date: "2024-05-26 00:00:00.000 +00:00", // Correct format
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cattle added successfully");
    });
  });
});
