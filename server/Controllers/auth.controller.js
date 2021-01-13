const bcrypt = require('bcrypt')
const User = require('../models/user.model')

const signIn = (req, res) => {
    res.json({
        message: 'singIN'
    })
}

module.exports= {
    signIn
}