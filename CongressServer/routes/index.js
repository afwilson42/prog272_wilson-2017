var express = require('express');
var router = express.Router();
//var politicians = require('../models/politicians');
var allMongo = require('./all-mongo');

var connect = require('./connect');

router.get('/bar', function(request, response) {
    'use strict';
    response.status(200).send({result: 'bar'});
});

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.loadFile('index.html');
});

/* GET home page.*/
router.get('/admin', function(req, res) {
    'use strict';
    res.render('index', {title: 'CongressServer'});

});

function checkConnection() {
    'use strict';
    if (!connect.connected) {
        connect.doConnection('mlab');
    }
}

router.get('/all-data', function(request, response) {
    'use strict';
    console.log('AllData route invoked.');
    checkConnection();
    allMongo.getAllData(response);
});

router.get('/emptyCollection', function(request, response) {
    'use strict';
    console.log('Verify Connection invoked');
    checkConnection();
    allMongo.empty(response);
});

router.get('/insertValidCollection', function(request, response) {
    'use strict';
    console.log('Insert Valid Collection Called.');
    checkConnection();
    allMongo.readDataAndInsert(response);
});

router.get('/update', function(request, response){
    'use strict';
    console.log('Insert Valid Collection Called.');
    checkConnection();
    allMongo.update(request.query, response);
});

module.exports = router;
