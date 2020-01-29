const authRouter = require('./auth/auth-router')
const userRouter = require('./users/user-router')

module.exports = server => {
  server.use("/api/auth", authRouter)
  server.use("/api/users", userRouter)
}