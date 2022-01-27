module.exports = (() => {
  return {
    getPrimeNumbers(userEnteredNumber) {
      const lowerPrimeNumber = 2
      const result = []

      // looping from lowerPrimeNumber to userEnteredNumber
      for (let i = lowerPrimeNumber; i <= userEnteredNumber; i++) {
        let flag = 0
        // looping through 2 to user input number
        for (let j = lowerPrimeNumber; j < i; j++) {
          if (i % j === 0) {
            flag = 1
            break
          }
        }

        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag === 0) {
          result.push(i)
        }
      }
      return result.reverse().join(", ")
    },
  }
})()