const router = require('express').Router()
const { getHealthCheck } = require('../controllers/healthCheck.controller')

router.get('/', async (req, res) => {
  res.send(getHealthCheck())
})

module.exports = router
