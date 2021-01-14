const express = require('express')
const userController = require('../Controllers/user.controller')
const { checkToken, checkRoleAdmin } = require('../middlewares/authentication')
const routes = express.Router()

routes.get('/', checkToken, userController.userAll) // AllUser
routes.get('/:id', userController.userOne)//One user
routes.post('/', [checkToken, checkRoleAdmin], userController.userCreate)//new user
routes.put('/:id', [checkToken, checkRoleAdmin], userController.userUpdated)
routes.delete('/:id',[checkToken, checkRoleAdmin], userController.userDelete)

module.exports = routes