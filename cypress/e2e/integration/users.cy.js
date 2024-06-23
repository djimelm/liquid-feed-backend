describe("Users API", () => {
  it("should login successfully with valid credentials", () => {
    cy.request("POST", "/users/login", {
      username: "testuser",
      password: "password123",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message", "Login successful");
    });
  });

  it("should fail login with invalid credentials", () => {
    cy.request({
      method: "POST",
      url: "/users/login",
      failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
      body: {
        username: "wronguser",
        password: "wrongpassword",
      },
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property(
        "message",
        "Invalid username or password"
      );
    });
  });
});
