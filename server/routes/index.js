const express = require('express')
const userRouter = require('./user.router')
const authRouter = require('./auth.router')

const app = express()

app.use('/user', userRouter) // ruta de usuario
app.use('/auth', authRouter) // rutas de autetificacion

module.exports = app