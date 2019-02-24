var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SSCManagers = new Schema({
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
var SSCManagers=mongoose.model('SSCManagers',SSCManagers);
module.exports=SSCManagers;
