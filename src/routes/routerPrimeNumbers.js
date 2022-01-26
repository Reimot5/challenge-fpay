const router = require('express').Router()
const { getPrimeNumbers } = require('../controllers/ctrlPrimeNumbers')

router.get('/:number', async (req, res) => {
  const enteredNumber = req.params.number
  res.send(getPrimeNumbers(enteredNumber))
})

module.exports = router
