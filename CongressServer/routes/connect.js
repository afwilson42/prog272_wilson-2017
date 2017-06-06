/**
 * Created by charlie on 6/6/16.
 */

const mongoose = require('mongoose');

const connect = {

    connected: false,

    simpleConnect: function() {
        'use strict';
        console.log('Connecting with simple.');
        const url = 'mongodb://127.0.0.1:27017/test';
        console.log(url);
        connect.connected = true;
        mongoose.connect(url);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    custom: function() {
        'use strict';
        console.log('Connecting with simple.');
        //const url = 'mongodb://127.0.0.1:27017/test';
        const userName = 'charlie';
        const password = 'foobar';
        const siteAndPort = '192.168.2.18:27017';
        const databaseName = 'test';
        const url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        console.log(url);
        connect.connected = true;
        mongoose.connect(url);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    // mongodb://pol:polFooBarQux@ds049848.mlab.com:49848/elvenlab01
    //mongodb://awilson:Th3L0veBug@ds028540.mlab.com:28540/prog272wilson
    mlabConnect: function() {
        'use strict';
        console.log('Connecting with mlab.');
        connect.connected = true;
        var userName = 'awilson';
        var password = 'Th3L0veBug';
        var siteAndPort = 'ds028540.mlab.com:28540';
        var databaseName = 'prog272wilson';
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;

        mongoose.connect(url);

        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    doConnection: function(option) {
        'use strict';
        if (typeof option === 'undefined') {
            option = 'simple';
        }

        switch (option) {
            case 'simple':
                connect.simpleConnect();
                break;
            case 'custom':
                connect.custom();
                break;
            case 'mlab':
                connect.mlabConnect();
                break;
            default:
                connect.simpleConnect();
        }
    }
};

module.exports = connect;