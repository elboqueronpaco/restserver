const express = require('express')
const userController = require('../Controllers/user.controller')

const routes = express.Router()

routes.get('/', userController.userAll) // AllUser
routes.get('/:id', userController.userOne)//One user
routes.post('/', userController.userCreate)//new user
routes.put('/:id', userController.userUpdated)
routes.delete('/:id', userController.userDelete)

module.exports = routes