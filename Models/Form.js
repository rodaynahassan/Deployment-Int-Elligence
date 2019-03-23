const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId = mongoose.Schema.Types.ObjectId;

const SSCManager= new Schema({
    name: {type: String,required: true},
    type: {type: String,required: true},
    gender:{type: String,required: true},
    nationality: {type:String,required: true},
    identificationType: {type: String,required: true},
    identificationNumber:{type: String,required: true},
    birthdate:{type: Date,required: true},
    address:{type: String,required: true},
    typeOfManagers:{type: String,required: true}

})

const FormSchema= new Schema({
    companyGovernorate:{type:String,required:true},
    companyCity:{type:String,required:true},
    companyAddress:{type:String,required:true},
    companyTelephone:{type:String},
    companyFax:{type:String},
    companyName:{ type:String,required:true,unique:true},
    companyNameInEnglish:{type:String},
    currency:{type:String,required:true},
    equityCapital:{type:Number,required:true},
    SSCManagers:{type:Array},
    type:{type:String,required:true},
    status:{type: String,enum:['Rejected','In progress','Approved']},
    CaseId:{type:ObjectId}
})

module.exports = Form = mongoose.model('forms', FormSchema)
