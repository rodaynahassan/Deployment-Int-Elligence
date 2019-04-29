import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    en:{
       title:"In Progress Cases",
       unassigned:"Unassigned Yet",
       lawyerP:"In Progress Lawyer",
       lawyerR:"Lawyer Rejected",
       lawyerA:"Lawyer Accepted",
       reviewerP:"In Progress Reviewer",
       approved:"Approved",
        edit:"Edit Form",
        delete:"Delete Form"
    },
    ar:{
        title:"شركات جاري العمل بها",
        unassigned:"غير مخصص حتى الآن",
       lawyerP:"المحامي يعمل عليها",
       lawyerR:"المحامي رفضها",
       lawyerA:"المحامي وافق عليها",
       reviewerP:"المتابع يعمل عليها",
       approved:"تم الموافقة",
        edit:"تعديل",
        delete:"حذف"
    }
});

export default strings