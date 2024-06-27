// cypress/integration/parameter.spec.js

describe("Parameter API", () => {
  const parameter = {
    cattleID: "123",
    cattleName: "Bessie",
    feedLimit: 300,
    startTime: "2024-06-01T10:00:00Z",
    endTime: "2024-06-01T12:00:00Z",
    date: "2024-06-01",
    feedName: "Grass",
  };

  it("should add a new parameter", () => {
    cy.request("POST", "http://localhost:3000/parameters/add", parameter).then(
      (response) => {
        // Check that the response status is 201
        expect(response.status).to.eq(201);

        // Check that the response body contains the new parameter
        expect(response.body).to.have.property(
          "message",
          "Pareamter added successfully"
        );
        expect(response.body.parameter).to.include(parameter);
      }
    );
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
