const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const _ = require('underscore')
const userAll = (req, res) => {
    let since = req.query.since || 0
    since = Number(since)
    let limitPage = req.query.limitPage || 5
    limitPage = Number(limitPage)
    User.find({ state: true }, 'name email role state google avatar')
        .skip(since)
        .limit(limitPage)
        .exec( (err, users) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            User.countDocuments({ state: true }, (err, counting) => {
                res.json({
                    ok: true,
                    how: counting,
                    data: users
                }) 
            })
            
        })
}
const userOne = (req, res) =>{
    let id = req.params.id
    res.json({
        message: `es el usuario ${id}`
    })
}
const userCreate = (req, res) => {

    let { name, email, password, role } = req.body
    let data = new User({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        role
    })
    data.save((err, userDB) =>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        userDB.password = null
        res.json({
            ok: true,
            data: userDB
        })
    }) 
    
}

const userUpdated = (req, res) => {
    let id = req.params.id
    let body = _.pick(req.body, ['name', 'email', 'avatar', 'role', 'state'])
    User.findByIdAndUpdate(id, body, { new: true, runValidators: true}, (err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            data: userDB
        })
    }) 
}

const userDelete = (req, res) => {
    let id = req.params.id
    let setState = {
        state : false
    }
    User.findByIdAndUpdate(id, setState, {new: true}, (err, userRemove)=>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        if (!userRemove) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no existe'
                }
            })
        }
        res.json({
            ok: true,
            data: userRemove
        })
    })
  /*  User.findByIdAndRemove(id, (err, userRemove) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        if (!userRemove) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no existe'
                }
            })
        }
        res.json({
            ok: true,
            data: userRemove
        })
    })*/
}

module.exports = {
    userAll,
    userOne,
    userCreate,
    userUpdated,
    userDelete
}