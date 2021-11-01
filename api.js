const dboperations = require('./dboperations.js');
const db = require('./dboperations.js');
var World = require('./world');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();



dboperations.getWorld().then(result => {
    console.log(result);
});