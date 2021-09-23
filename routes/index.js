var express = require('express');

var router = express.Router();

const homePage = require('../controller/index_controller');

router.get('/',homePage.home);

module.exports = router;