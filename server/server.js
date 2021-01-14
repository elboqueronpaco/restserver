require('./config/config')
require('./database')
const express = require('express')
const router = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Router
app.get('/', (req, res) => {
    res.json('Pagina de inicio')
})

app.use(router)
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en http://localhost:${process.env.PORT}`)
})