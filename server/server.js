var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./config/database');
var dbconnection = mysql.createConnection(dbconfig.connection);

//Specifying the database to be used
dbconnection.query("USE " + dbconfig.database);

var app = express();
var port = 3000 ;


//API endpoint for authenticating user
app.post('/auth',function(req,res,next){

    //Allowing cross-origin requests 
    res.header("Access-Control-Allow-Origin", "*");
    
    var email = req.body.email ;
    var password = req.body.password ;
    connection.query("SELCT * FROM users WHERE email = ? AND password = ? ",[email,password],function(err,rows){
        if(err){
            res.end("error");
        }
        else if(rows.length == 0){
            res.end("incorrent");
        }
        else{
            res.end("correct");
        }
    })

});

app.listen(port);