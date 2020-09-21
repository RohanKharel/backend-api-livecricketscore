var user = require('../model/User.js');

var bcrypt = require('bcrypt');

function hashGen(req,res, next){
    saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds)
    .then(function(hash){
        console.log(hash);
        req.userHash = hash;
        next();

    })

    .catch(function(err){
        next('err');
    })
}



function validation(req, res, next){
    user.user.findOne({
        where:{email:req.body.email}
    })

    .then(function(result){
        if(result === null){

            next();
        }

        else{
            
            
            res.send('You are already registered')
        }

    })

    .catch(function(err){
        next(err)
        
    })
}


function registerUser(req, res, next){

    console.log(req.body);
    user.user.create({
        fullname: req.body.fullname,
        email: req.body.email,  
        phone:req.body.phone,
        password:req.userHash,
        
    })
    .then(function(result){
        console.log(result);
        res.json({
            status: "200",
            token: ""
        });
    })
    
    .catch(function(err){
        next(err);
    
    })
}

function userUpdate(req, res, next) {
    user.user.update({
        fullname: req.body.fullname,
        phone: req.body.phone
       
    }, {
        where: {
            id: req.id
        }
    })
        .then(function (result) {
            if (result !== null) {
                res.json({ status: 200, message: 'User update successfull' })
            } 
        })
        .catch(function (err) {
            console.log(err)
        })
}

function getUser(req, res, next) {
    user.user.findOne({
        where: {
            id: req.id
        }
    })
        .then(function (result) {
            if (result === null) {
                res.json({ status: 404, message: 'User not found' })
            } else {
                res.json(result)
            }
        })
        .catch(function (err) {
            res.json({ status: 500, message: 'Error while displaying user!' })
        })
}




module.exports = {
    registerUser,
    validation,
    hashGen,
    userUpdate,
    getUser
    
}

