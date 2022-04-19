import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
dotenv.config()

import logger from './utils/logger'
import { connectDatabase, disconnectDatabase } from './utils/database'
import { CORS_ORIGIN } from './constants'
import userRoute from './modules/user/user.routes'
import authRoute from './modules/auth/auth.route'
import deserializeUser from './middlewares/deserializeUser'

const PORT = Number(process.env.PORT) || 3000
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
)
app.use(helmet())
app.use(deserializeUser)

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)

const server = app.listen(PORT, async () => {
  await connectDatabase()
  logger.info(`Server listening on port ${PORT}`)
})
const signals = ['SIGTERM', 'SIGINT']

function gracefulShutdown(signal: string) {
  process.on(signal, async () => {
    server.close()
    await disconnectDatabase()
    logger.info(`Received ${signal}. Exiting...`)
    process.exit(0)
  })
}
for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i])
}
