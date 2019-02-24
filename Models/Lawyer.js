var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/myappdatabase');

var Lawyer = new Schema({
    LawyerID: ObjectId,
    FirstName: {firstName: String, type: String, required: true},
    LastName:{String,lastName: String, type: String, required: true},
    Gender:{type: String,required: true},
    Nationality: String,
    IdentificationType: String,
    IdentificationNum:{type:Number,unique:true},
    BirthDate: {type:Date, required:true},
    Address:{type:String,required:true},
    Telephone:{type:Number,required:true, unique:true},
    Mobile:{type:Number,required:true, unique:true},
    Fax:{type:String,unique:true},
    Email:{type:String,unique:true,required:true},
    Case:Array  /* [{type: Schema.ObjectId, ref: 'Case'}*/ });



    var Lawyer = mongoose.model('Lawyer', Lawyer);
    module.exports=Lawyer