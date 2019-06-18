const jwt = require('jsonwebtoken');


//VERIFICA TOKEN   

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: err
            });
        }
        req.usuario = decoded.usuario;
        next();
    });


}

//Verifica adimin role

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario noes administrados'
            }
        })
    }
}


module.exports = {
    verificaToken,
    verificaAdmin_Role
}