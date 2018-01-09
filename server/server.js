var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./config/database');
var dbconnection = mysql.createConnection(dbconfig.connection);
var bodyparser = require('body-parser');
var cors = require('cors');
//Specifying the database to be used
dbconnection.query("USE " + dbconfig.database);

var app = express();
var port = 3000 ;

app.use(bodyparser());
app.use(cors());

//API endpoint for authenticating user
app.post('/auth',function(req,res,next){
    var email = req.body.email ;
    var password = req.body.password ;
    console.log(email,password);
    dbconnection.query("SELECT * FROM users WHERE email = ? AND password = ? ",[email,password],function(err,rows){
        if(err){
            var arr = {"resp":"error"};
            var response = JSON.stringify(arr);
            console.log(response);
            res.end(response);
        }
        else if(rows.length == 0){
            var arr = {"resp":"incorrect"};
            var response = JSON.stringify(arr);
            console.log(response);
            res.end(response);
        }
        else{
            var arr = {"resp":"correct"};
            var response = JSON.stringify(arr);
            console.log(response);
            res.end(response);
        }
    })

});

app.listen(port);