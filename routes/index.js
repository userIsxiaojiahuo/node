var express = require('express');
var router = express.Router();
var user = require("../control/user")

/* GET home page. */
router.post('/register', user.register);
router.post('/login', user.login);

module.exports = router;
