// cypress/integration/parameter.spec.js

describe("Parameters API", () => {
  it("should add a new parameter", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/parameters/add",
      body: {
        cattleID: "02",
        cattleName: "Bib",
        feedLimit: 30,
        startTime: "2024-07-12",
        endTime: "2024-07-13",
        date: "2024-07-12",
        feedName: "Gross",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Parameter added successfully");
      expect(response.body.parameter).to.have.property("cattleID", "02");
      expect(response.body.parameter).to.have.property("cattleName", "Bib");
      expect(response.body.parameter).to.have.property("feedLimit", 30);
      expect(response.body.parameter).to.have.property(
        "startTime",
        "2024-07-12T00:00:00.000Z"
      );
      expect(response.body.parameter).to.have.property(
        "endTime",
        "2024-07-13T00:00:00.000Z"
      );
      expect(response.body.parameter).to.have.property(
        "date",
        "2024-07-12T00:00:00.000Z"
      );
      expect(response.body.parameter).to.have.property("feedName", "Gross");
    });
  });

  it("should retrieve all parameters", () => {
    cy.request("GET", "http://localhost:3000/parameters/get").then(
      (response) => {
        // Check that the response status is 200
        expect(response.status).to.eq(200);

        // Check that the response body is an array
        expect(response.body).to.be.an("array");
      }
    );
  });

  it("should retrieve specific columns of all parameters", () => {
    cy.request("GET", "http://localhost:3000/parameters/getparamters").then(
      (response) => {
        // Check that the response status is 200
        expect(response.status).to.eq(200);

        // Check that the response body is an array
        expect(response.body).to.be.an("array");

        // Check that each parameter has the expected properties
        response.body.forEach((param) => {
          expect(param).to.have.all.keys(
            "id",
            "cattleID",
            "cattleName",
            "feedLimit",
            "startTime",
            "endTime",
            "feedName"
          );
        });
      }
    );
  });
});
