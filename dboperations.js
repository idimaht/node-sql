var config = require('./config.js');
const sql = require('mssql');

async function getWorld() {
    try {
        let pool = await sql.connect(config);
        let country = await pool.request().query("SELECT * FROM world");
        return country.recordset;
    } 
    catch (err){
        console.log(err);
    }
}

module.exports = {
    getWorld : getWorld
}