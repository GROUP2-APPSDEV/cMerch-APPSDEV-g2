import express from 'express';
import mysql from 'mysql';
import path from 'path';


const __dirname = path.resolve()
const db_router = express.Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    port: 3000
    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    // database : 'sample_db'
})
// db.connect((err)=>{
//     if(err){
//         throw err;
        
//     }else{
//         console.log('mysql connected')
//     }
// })

db_router.route('/create-db')
.get((req, res, next)=>{
    db.connect( (err)=>{
        if (err) throw err;
        console.log('connected')
        res.send('connected')
    })
    
})
db_router.route('/show-db')
.get((req, res, next)=>{
    let show_db = 'SHOW DATABASES';
    db.query(show_db, (err, result)=>{
        if (err) throw err;
        console.log(result)
        res.send(show_db)
    })
    res.send(show_db)
})

export {db_router, db}