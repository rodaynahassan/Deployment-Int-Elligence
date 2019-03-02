const uuid = require('uuid')
//When using mongo require the Form class

class Case {
    constructor(form, creationDate) {
        this.caseID = uuid.v4();
        this.form = form;                       //Form Object 
        this.creationDate = creationDate;       //Date
        this.lawyerSeen = false;                //Boolean , initialization of a case object have a false lawyerSeen
        this.lawyerComments = [];               //Array of Strings, initialization of a case object only needs to state that there is an array
        this.lawyerApprove = false;             //Boolean , same as LawyerSeen
        this.reviewerSeen = false;              //Boolean , same as LawyerSeen
        this.reviewerComments = [];             //Array of Strings, same as LawyerComments
        this.reviewerApprove = false;           //Boolean , same as LawyerSeen
    };
}

module.exports = Case
//export case class in mongo