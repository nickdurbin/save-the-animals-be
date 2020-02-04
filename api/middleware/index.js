const helmet = require('helmet')
const xss = require('xss-cleans')
const morgan = require('morgan')
const cors = require('cors')

module.exports = server => {
  server.use(morgan("short"))
  server.use(helmet())
  server.use(xss())
  server.use(cors())
}