import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/users/user.route'
import { logger } from './share/logger'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
// import ApiError from './errors/ApiError'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

logger.info(app.get('env'))

app.use('/api/v1/users', UserRoutes)

// Testing
app.get('/', async () => {
  // Promise.reject((new Error('Unhandled Promise rejection')))
})

// global error handler
app.use(globalErrorHandler)

export default app
