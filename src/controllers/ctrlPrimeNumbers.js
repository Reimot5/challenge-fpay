module.exports = (() => {
  return {
    getPrimeNumbers(enteredNumber) {
      const lowerNumber = 2
      const result = []
      // looping from lowerNumber to enteredNumber
      for (let i = lowerNumber; i <= enteredNumber; i++) {
        let flag = 0

        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
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
      return result
    },
  }
})()
