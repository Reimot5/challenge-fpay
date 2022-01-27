const { getPrimeNumbers } = require('../../src/controllers/primeNumbers.controller');

//Add Mocks
describe('Function for findings Prime Numbers', () => {
  it('should return all prime numbers between a number and 2', () => {
    expect(getPrimeNumbers(5)).toEqual("5, 3, 2")
  });
});
