const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user: 'gsjtpontjvknkw',
        host: 'ec2-54-91-223-99.compute-1.amazonaws.com',
        database: 'dt3feg5fl64sb',
        password: 'a1fda231dbc0784e1afe4949a8e61cb5161266e434309bfd06c9db2d6a767cd1',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        },
    });

module.exports = pg_conn;