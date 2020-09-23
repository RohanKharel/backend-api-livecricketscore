const express = require('express');
var morgan = require('morgan');
const cors = require('cors')

var bodyParser = require('body-parser');

var UserController = require('./Controller/UserController');
var AuthController = require('./Controller/AuthController');
var ScoreController = require('./Controller/ScoreController');
var ImageController = require('./Controller/ImageController');
var FeedbackController = require('./Controller/FeedbackController')
const app = express();
app.use(express.static(__dirname + "/public"));
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

//api for ScoreController
app.post('/addScore', AuthController.verifyToken, AuthController.verifyAdmin, ScoreController.addScore);
app.delete('/deleteScore/:id', ScoreController.deleteScore);
app.post('/imageUpload', ImageController.image, ImageController.imageFileName);
app.put('/updateScore/:id', ScoreController.updateScore);
app.post('/addFeedback', AuthController.verifyToken, FeedbackController.addFeedback);


app.listen(3011);

module.exports = app;
