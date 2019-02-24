var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SSCForm = new Schema({
    CompanyID:ObjectId,
    CompanyGovernate: { type: String, required: true, unique: false},
    CompanyCity: { type: String, required: true},
    CompanyAddress: { type: String, required: true },
    CompanyTelephone:{ type:Number, required: false },
    CompanyFax:{ type: String, required: false },
    CompanyName:{ type: String, required: true, unique: true },
    CompanyNameInEnglish:{ type: String, required:false, unique: true },
    Currency:{ type: String, required: true },
    EquityCapital:{ type: String, required: true },
    SSCManagers:Array
});
var SSCForm=mongoose.model('SSCForm',SSCForm);
module.exports=SSCForm;














