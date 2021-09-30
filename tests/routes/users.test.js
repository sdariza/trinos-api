const request = require('supertest');
const app = require('../../app');

describe('GET users', () => {
  it("Test the users' path", async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
  });

  it("Test users' content", async () => {
    const response = await request(app).get('/users');
    expect(response.body).not.toBeUndefined();
    expect(response.body.data).not.toBeNull();
  });
});
