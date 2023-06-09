/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorlogger } from './share/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorlogger.error(error)
  process.exit(1)
})

let server: Server

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database is connected successfully`)

    server = app.listen(config.port, () => {
      logger.info(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error(`failed to connect database`, error)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

boostrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
