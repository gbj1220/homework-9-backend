var express = require('express');
var router = express.Router();

const { getCatFact } = require('./usersController');

router.get('/get-fact', getCatFact);

module.exports = router;
