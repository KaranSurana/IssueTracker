var express = require('express');

var router = express.Router();

const db = require('../config/mongoose')

const issue = require('../models/issues');

router.use(express.urlencoded());

router.use(express.static('assets/images'));

router.use(express.static('assets/css'));

router.use(express.static('views'));

const homePage = require('../controller/index_controller');

router.get('/',homePage.home);

router.get('/new',homePage.newrepo);

router.get('/repository',homePage.repo);

router.post('/newrepo',function(req,res){
    issue.create({
        issuename: req.body.issue,
        tag: req.body.tag,
        name: req.body.authorname

    },function(err,newTask){
        if(err){
            console.log(err);
            console.log("Error in creating a contact");
            return;
        }

        issue.find({},function(err,repo){
            if(err){
                console.log("Error In Fetching Issues");
                return;
            }
            res.render('repository',{
                arr:repo
            });
        })
    });
});

router.post('/newissue',function(req,res){
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