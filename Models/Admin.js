const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new Schema({
  name: { type: String, required: true},
  Gender: { type: String, required: true},
  nationality: { type: String, required: true},
  identificationType: { type: String, required: true},
  identificationNumber: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  birthdate:{ type: Date, required: true},
  address: { type: String, required: true},
  telephone: String,
  fax: String,
  email: { type: String, unique: true }
});

module.exports = Admin = mongoose.model('admins', Admin);

