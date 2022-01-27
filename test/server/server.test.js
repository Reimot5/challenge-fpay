const supertest = require("supertest")
const app = require("../../src/server/app")

const api = supertest(app)

describe('GET /', () => {
  it('should return code 200, content-type "application/json" and welcome string message', async () => {
    const response = await api
      .get('/health')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(typeof response.body).toBe('string')
  })
});