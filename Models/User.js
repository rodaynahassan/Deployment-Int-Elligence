
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Case= require('../Models/Case').schema
const Form = require('../Models/Form').schema

const User = new Schema({

  userType:{type:String,required: true},
  name: {type:String,required:true},
  gender: {type:String,required:true},
  nationality: {type:String,required:true},
  identificationType: {type:String,required:true},
  identificationNumber: {type:String,required:true,unique:true},
  birthdate: {type:Date,required:true},
  address: {type:String,required:true},
  telephone:{type:String},
  fax:{type:String},
  cases: {type: Array },
  email: { type: String} ,
  password: { type: String, required: true },
  lawyer: { type: Object},
  investorType: {type: String},
  financialBalance:{type:Number,required:false}
});



module.exports = user = mongoose.model('users', User)