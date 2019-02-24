var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var InvestorSchema = new Schema({
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

var SSCManagersSchema = new Schema({
    ManagerID:ObjectId,
    Name: { type: String, required: true},
    Gender:{ type: String, required: true },
    Nationality :{ type: String, required: true },
    IdentificationType:{ type: String, required: true },
    IdentificationNumber :{type: String, required: true ,unique:true},
    birthdate:{type: Date, required: true },
    Address:{ type: String, required: true },
    TypeOfManagers:{ type: String, required: true },
    Type:Array
}
);














