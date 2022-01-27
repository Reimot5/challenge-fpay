require('dotenv').config()
const { env } = require('../config')
const app = require('express')()
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

// ROUTERS
const routerHealthCheck = require('../routes/healthCheck.router.js')
const routerPrimeNumbers = require('../routes/primeNumbers.router.js')

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true,
  optionsSuccessStatus: 200
}

// MIDDLEWARES
app.use(morgan('dev'))
app.use(compression())
app.use(helmet())
app.use(cors(corsOptions))

// ROUTES
app.use('/health', routerHealthCheck)
app.use('/prime-numbers', routerPrimeNumbers)

app.get('/', async (req, res) => {
  res.send(`Welcome to server ${env.server_name}.`)
})

module.exports = app
