const dboperations = require('./dboperations.js');
const db = require('./dboperations.js');
var World = require('./world');

var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response, request } = require('express');
const { config } = require('process');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
})

router.route('/world').get((request, response) => {
    
    dboperations.getCountrys().then(result => {
        // console.log(result);
        response.json(result[0]);
    });
});

router.route('/country/:id').get((request, response) => {
    dboperations.getCountry(request.params.id).then(result => {
        response.json(result[0]);
    })
});


router.route('/name/:name').get((request, response) => {
    dboperations.getNameCountry(request.params.name).then(result => {
        response.json(result[0]);
    })
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Running on Port '+ port);



// dboperations.getWorld().then(result => {
//     console.log(result);
// });