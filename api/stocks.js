import express from 'express';
import path from 'path';
import mysql from 'mysql';

const stock_router = express.Router();
const __dirname = path.resolve();

import {db} from './database.js'


stock_router.route('/stocks')
.get((req, res) =>{

    res.send('showing the stocks')
})

export {stock_router}