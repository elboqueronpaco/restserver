const { verify } = require("jsonwebtoken")

const checkToken = (req, res, next) => {
    let token = req.get('token')
    verify(token,process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }
        req.data = decoded.data
        next()
    })
}

const checkRoleAdmin = (req, res, next) => {
    let data = req.data
    if (data.role === 'ADMIN_ROLE') {
        next()
    }else {
        return res.json({
            ok:false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }
}

module.exports ={
    checkToken,
    checkRoleAdmin
}