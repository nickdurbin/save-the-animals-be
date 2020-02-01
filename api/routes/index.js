const authRouter = require('./auth/auth-router')
const campaignRouter = require('./campaigns/campaign-router')
const organizationRouter = require('./organizations/organization-router')
const supporterRouter = require('./supporters/supporter-router')
const userRouter = require('./users/user-router')

module.exports = server => {
  server.use("/api/auth", authRouter)
  server.use("/api/campaigns", campaignRouter)
  server.use("/api/organizations", organizationRouter)
  server.use("/api/supporters", supporterRouter)
  server.use("/api/users", userRouter)
}