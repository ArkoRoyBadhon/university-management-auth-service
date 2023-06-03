import express from 'express'

import usersController from './users.controller'
const router = express.Router()

router.post('/created-user', usersController.createUser)

export default router