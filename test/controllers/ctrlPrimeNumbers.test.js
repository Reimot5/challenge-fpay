const { getPrimeNumbers } = require('../../src/controllers/ctrlPrimeNumbers');


//Add Mocks
describe('Function for findings Prime Numbers', () => {
  it('should return all prime numbers between a number and 2', () => {
    expect(getPrimeNumbers(5)).toEqual([2,3,5])
  });
});
