const express = require('express')
const authController = require('../Controllers/auth.controller')
const router = express.Router()

router.post('/signin', authController.signIn) //login

module.exports = router