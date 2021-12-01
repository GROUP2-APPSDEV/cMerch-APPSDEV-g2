import express from 'express';
import mysql from 'mysql';
import path from 'path';
import {db} from './database.js'


const __dirname = path.resolve()
const user_router = express.Router();



// db.query("CREATE TABLE user", (err, result)=>{
//     if (err) throw err;
//     console.log(result)
// })

user_router.route('/api/create-user-table')

.post((req, res) =>{

    let account = `CREATE TABLE user_account(id INT(20) PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    MiddleName VARCHAR(50),
    LastName VARCHAR(50), 
    Prefix VARCHAR(50),
    Gender VARCHAR(50),
    Age INT,
    ContactNum BIGINT, 
    Gmail VARCHAR(50) NOT NULL UNIQUE, 
    Password_ VARCHAR(20));`

    db.query(account, (err, result) =>{
        if (err) throw err;
        console.log(result)
    })

    let address = `CREATE TABLE address(id INT(20) PRIMARY KEY AUTO_INCREMENT, 
     UnitFloor VARCHAR(20), 
     HouseBldg VARCHAR(20),
     streetNum VARCHAR(20), 
     streetName VARCHAR(20),
     BrgyDistrict VARCHAR(20),
     zipcode INT(20),
     userID INT, 
     FOREIGN KEY (userID) REFERENCES user_account(id) );`

    db.query(address, (err, result)=>{
        if (err) throw err;
        console.log(result)
    })

    db.query('SHOW TABLES', (err, result)=>{
        if (err) throw err;
        console.log(result)
        
        
    })
    res.status(201)
    res.send()
})

// /api/add-user/:firstname/:middlename/:lastname

user_router.route('/api/add-user')

.post((req, res) =>{
    console.log(req.body)
    let new_user = `INSERT INTO user_account (FirstName, MiddleName, LastName,prefix,Age, Gender,ContactNnum,Gmail, password_)
    VALUES ("${req.body.firstname}", "${req.body.middlename}", "${req.body.lastname}", "${req.body.prefix}.",
     "${req.body.gender}",${req.body.age}, ${req.body.ContactNnum}, '${req.body.gmail}', "${req.body.password}");`

    db.query(new_user, (err, result) =>{
        if (err) throw err;
        console.log(result)
    })

    db.query(`SELECT id FROM user_account WHERE Gmail = '${req.body.gmail}';`, (err, result)=>{
        if (err) throw err;
        var userID = result;
        console.log('userID result', userID[0].id)
        var new_address = `INSERT INTO Address (UnitFloor, HouseBldg, StreetNum,streetName,BrgyDistrict, zipcode, userID)
                                        VALUES ('lot 30','blk 30', 'villa elise','Masuso', 'Pandi', 3014, ${userID[0].id});`
        db.query(new_address, (err, result2) =>{
            if (err) throw err;
            console.log(result2)
            
        })
    })
        
    
    res.status(201)
    res.send()
});

user_router.route('/api/users')
.get((req, res) =>{
    let select_user = 'SELECT * FROM USER;'
    db.query(select_user, (err, result) =>{
        if (err) throw err;
        console.log(result)
    })
    db.query('SELECT * FROM Address', (err, result) =>{
        if(err) throw err;
        console.log(result)
    })
    res.send()
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
user_router.route('/api/remove-users')
.get((req, res) =>{
    
    // let drop_address = 'DROP TABLE Address;'
    // db.query(drop_address, (err, result) =>{
    //     if (err) throw err;
    //     console.log(result)
    // })

    let drop_user = 'DROP TABLE user_account;'
    db.query(drop_user, (err, result) =>{
        if (err) throw err;
        console.log(result)
    })
    res.send()
})
user_router.route('/api/database/tables')
.get((req, res) =>{
    db.query('SHOW TABLES', (err, result)=>{
        if (err) throw err;
        res.send('tables' + JSON.stringify(result))
    })
})
export {user_router}

// if email address existing do not create new account..
// 
// problem
// do not create table,account-gmail if existing
// create api for user, clothes, etc
// 