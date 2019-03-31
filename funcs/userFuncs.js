const axios = require('axios')
const mongoose = require('mongoose')
const Form = require('../Models/Form')
const functions = 
{

    createForm : async (companyName1,companyGovernorate1,companyCity1,companyAddress1,currency1,equityCapital1,type1,creationDate1,userId1,SSCManagers1) => {
       await axios({    
            method :'post',
            url :'http://localhost:3000/routes/api/forms/',
            data : {
                companyName : companyName1,
                companyGovernorate : companyGovernorate1,
                companyCity : companyCity1,
                companyAddress : companyAddress1,
                currency : currency1,
                equityCapital : equityCapital1,
                type : type1,
                creationDate : creationDate1,
                userId : userId1,
                SSCManagers : SSCManagers1
            }
        })
        },
        GetFormByCompanyName : async (companyName) => { 
        const forms = await axios({
        method : 'get',
        url:'http://localhost:3000/routes/api/forms/getByCompanyName/'+companyName ,
        //headers:{'Content-Type':'application/json'}

    });
    return forms
    },    
        getAllForms: async () => { 
        const forms = await axios({
        method : 'get',
        url:'http://localhost:3000/routes/api/forms/',

    });
    return forms 
},
        putFormLawyerComments: async (lawyerComments1,userId1,formId1)=> {
            var returned = await axios({ 
            method :'put',
            url :'http://localhost:3000/routes/api/users/lawyerComments/' +userId1+'/'+formId1,
            data : {
                lawyerComments : lawyerComments1
            }
        })
            console.log(returned.data.data)
            return returned
        },
        putFormReviewerComments: async (ReviewerComments1,userId1,formId1)=> {
            var returned = await axios({ 
            method :'put',
            url :'http://localhost:3000/routes/api/users/reviewerComments/' +userId1+'/'+formId1,
            data : {
                reviewerComments : ReviewerComments1
            }
        })
            console.log(returned.data.data)
            return returned
        }

}

module.exports = functions ;
jest.setTimeout(400000);