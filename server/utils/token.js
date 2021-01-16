const jwt = require('jsonwebtoken')
const getToken = (userDB, res) => {
    const token = jwt.sign({
        data: userDB
    },  process.env.SEED, {expiresIn: process.env.EXPIRES_IN})
    res.json({
        ok: true,
        data: userDB,
        token
    })
}

module.exports = {
    getToken
}