var express = require('express');

var router = express.Router();

router.use(express.static('assets/images'));

router.use(express.static('assets/css'));

router.use(express.static('views'));

const homePage = require('../controller/index_controller');

router.get('/',homePage.home);

module.exports = router;