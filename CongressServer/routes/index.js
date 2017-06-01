var express = require('express');
var router = express.Router();
//var politicians = require('../models/politicians');
var allMongo = require('./all-mongo');
var connect = require('./connect');


/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'CongressServer-Wilson' });
});

router.get('/bar', function(request, response) {
    response.status(200).send({result: 'bar'});
});

router.get('/bar/:id', function(request, response) {
    'use strict';
    response.status(200).send({param: request.params.id});
});

router.get('/insertValidCollection', function(request, response){
    response.status(200).send({result: 'insertValidCollection'});
});

module.exports = router;
