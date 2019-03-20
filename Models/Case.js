const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Form = require('../Models/form').schema

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
         type:Boolean,
         required:true
     },
     lawyerComments:{
         type:[String],
         required:true
     },
     lawyerApprove:{
         type:Boolean,
         required:true
     },
     reviewerSeen:{
         type:Boolean,
         required:true
     },
     reviewerComments:{
         type:[String],
         required:true
     },
     reviewerApprove:{
         type:Boolean,
         required:true
     }

})
module.exports = Case = mongoose.model('cases', CaseSchema)
//export case class in mongo