const express = require('express')

const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Router
app.get('/', (req, res) => {
    res.json('Pagina de inicio')
})

app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${port}`)
})