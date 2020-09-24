var upcomingmatches = require('../model/Upcomingmatches.js');

function addUpcomingmatches(req, res, next){
    console.log(req.body.run);
    upcomingmatches.upcomingmatches.create({
        country1:req.body.country1,
        country2:req.body.country2,
        matchdetails:req.body.type,
        startdetail:req.body.result,
        Image1:req.body.Image1,
        Image2:req.body.Image2

    })

    .then(function(result){
        console.log(result);
        res.json({
                status: 200
            })
    })

    .catch(function(err){
        next(err);
    })
}


function deleteUpcomingmatches(req, res, next){

    console.log(req.params.id)
    if(req.params.id === null){
        res.status(500);
        res.json({status:500, message: 'Required ID is not provided'})
    }

    else{
        upcomingmatches.upcomingmatches.destroy({
            where: {
                id: req.params.id
            }
        })

        .then(function(result){
            console.log(result+'')
            if(result === 0){
                res.status(400);
                res.json({status:400, message:'upcomingmatches not found'})
            }

            else{
            }   
                console.log(result);
                res.status(200);
                res.json({status:200, message:'upcomingmatches has been deleted successfully'})
            
        })

        .catch(function(err){
            next(err);
        })
    }
}

function updateUpcomingmatches(req, res, next){

    upcomingmatches.upcomingmatches.update({
        matchdetails: req.body.matchdetails,
        startdetail: req.body.startdetail

    }, {
        where: {
            id: req.params.id
        }
    })

    .then(function(result){
        if(result === 1){
            res.json({status:404, message:'upcomingmatches not found for updating'})

        }
        else{
            res.json({status:200, message:'Upcomingmatches was successfully updated'})
        }
    })

    .catch(function(err){
        res.json({status:500, message:'There was an error updating Upcomingmatches!'})
    })

}

function getUpcomingmatches(req, res, next){
    upcomingmatches.upcomingmatches.findAll()
    .then(function(result){
        if(result === null){
            res.json({status:404, message:'upcomingmatches  not found'})

        }
        else{
            res.json(result)
        }
    })

    .catch(function(err){
        res.json({status:500, message:'There was an error searching upcomingmatches!'})
    })
}


module.exports ={
    
    addUpcomingmatches,
    deleteUpcomingmatches,
    updateUpcomingmatches,
    getUpcomingmatches
   
}
