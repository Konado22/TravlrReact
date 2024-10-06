//============================================================================
// Name        : dbConnect.js
// Author      : Jesse Draper
// Version     : 1.0
// Copyright   : Copyright © 2017 SNHU COCE
// Description : One method of creating a connection with Postgres Database
//============================================================================
import {Pool} from 'pg';
//only essential if building clientConnection. Can also utilize vercel/db and vercel/sql to perform database querries
let conn;
if (!conn) {
 conn = new Pool ({
    user:process.env.POSTGRES_USER,
    password:process.env.POSTRGRES_PASSWORD,
    host:process.env.POSTGRES_HOST,
    port:process.env.POSTGRES_PORT,
    database:process.env.POSTGRES_DATABASE
 })
}
 
 export default conn;