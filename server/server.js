require('./config/config')
require('./database')
const express = require('express')
const path = require('path')
const router = require('./routes')

const app = express()
const publicPath = path.resolve(__dirname, '../public')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicPath))

//Router
app.get('/', (req, res) => {
    res.json('Pagina de inicio')
})

app.use(router)
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en http://localhost:${process.env.PORT}`)
})