import express from 'express';
import mysql from 'mysql';
import path from 'path';
import { send } from 'process';
import {db} from './database.js'


const __dirname = path.resolve()
const user_router = express.Router();



// db.query("CREATE TABLE user", (err, result)=>{
//     if (err) throw err;
//     console.log(result)
// })

user_router.route('/create-user-table')
.get((req, res) =>{
    // let account = `CREATE TABLE user(id INT(20) PRIMARY KEY AUTO_INCREMENT, FirstName VARCHAR(50),MiddleName VARCHAR(50),LastName VARCHAR(50), Prefix VARCHAR(50),Gender VARCHAR(50),Password VARCHAR(50),ContactNnum INT(20));`
    // db.query(account, (err, result) =>{
    //     if (err) throw err;
    //     console.log(result)
    // })
    db.query('SHOW TABLES', (err, result)=>{
        if (err) throw err;
        console.log(result)
        res.status(201)
        res.send(JSON.stringify(result));
    })
    
})
user_router.route('/api/insert-new-user-account')
.post((req, res) =>{
    let new_user = `INSERT INTO USER (FirstName, MiddleName, LastName,prefix, Gender,Password,ContactNnum)
                                VALUES ("Adam", "Compio", "Marcaida", "Jr.", "Male", "1w2we3e", 09120090952);`
    db.query(new_user, (err, result) =>{
        if (err) throw err;
        console.log(result)
        res.status(201)
        res.send(JSON.stringify(result))
    })
})
user_router.route('/api/users')
.get((req, res) =>{
    let select_user = 'SELECT * FROM USER;'
    db.query(select_user, (err, result) =>{
        if (err) throw err;
        console.log(result)

        res.send(result)
    })
})
// user id
user_router.route('/api/users/:id')
.get( (req, res) =>{
    let search_account =  `SELECT * FROM user WHERE id=${req.params.id}`
    db.query(search_account, (err, result) =>{
        if (err) throw err;
        console.log(JSON.stringify(result))
        console.log(JSON.stringify(result[0].FirstName))
        res.send('USER INFO: ' + JSON.stringify(result))
    })
    
})

// drop table
user_router.route('/drop-user')
.get((req, res) =>{
    let drop_user = 'DROP TABLE USER;'
    db.query(drop_user, (err, result) =>{
        if (err) throw err;
        console.log(result)
        res.send( JSON.stringify(result))
    })
})

export {user_router}

// if email address existing do not create new account..
// 
// problem
// do not create table,account-gmail if existing
// create api for user, clothes, etc
// 