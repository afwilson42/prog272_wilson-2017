/**
 * Created by Andrew Wilson on 5/31/17.
 */

var mongoose = require('mongoose');

var politicianSchema = mongoose.Schema({
    'firstName': String,
    'lastName': String,
    'street': String,
    'city': String,
    'state': String,
    'zip': String,
    'phone': String,
    'contact': String,
    'web': String
});

module.exports = mongoose.model('politician', politicianSchema);