
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Reviewer = new Schema({
  id : ObjectId ,
  name: {String,required:true},
  gender: {String,required:true},
  nationality: {String,required:true},
  identificationType: {String,required:true},
  identificationNumber: {type:String,required:true,unique:true},
  birthdate: {type:date,required:true},
  address: {String,required:true,unique:true},
  telephone:{type:Number,unique:true},
  fax: Number,
  cases: {type: [String], required: true },
  email: { type: String, unique: true} ,
  password: { type: String, required: true },
  
});

module.exports = Reviewer = mongoose.model('reviewers', BookSchema)