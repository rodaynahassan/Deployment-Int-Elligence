var mongoose = require('mongoose')
var Schema = mongoose.Schema

var investorSchema= new Schema({
    InvestorID:ObjectId,
    InvestorName:{type:String,required:true},
    Type:Array,
    Gender:{type:String,required:true},
    Nationality:{type:String,required:true},
    IdentificationType:{type:String,required:true},
    IdentificationNumber:{type:String,required:true},
    Birthdate:{type:Date,required:true},
    Address:{type:String,required:true},
    Telephone:{type:String,required:false},
    Fax:{type:String,required:false},
    Email:{type:String,required:false},
    Currency:{type:String,required:true},
    LawyerID:ObjectId,
    CompanyName:Array
});
var Investor=mongoose.model('Investor',investorSchema);
module.exports = Investor;