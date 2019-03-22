const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Form = require('../Models/Form').schema

//When using mongo require the Form class

const CaseSchema = new Schema({
    form:{
       type:Form,
       required:true
    },
    companyName:{
        type:String,
        required:true,
        unique:true
    },
    creationDate: {
        type: Date,
        required: true
    },
     lawyerSeen: {
         type:Boolean
     },
     lawyerComments:{
         type:[String]
        
     },
     lawyerApprove:{
         type:Boolean
     },
     reviewerSeen:{
         type:Boolean
     },
     reviewerComments:{
         type:[String]
     },
     reviewerApprove:{
         type:Boolean
     }

})
module.exports = Case = mongoose.model('cases', CaseSchema)
//export case class in mongo