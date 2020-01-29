const express = require('express')
const server = express()
const middleware = require('./middleware')
const routes = require('./routes')

server.use(express.json())
middleware(server)
routes(server)

server.get("/", (req, res, next) => {
  res.send("<h2>I am here to save the animals!</h2>")
})

server.use((req, res, next) => {
  res.status(404).json({ message: "The path you tried to reach does not exist. please try your query again!"})
})

server.use((err, req, res, next) => {
  res.status(500).json({ message: "There is an issue on our end. Please try your request again later."})
})

module.exports = server;