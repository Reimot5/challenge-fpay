require('dotenv').config()
const { env } = require('../config')
const app = require('express')()
const { json, urlencoded } = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const SERVER_NAME = env.server_name

// ROUTERS
const routerTest = require('../routes/routerTest.js')

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true,
  optionsSuccessStatus: 200
}

// MIDDLEWARES
app.use(compression())
app.use(helmet())
app.use(cors(corsOptions))
app.use(urlencoded({ extended: true }))
app.use(json())

// ROUTES
app.use('/test', routerTest)

app.get('/', async (req, res) => {
  res.send(`Servidor ${SERVER_NAME} corriendo correctamente hace ${process.uptime()} segundos.`)
})

module.exports = app
