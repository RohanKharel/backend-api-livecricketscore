var playerpfrofile = require('../model/Playerprofile.js');

function addPlayerprofile(req, res, next){
    console.log(req.body.run);
    playerpfrofile.playerpfrofile.create({
        name:req.body.name,
        country:req.body.country,
        odirun:req.body.odirun,
        t20run:req.body.t20run,
        testrun:req.body.testrun,
        Wickets:req.body.Wickets

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


function deletePlayerprofile(req, res, next){

    console.log(req.params.id)
    if(req.params.id === null){
        res.status(500);
        res.json({status:500, message: 'Required ID is not provided'})
    }

    else{
        playerpfrofile.playerpfrofile.destroy({
            where: {
                id: req.params.id
            }
        })

        .then(function(result){
            console.log(result+'')
            if(result === 0){
                res.status(400);
                res.json({status:400, message:'playerprofile not found'})
            }

            else{
            }   
                console.log(result);
                res.status(200);
                res.json({status:200, message:'playerprofile has been deleted successfully'})
            
        })

        .catch(function(err){
            next(err);
        })
    }
}

function updatePlayerprofile(req, res, next){

    playerpfrofile.playerpfrofile.update({
        name:req.body.name,
        odirun: req.body.odirun,
        t20run: req.body.t20run,
        testrun: req.body.testrun,
        wickets: req.body.wickets


    }, {
        where: {
            id: req.params.id
        }
    })

    .then(function(result){
        if(result === 1){
            res.json({status:404, message:'playerprofile not found for updating'})

        }
        else{
            res.json({status:200, message:'playerprofile was successfully updated'})
        }
    })

    .catch(function(err){
        res.json({status:500, message:'There was an error updating playerprofile!'})
    })

}

function searchPlayerprofile(req, res, next){

    console.log(req.params.id)
    if(req.params.name === null){
        res.status(500);
        res.json({status:500, message: 'Required ID is not provided'})
    }

    
        playerpfrofile.playerpfrofile.findOne({
            where: {
                name:req.params.name
            }
        }).then(function(result){
            if(result === 0){
                result.json({message:"no data"})
            }
            else{
                console.log(result)
            res.send(result);
            
            }
            
        })

        .catch(function(err){
            next(err);
        })
    }


function getPlayerprofile(req, res, next){
    playerpfrofile.playerpfrofile.findAll()
    .then(function(result){
        if(result === null){
            res.json({status:404, message:'playerprofile  not found'})

        }
        else{
            res.json(result)
        }
    })

    .catch(function(err){
        res.json({status:500, message:'There was an error searching playerprofile!'})
    })
}


module.exports ={

    addPlayerprofile,
    deletePlayerprofile,
    updatePlayerprofile,
    searchPlayerprofile,
    getPlayerprofile
   
}
