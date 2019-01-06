var mongoose = require('mongoose');

//Log all mongoose operations
mongoose.set('debug',true);

//Specify the host and the database name to connect to
var host = "mongodb://localhost/Blogger"; 

class DatabaseConnect{
    constructor(){
        this._connect();
    }

_connect(){
mongoose.connect(host).then(()=>{
    console.log("Connected to database");
})
.catch(err=>{
    console.log("Error occured. Cannot connect to database");
})
}

}

module.exports = new DatabaseConnect();


