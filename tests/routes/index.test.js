const request = require('supertest');
const app = require('../../app');

describe('GET root', () => {
  it('Test the root path', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('Test root content', async () => {
    const response = await request(app).get('/');
    expect(response.body).not.toBeUndefined();
    expect(response.body.data).not.toBeNull();
  });
});
