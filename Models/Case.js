var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
//mongoose.connect('mongodb://localhost/myappdatabase');

var caseSchema = new Schema({
      FormID : ObjectId,
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
