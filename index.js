import express from 'express';
import {router} from './routes.js';
// ---
import {db_router} from './api/database.js';
import {stock_router} from './api/stocks.js';
import {user_router} from './api/user.js'

import path from 'path';
const __dirname = path.resolve();

import mysql from 'mysql';

const app = express();
// parse json
app.use(express.json());
// database 
app.use(db_router);
// stocks api
app.use(stock_router)
// user api
app.use(user_router)
// routes - middleware ------------------
app.use(express.static(path.join(__dirname, '.')));
app.use(express.static(path.join(__dirname, './admin_portal')));
app.use(router);
//  -------------------------------------
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('listening..');
})
