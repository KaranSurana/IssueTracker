const db = require('../config/mongoose')

const repository = require('../models/repository');

module.exports.home = function(req,res){


    repository.find({},function(err,repo){
        console.log(repo)
        if(err){
            console.log("Error In Fetching Repositories");
            return;
        }
        res.render('index',{
            arr:repo
        });
    })
}