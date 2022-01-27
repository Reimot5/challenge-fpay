const supertest = require("supertest")
const app = require("../../src/server/app")

const api = supertest(app)

describe('GET /health', () => {
  it('should return code 200 and content-type "application/json"', async () => {
    await api
      .get('/health')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  it('should return code 200 and string with uptime', async () => {
    const response = await api.get('/health').expect(200)
    expect(typeof response.body).toBe('string')
  })
});