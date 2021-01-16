const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const { verifyGoogleToken } = require('../utils/google')
const { messageError, messageErrorWithMessage } = require('../utils/messageError')
const { getToken } = require('../utils/token')

const signIn = (req, res) => {
    let { email, password } = req.body
    User.findOne({ email }, (err, userDB) => {
        if (err) messageError(err, res, 400)
            
        if (!bcrypt.compareSync(password, userDB.password)) {
            return messageErrorWithMessage(err, res, 400, 'Usuario o contraseña incorrectos')
        }
       getToken(userDB, res)
    })

}

const google = async (req, res) => {
    const token = req.body.idtoken
    const userGoogle = await verifyGoogleToken(token)
        .catch(err => {
            messageError(err, res, 403)
        })
    User.findOne({email: userGoogle.email}, (err, userDB) =>{
        if (err) {
            return messageError(err, res, 500)
        }
        if(userDB) {
            if( userDB.google === false) {
                return messageErrorWithMessage(err, res, 400, 'Debe de usar su autenticación normal')
            } else {
                getToken(userDB, res)
            }
        } else {
            const { name, email, google, avatar} = userGoogle
            const newUser = new User()
            newUser.name= name
            newUser.email = email
            newUser.password= ':)'
            newUser.avatar = avatar
            newUser.google = google
            newUser.save((err, userDB) => {
                if (err) {
                    return messageError(err, res, 500)
                }
                getToken(userDB, res)
            })
        }
    })
}

module.exports= {
    signIn,
    google
}