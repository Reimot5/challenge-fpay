const supertest = require("supertest")
const app = require("../../src/server/app")

const api = supertest(app)

describe('GET /', () => {
  it('should return code 200, content-type "text/html" and welcome string message', async () => {
    const response = await api
      .get('/health')
      .expect(200)
      .expect('Content-Type', /text\/html/)
    expect(typeof response.text).toBe('string')
  })
});