var user = require('../model/User.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

function validator(req, res, next) {
    console.log(req.body.email);

    if (req.body.email === null) {
        res.send('user cannot be empty');
    }
    //registered or not
    user.user.findOne({
        where: { email: req.body.email }
    })
        .then(function (result) {
            if (result === null) {
                res.send('you have not registered');
            }
            else {
                req.passwordFromDB = result.dataValues.password
                req.id = result.dataValues.id;
                next();

            }
        })
}

function passWordCheck(req, res, next) {
    bcrypt.compare(req.body.password, req.passwordFromDB)
        .then(function (isMatch) {
            // console.log(req);
            if (!isMatch) {
                let err = new Error('Password incorrect')
                err.status = 402;
                return next(err);
            }
            else {
                next();
            }

        })

        .catch(function (err) {
            next({ status: 500, message: 'err' })
        })
    // next({})
    // req.passwordFromDB
}
function jwtTokenGen(req, res) {
    
    console.log(req.id)
    var payload = {   
        id: req.id
    }

    jwt.sign(payload, 'Rohan', function (err, resultToken) {
        console.log(err);
        console.log(resultToken);
        res.json({
            status: 200,
            token: resultToken
        });
    });

}

function verifyToken(req, res, next) {

    if (req.headers.authorization === null) {
        res.json({ status: 401, message: 'unauthorized' })
    }
    console.log(req.headers.authorization);

    //slice the Bearer and space part out

    var token = req.headers.authorization.slice(7, req.headers.authorization.length)
    jwt.verify(token, 'Rohan', function (err, result) {

        console.log(err);
        console.log(result);
        req.id = result.id;
        //check result then next to another middleware

        next()

    })
}

function verifyAdmin(req, res, next){
    user.user.findOne({
        where:{
            id :req.id
        }
    }).then(function(result){
        console.log(result.admin)
        if(result.admin === 1){
         
            
        
            next();
        }
        else{
            res.json({
                status: "403",
                message: "You are not an admin."
            })
        }
    })
}


module.exports = {
    jwtTokenGen,
    validator,
    passWordCheck,
    verifyToken,
    verifyAdmin
}

