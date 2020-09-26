const express = require('express');
var morgan = require('morgan');
const cors = require('cors')

var bodyParser = require('body-parser');

var UserController = require('./Controller/UserController');
var AuthController = require('./Controller/AuthController');
var ScoreController = require('./Controller/ScoreController');
var ImageController = require('./Controller/ImageController');
var CategoryController = require('./Controller/CategoryController');
var FeedbackController = require('./Controller/FeedbackController');
var UpcomingmatchesController = require('./Controller/UpcomingmatchesController');
var PlayerprofileController = require('./Controller/PlayerprofileController');
const multer = require('multer');
var upload = multer();

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(morgan('tiny'));

app.use(bodyParser.json());
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
app.get('/getScore', ScoreController.getScore);


//api for CategoryController
app.get('/getScoreByCategory/:id', ScoreController.getScoreByCategory);
app.get('/getCategory', CategoryController.getCategory);
app.post('/addCategory', CategoryController.addCategory);

//api for FeedbackController
app.post('/addFeedback', AuthController.verifyToken, FeedbackController.addFeedback);

//api for UpcomingmatchesController
app.post('/addUpcomingmatches', AuthController.verifyToken, AuthController.verifyAdmin, UpcomingmatchesController.addUpcomingmatches);
app.delete('/deleteUpcomingmatches/:id', UpcomingmatchesController.deleteUpcomingmatches);
app.put('/updateUpcomingmatches/:id', UpcomingmatchesController.updateUpcomingmatches);
app.get('/getUpcomingmatches', UpcomingmatchesController.getUpcomingmatches);

//api for PlayerprofileController
app.post('/addPlayerprofile', AuthController.verifyToken, AuthController.verifyAdmin, PlayerprofileController.addPlayerprofile);
app.delete('/deletePlayerprofile/:id', PlayerprofileController.deletePlayerprofile);
app.put('/updatePlayerprofile/:id', PlayerprofileController.updatePlayerprofile);
app.get('/searchPlayerprofile/:name', PlayerprofileController.searchPlayerprofile);
app.get('/getPlayerprofile', PlayerprofileController.getPlayerprofile);


app.listen(3011);

module.exports = app;
