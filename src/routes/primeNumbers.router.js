const router = require('express').Router()
const { getPrimeNumbers } = require('../controllers/primeNumbers.controller')
const { param, validationResult } = require('express-validator');

router.get('/:number',
  param("number").isInt({ min: 2 }).withMessage('Must be an integer number and bigger or equal to 2.'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.errors[0].msg);
    }
    res.json(getPrimeNumbers(req.params.number))
  })

module.exports = router
