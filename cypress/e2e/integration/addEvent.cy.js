describe("Event API", () => {
  it("should add a new event record", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/events/add",
      body: {
        cattleID: "1",
        cattleName: "Lil",
        deviceLocation: "Stillwater",
        lbs: 99.85,
        startTime: "2024-05-26 10:15:00", // Correct format
        endTime: "2024-05-27 11:30:00", // Correct format
        wheelDistance: 99,
        date: "2024-05-26 00:00:00.000 +00:00", // Correct format
        deviceID: "02",
        deviceName: "Zoom",
        feedName: "M3n",
        deviceStatus: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Event added successfully");
    });
  });
});
