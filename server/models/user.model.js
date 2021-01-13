const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
let roleValidator = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    messege: '{VALUE} no es un rol válido'
}

let Schema = mongoose.Schema

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'El contraseña es necesario']
    },
    avatar:  {
        type: String
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: roleValidator
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }


},
{
    versionKey: false,
    timestamps: true
}
)
userSchema.methods.toJSON = function () {
    const user = this
    let userObject = user.toObject()
    delete userObject.password
    return userObject
}
userSchema.plugin(uniqueValidator, {message: '{PATH} debe ser unico'})

module.exports = mongoose.model('User', userSchema)