module.exports = (() => {
  return {
    getHealthCheck() {
      return `Server running properly. Uptime ${process.uptime().toFixed(2)} seconds.`
    }
  }
})()