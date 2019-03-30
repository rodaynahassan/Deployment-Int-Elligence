const axios = require('axios');

const functions = {
    postForm: async (companyGovernorate1,companyCity1,companyAddress1,companyTelephone1,companyFax1,companyName1,companyNameInEnglish1,currency1,equityCapital1,type1,status1,creationDate1,userId1) => {
        axios({
            method:'post',
            url:'http://desolate-oasis-18053.herokuapp.com/routes/api/forms/',
            data: {
            companyGovernorate: companyGovernorate1,
            companyCity: companyCity1,
            companyAddress: companyAddress1,
            companyTelephone: companyTelephone1,
            companyFax: companyFax1,
            companyName: companyName1,
            companyNameInEnglish: companyNameInEnglish1,
            currency:currency1,
            equityCapital: equityCapital1,
            type:type1,
            SSCManagers:[],
            status:status1,
            creationDate:creationDate1,
            lawyerSeen:false,
            lawyerComments:[],
            lawyerApprove:false,
            reviewerSeen:false,
            reviewerComments:[],
            reviewerApprove:false,
            userId:userId1
            }
            })
        },
        getForms: async() =>{
                // const forms = await axios.get('http://desolate-oasis-18053.herokuapp.com/routes/api/forms/')
                //   return forms
                return await axios({
                    method:'get',
                    url:'http://desolate-oasis-18053.herokuapp.com/routes/api/forms/',
                   // headers:{'Content-Type':'applocation/json'}
                })
        },
        getFormByID: async(FormID) =>{
                const form = await axios({
                    method:'get',
                    url:'http://desolate-oasis-18053.herokuapp.com/routes/api/forms/'+FormID
                  })
                  return form
        },
        getCompanyOfAnInvestor: async(userID) =>{
                return await axios({
                    method:'get',
                    url:'http://desolate-oasis-18053.herokuapp.com/routes/api/users/getApprovedCompanies/'+userID,
                    headers:{'Content-Type':'applocation/json'}
                })
        }
        
};
module.exports = functions;

jest.setTimeout(40000);