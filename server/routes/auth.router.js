const express = require('express')
const authController = require('../Controllers/auth.controller')

const router = express.Router()

router.post('/signin',  authController.signIn) //login
router.post('/google', authController.google)

module.exports = router