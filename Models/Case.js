const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Form = require('../Models/Form').schema
var ObjectId = mongoose.Schema.Types.ObjectId;
//When using mongo require the Form class

const CaseSchema = new Schema({
    form:{type:Object,required:true},
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
     },
     userId:{
        type:ObjectId,
        required:true
     }

})
module.exports = Case = mongoose.model('cases', CaseSchema)
//export case class in mongo