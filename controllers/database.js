const mysql = require('mysql2');
const config = require('../config/dev');




const pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});

async function query(sql, values){
    const promisePool = pool.promise(); //returns a promise of the pool which creates the connection - like getConnection() 
    return [rows, fields] = await promisePool.query(sql, values); //passes the connection with the query into the array 


}




module.exports = {
    pool,
   query,
    
}

// __________ O L D____ C O D E ________
/* function getConnection() {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (connErr, connection) {
            if (connErr) reject(connErr) // not connected!
            else resolve(connection)
        })
    })
}

function runQuery(connection, sql){
    return new Promise(function (resolve, reject){
        connection.query(sql, function (sqlErr, result, fields){
            if (sqlErr) reject (sqlErr)
            else resolve(result)
        });
    });
} */