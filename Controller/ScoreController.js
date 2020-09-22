var product = require('../model/Score.js');

function addScore(req, res, next){
    console.log(req.body);
    score.score.create({
        run:req.body.run,
        type:req.body.type,
        result:req.body.result,
        Image:req.body.image,
     

    })

    .then(function(result){
        console.log(result);
        // res.send("product added successfully");
        res.json({
                status: 200
            })
    })

    .catch(function(err){
        next(err);
    })
}


function deleteScore(req, res, next){

    console.log(req.params.id)
    if(req.params.id === null){
        res.status(500);
        res.json({status:500, message: 'Required ID is not provided'})
    }

    else{
        score.score.destroy({
            where: {
                id: req.params.id
            }
        })

        .then(function(result){
            console.log(result+'')
            if(result === 0){
                res.status(400);
                res.json({status:400, message:'Score not found'})
            }

            else{
            }   
                console.log(result);
                res.status(200);
                res.json({status:200, message:'Score has been deleted successfully'})
            
        })

        .catch(function(err){
            next(err);
        })
    }
}

function updateScore(req, res, next){

    score.score.update({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price

    }, {
        where: {
            id: req.params.id
        }
    })

    .then(function(result){
        if(result === 1){
            res.json({status:404, message:'Score  found for updating'})

        }
        else{
            res.json({status:200, message:'Score was successfully updated'})
        }
    })

    .catch(function(err){
        res.json({status:500, message:'There was an error updating Score!'})
    })

}




module.exports ={
    addProduct,
    deleteProduct,
    updateProduct
}