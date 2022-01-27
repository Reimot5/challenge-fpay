const router = require('express').Router()
const { getHealthCheck } = require('../controllers/healthCheck.controller')

router.get('/', async (req, res) => {
  res.json(getHealthCheck())
})

module.exports = router
