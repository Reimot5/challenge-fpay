const supertest = require("supertest")
const app = require("../../src/server/app")

const api = supertest(app)

describe('GET /health', () => {
  it('should return code 200 and content-type "text/html"', async () => {
    await api
      .get('/health')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })

  it('should return code 200 and string with uptime', async () => {
    const response = await api.get('/health').expect(200)
    expect(typeof response.text).toBe('string')
  })
});