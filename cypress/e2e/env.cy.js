Cypress.env('apiUrl', 'https://api.example.com');
Cypress.env('username', 'testUser');
Cypress.env('password', 'testPassword');

describe('Dynamic Environment Variables Test', () => {
  it.only('should use dynamically set environment variables', () => {
    const apiUrl = Cypress.env('apiUrl');
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    cy.request({
      method: 'POST',
      url: `${apiUrl}/login`,
      body: {
        username: username,
        password: password
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});