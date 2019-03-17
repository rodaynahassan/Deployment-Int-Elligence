const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Case= require('../../models/Case')
//require case class in mongo 
const LawyerSchema= new Schema({


    firstName: {type: String ,required: true},                       //String
    lastName: {type: String ,required: true},                       //String
    gender: {type: String ,required: true},                         //String
    nationality: {type: String ,required: true},                    //String
    identificationType: {type: String ,required: true},            //String
    identificationNum: {type: Number ,required: true},             //String
    birthDate: {type: Date ,required: true},                      //Date
    address: {type: String ,required: true},                      //String
    telephone: {type: Number ,required: false},                   //String
    fax: {type: String ,required: false},                                    //String
    email: {type: String ,required: false},                            //Email Format
    cases:{type:[Case], required:true},                                                      //Array of cases
    password: {type: String ,required: true}                       //String
    
});

const Lawyer = mongoose.model('Lawyer',Lawyer);
module.exports=Lawyer
//export lawyer class in mongo 