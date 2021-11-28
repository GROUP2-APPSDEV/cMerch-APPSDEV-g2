import express from 'express';
import mysql from 'mysql';
import path from 'path';


const __dirname = path.resolve()
const db_router = express.Router();

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'my_db'
});


// Hostname	sql485.main-hosting.eu
// Database	u991157589_appsdev2021_g2
// User	    u991157589_appsdev2021_g2
// Password	Group2q2w

db_router.route('/create-db')
.get((req, res, next)=>{
    db.query("CREATE DATABASE MY_DB", (err, result) =>{
        if (err) throw err;
        console.log(result)
    })
    res.send('dataabse created')
})

export {db_router, db}