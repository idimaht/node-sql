var config = require('./config.js');
const sql = require('mssql');

async function getCountrys() {
    try {
        let pool = await sql.connect(config);
        let country = await pool.request().query("SELECT * FROM world");
        return country.recordset;
    } 
    catch (err){
        console.log(err);
    }
}

async function getCountry(id) {
    try {
        let pool = await sql.connect(config);
        
        let country = await pool.request()
            .input('input_parameter', sql.Int, id)
            .query("SELECT * FROM world WHERE ID = @input_parameter");

        return country.recordset;
    } 
    catch (err)
    {
        console.log(err);
    }
}

async function getNameCountry(name) {
    try {
        let pool = await sql.connect(config);
        
        let country = await pool.request()
            .input('inputName_parameter', sql.NVarChar, name)
            .query("SELECT Name, Geom.MakeValid().STArea() as Area FROM world WHERE Name = @inputName_parameter");

        return country.recordset;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getCountrys : getCountrys,
    getCountry : getCountry,
    getNameCountry : getNameCountry
}