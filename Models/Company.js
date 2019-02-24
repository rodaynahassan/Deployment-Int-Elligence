var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Company= new Schema({
CompanyName: { type: String, required: true, unique: true },
CompanyInfo: { type: String, required: true},
CompanyID:ObjectId,
CompanyGovernorate:{ type: String, required: true},
CompanyCity:{ type: String, required: true},
CompanyAddress:{ type: String, required: true},
CompanyTelephone:{ type: String, required: false},
CompanyFax:{ type: String, required: false},
CompanyNameEnglish:{ type: String, required: false,unique: true},
InvestorID: ObjectId //foreign //
});
var Company = mongoose.model('Company', Company);
module.exports = Company;