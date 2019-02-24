var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Admin = new Schema({
  ID: ObjectId,
  name: { type: String, required: true},
  Gender: { type: String, required: true},
  nationality: { type: String, required: true},
  identificationType: { type: String, required: true},
  identificationNumber: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  birthdate:{ type: Date, required: true},
  address: { type: String, required: true},
  telephone: int,
  fax: int,
  email: { type: String, unique: true }
});

var Admin = mongoose.model('Admin', Admin);

module.exports = Admin;

Admin.methods.updname = function(updname) {
    
    this.name += updname; 
  
  };
