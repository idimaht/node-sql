const dboperations = require('./dboperations.js');
const db = require('./dboperations.js');
var World = require('./world');


dboperations.getWorld().then(result => {
    console.log(result);
});