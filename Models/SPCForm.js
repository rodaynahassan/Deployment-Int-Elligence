var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var SPCForm= new Schema({
    CompanyID:ObjectId,
    CompanyGovernorate :{ type: String, required: true },
    CompanyCity :{type: String, required:true},
    CompanyAddress :{type: String,required:true},
    CompanyTelephone:{type:String,required:false},
    CompanyFax:{type:String,required:false},
    CompanyName:{type:String,required:true,unique:true},
    CompanyNameEnglish:{type:String,required:false,unique:true},
    Currency:{type:String,required:true},
    EquityCapital:{type:String,required:true}
});
var SPCForm = mongoose.model('SPCForm',SPCForm);
module.exports = SPCForm;