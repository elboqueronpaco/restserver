const mongoose = require('mongoose')
require('../config/config')

mongoose.connect(process.env.URLDB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false},(err, res) => {
    if (err) throw err
    console.log('base de datos ONLINE')
})