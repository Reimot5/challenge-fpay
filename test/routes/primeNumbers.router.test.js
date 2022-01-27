const supertest = require("supertest")
const app = require("../../src/server/app")

const api = supertest(app)

describe('GET /prime-numbers/:number', () => {
  it('should return code 200 and content-type "text/html"', async () => {
    await api
      .get('/prime-numbers/2')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })

  it('should return prime numbers before 7', async () => {
    const response = await api.get('/prime-numbers/7').expect(200)
    expect(response.text).toEqual("7, 5, 3, 2")
  })

  test('with number less than 2 should return error msg', async () => {
    const response = await api.get('/prime-numbers/1').expect(400)
    expect(response.text).toEqual("Must be an integer number and bigger or equal to 2.")
  })

  test('with letters should return error msg', async () => {
    const response = await api.get('/prime-numbers/a').expect(400)
    expect(response.text).toEqual("Must be an integer number and bigger or equal to 2.")
  })
});