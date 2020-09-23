var feedback = require('../model/Feedback.js');

function addFeedback(req, res, next){
    console.log(req.body);
    feedback.feedback.create({
        comment:req.body.comment,
        userId:req.id
       
    })

    .then(function(result){
        console.log(result);
    })

    .catch(function(err){
        next(err);
    })
}

module.exports ={addFeedback}