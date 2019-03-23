
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
  telephone:{type:Number,unique:true},
  fax:{type:Number,unique:true},
  cases: {type: [Case], required: true },
  email: { type: String, unique: true} ,
  password: { type: String, required: true,unique:true },
  forms: {type: [Form],required: true},
  companies: {type: Form,required: true},
  lawyer: { type: Schema.Types.ObjectId, ref: 'users' ,required: true},
  investorType: {type: [String], required: true}
  
});



module.exports = user = mongoose.model('users', User)