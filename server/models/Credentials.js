var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var credentialsSchema = new Schema(
    {
        email : String,
        password : {type:String, required:true},
        _id : false
    }
    
);

var credentialsModel = mongoose.model('User',credentialsSchema,'Users');

module.exports = credentialsModel;