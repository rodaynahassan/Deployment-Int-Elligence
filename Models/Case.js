//const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SSCForm = require('SSCFORM')
const SPCForm = require('')
//When using mongo require the Form class

const CaseSchema = new Schema({
    // constructor(form, creationDate) {
    //     this.caseID = uuid.v4();
    //     this.form = form;                       //Form Object 
    //     this.creationDate = creationDate;       //Date
    //     this.lawyerSeen = false;                //Boolean , initialization of a case object have a false lawyerSeen
    //     this.lawyerComments = [];               //Array of Strings, initialization of a case object only needs to state that there is an array
    //     this.lawyerApprove = false;             //Boolean , same as LawyerSeen
    //     this.reviewerSeen = false;              //Boolean , same as LawyerSeen
    //     this.reviewerComments = [];             //Array of Strings, same as LawyerComments
    //     this.reviewerApprove = false;           //Boolean , same as LawyerSeen
    // };
    form:{
       type:[Object],
       required:true
    },
    creationDate: {
        type: Date,
        required: true
    },
     lawyerSeen: {
         type:Boolean,
         required:true
     },
     lawyerComments:{
         type:[String],
         required:true
     },
     lawyerApprove:{
         type:Boolean,
         required:true
     },
     reviewerSeen:{
         type:Boolean,
         required:true
     },
     reviewerComments:{
         type=[String],
         required:true
     }
     reviewerApprove:{
         type:Boolean,
         required:true
     }

})
module.exports = Case = mongoose.model('cases', CaseSchema)
//module.exports = Case
//export case class in mongo