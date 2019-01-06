var express = require('express');
var dbconfig = require('./config/database');
var CredentialsModel = require('./models/Credentials');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
var port = 3000 ;

app.use(bodyparser());
app.use(cors());

//Utility Functions
function isEmpty(obj) {
    return !Object.keys(obj).length > 0;
}


//API endpoint for authenticating user
app.post('/auth',function(req,res,next){
    var email = req.body.email ;
    var password = req.body.password ;

    var credentials = new CredentialsModel(
        {
            "email":email,
            "password":password
        }
    )

    CredentialsModel.find(credentials,function(err,doc){
        if(err){
            console.log("Error occured while searching for user");
        }
        else if(isEmpty(doc)){
            var response = {
                "status" : "failure",
                "email"  : ""
            }
            console.log("Invalid Authentication Details. Response Sent : " + response);
            return response;
        }
        else{
            var response = {
                "status" : "success",
                "email"  : doc.email
            }
            console.log("Correct Authentication Details. Response Sent : " + response);
            return response;
        }
    })

});

app.listen(port);