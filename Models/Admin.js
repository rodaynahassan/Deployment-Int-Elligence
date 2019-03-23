const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new Schema({
  name: { type: String, required: true},
  gender: { type: String, required: true},
  nationality: { type: String, required: true},
  identificationType: { type: String, required: true},
  identificationNumber: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  birthdate:{ type: Date, required: true},
  address: { type: String, required: true},
<<<<<<< HEAD
  telephone: {type:String,required:false},
  fax: {type:String,required:false},
  email: { type: String, unique: true }
=======
  telephone:{ type:String},
  fax:{ type:String},
  email: {type: String}
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
});

module.exports = admin = mongoose.model('admins', Admin);

