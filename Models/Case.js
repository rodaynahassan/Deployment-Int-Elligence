const uuid = require('uuid')

class Case {
    constructor(FormID, CreationDate, LawyerSeen, LawyerComments,LawyerApprove,ReviewerSeen,ReviewerComments,ReviewerApprove) {
        this.CaseID = uuid.v4();
        this.FormID = FormID;
        this.CreationDate = CreationDate;
        this.LawyerSeen = LawyerSeen;
        this.LawyerComments = LawyerComments;
        this.LawyerApprove = LawyerApprove;
        this.ReviewerSeen = ReviewerSeen;
        this.ReviewerComments = ReviewerComments;
        this.ReviewerApprove = ReviewerApprove;
    };
}

module.exports = Case