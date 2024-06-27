// cypress/integration/parameter.spec.js

describe("Parameter API", () => {
  const parameter = {
    cattleID: "123",
    cattleName: "Bessie",
    feedLimit: 300,
    startTime: "2024-05-26 10:15:00",
    endTime: "2024-05-27 11:30:00",
    date: "2024-05-26 00:00:00.000 +00:00",
    feedName: "Grass",
  };

  it("should add a new parameter", () => {
    cy.request("POST", "http://localhost:3000/parameters/add", parameter).then(
      (response) => {
        // Check that the response status is 201
        expect(response.status).to.eq(201);

        // Check that the response body contains the new parameter
        expect(response.body.message).to.eq("Parameter added successfully");
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
