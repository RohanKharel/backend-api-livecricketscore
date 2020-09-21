const express = require('express');
var morgan = require('morgan');
const cors = require('cors')

var bodyParser = require('body-parser');

var UserController = require('./Controller/UserController');
var AuthController = require('./Controller/AuthController');
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));

//api for userController
app.post('/registration',UserController.hashGen, UserController.registerUser);
app.post('/login', AuthController.validator, AuthController.passWordCheck, AuthController.jwtTokenGen);
app.post('/loginvalidation', AuthController.verifyToken, AuthController.verifyAdmin)
app.put('/userUpdate', AuthController.verifyToken, UserController.userUpdate);
app.get('/getUser', AuthController.verifyToken, UserController.getUser);

app.listen(3011);

module.exports = app;
