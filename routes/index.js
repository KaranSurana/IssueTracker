var express = require('express');

var router = express.Router();

const db = require('../config/mongoose')

const repository = require('../models/repository');

router.use(express.urlencoded());

router.use(express.static('assets/images'));

router.use(express.static('assets/css'));

router.use(express.static('views'));

const homePage = require('../controller/index_controller');

router.get('/',homePage.home);

router.get('/new',homePage.newrepo);

router.post('/newrepo',function(req,res){
    console.log(req.body)
    repository.create({
        name: req.body.reponame,
        author: req.body.authorname,
        description:req.body.description

    },function(err,newTask){
        if(err){
            console.log(err);
            console.log("Error in creating a contact");
            return;
        }

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
    });
});

module.exports = router;