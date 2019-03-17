const mongoose=require('mongoose')
const Schema=mongoose.Schema
const SSCManager=require('SSCManager')
//require the SSCManagers class in Mongo

//export the SSCForm class in mongo
const SSCFormSchema=new Schema({
    companyGovernate:{
        type:String,
        required:true
    },
    companyCity:{
        type:String,
        required:true
    },
    companyAddress:{
        type:String,
        required:true
    },
    companyTelephone:{
        type:String
    },
    companyFax:{
        type:String
    },
    companyName:{
        type:String,
        required:true
    },
    companyNameInEnglish:{
        type:String
    },
    currency:{
        type:String,
        required:true
    },
    equityCapital:{
        type:String,
        required:true
    },
    SSCManagers:{
        type:[SSCManager],
        required:true
    }



})
module.exports=SSCForm=mongoose.model('sscforms,SSCFormSchema')