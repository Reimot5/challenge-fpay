const router = require('express').Router()
const { getTest } = require('../controllers/ctrlTest')

router.get('/', async (req, res) => {
  try {
    res.send(await getTest())
  } catch (error) {
    res.status(500).send('error')
    console.log(error)
  }
})

module.exports = router
