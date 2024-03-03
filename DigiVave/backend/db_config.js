const express = require('express');
const mysql = require('mysql2');
const app = express();

// Create a connection to the database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3006,  // Update this to the correct port
    user: "root",
    password: "Ranjit@1695",
    database: "digivave",
    connectionLimit: 10  
  });
   
  // open the MySQL connection
  connection.connect(function(err){
    if (err){
        console.log("Connection FAILED and error is -", err)
    }else{
        console.log("Database Connected Successfully");
    }
})
module.exports = connection;