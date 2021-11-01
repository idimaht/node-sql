const config = {
    user: 'spatial_user',
    password: 'sql1234',
    server: 'localhost',
    database: 'World',
    options: {
        encrypt : false,
        trustedConnection: true,
        enableArithPort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}

module.exports = config;