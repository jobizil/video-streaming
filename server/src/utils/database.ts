import mongoose from 'mongoose'
import logger from './logger'

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/youtube-clone'

export async function connectDatabase() {
  try {
    await mongoose.connect(CONNECTION_STRING)
    logger.info('Connected to database')
  } catch (error) {
    logger.error(error, 'Database connection failed')
    process.exit(1)
  }
}

export async function disconnectDatabase() {
  try {
    await mongoose.disconnect()
    logger.info('Disconnected from database')
  } catch (error) {
    logger.error(error, 'Database disconnection failed')
    process.exit(1)
  }
}
