

const Case= require('../Models/Case')

const currentDate = new Date();
const case1 = new Case ({
    form:undefined,
     companyName:"Google",
     creationDate: currentDate.getDate(),
      lawyerSeen:false,
      lawyerComments:"ay",
      lawyerApprove:false,
      reviewerSeen:false,
      reviewerComments:[],
      reviewerApprove:false,
})
const case2 = new Case ({
    form:undefined,
     companyName:"Google2",
     creationDate: currentDate.getDate(),
      lawyerSeen:false,
      lawyerComments:"ay",
      lawyerApprove:false,
      reviewerSeen:false,
      reviewerComments:[],
      reviewerApprove:false,
})

const case3 = new Case ({
    form:[],
     companyName:"Google3",
     creationDate: currentDate.getDate(),
      lawyerSeen:false,
      lawyerComments:"ay",
      lawyerApprove:false,
      reviewerSeen:false,
      reviewerComments:[],
      reviewerApprove:false,
})



var cases = []
cases.push(case1)
cases.push(case2)
cases.push(case3)




function compareById(a,b){
    if(a._id < b._id) return -1
    if(b._id < a._id) return 1
    
    return 0
}


cases.sort(compareById)
console.log(cases)