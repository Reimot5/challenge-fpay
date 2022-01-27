require('dotenv').config()
const { env } = require('./config')
const app = require('./server/app')

app.listen(env.port, async () => {
  console.log(`Server '${env.server_name}' initialized and running on http://${env.host}:${env.port}/.`)
})
