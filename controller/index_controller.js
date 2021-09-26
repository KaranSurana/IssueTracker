const db = require('../config/mongoose')

const repository = require('../models/repository');

module.exports.home = function(req,res){


    repository.find({},function(err,repo){
        if(err){
            console.log("Error In Fetching Repositories");
            return;
        }
        res.render('index',{
            arr:repo
        });
    })
}

module.exports.newrepo = function(req,res){
    res.render('newrepo.ejs')
}

module.exports.repo = function(req,res){
    console.log(req.query.oid);
    repository.find({_id:req.query.oid},function(err,repo){
        if(err){
            console.log("Error In Fetching Repositories");
            return;
        }
        res.render('repository',{
            arr:repo
        });
    })
    
}