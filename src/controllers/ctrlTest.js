module.exports = (() => {
  return {
    getTest() {
      return new Promise((resolve, reject) => {
        try {
          resolve("okey")
        } catch (error) {
          reject(error)
        }
      })
    }
  }
})()