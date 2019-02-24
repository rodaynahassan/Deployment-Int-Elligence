var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
//mongoose.connect('mongodb://localhost/myappdatabase');

var Case = new Schema({
      FormID : ObjectId,     //forgein key
      CaseID : mongoose.Schema.Types.Number,
      CreationDate : {type:Date , required:true},
      LawyerSeen : Boolean ,
      LawyerApprove : Boolean ,
      LaywerComments : String ,
      ReviewerSeen : Boolean ,
      ReviewerApprove : Boolean ,
      ReviewerComments : Boolean ,
      Currency :{type:String , required:true},
      EquityCapital :{type:String , required:true}
});

var Case = mongoose.model('Case',Case);
module.exports = Case;