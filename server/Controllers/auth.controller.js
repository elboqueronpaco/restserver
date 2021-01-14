const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const signIn = (req, res) => {
    let { email, password } = req.body
    User.findOne({ email }, (err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: '(Usuario) o contraseña incorrectos'
                }
            })
        }
        if (!bcrypt.compareSync(password, userDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrectos'
                }
            })
        }
        let token = jwt.sign({
            data: userDB
        }, process.env.SEED,
        {expiresIn: process.env.EXPIRES_IN })
        res.json({
            ok: true,
            data: userDB,
            token
        })
    })

}

module.exports= {
    signIn
}