const axios = require('axios');

const functions = {
    postForm: async(companyGovernorate1 , companyCity1 , companyAddress1 , companyName1 , currency1 ,equityCapital1 ,type1 ,creationDate1 ,userId1)=>{
            var form = await axios({
                method:'post',
                url:'http://localhost:5000/routes/api/dynamicForms/',
                data: {
                    companyName:companyName1,
                    companyGovernorate:companyGovernorate1 ,
                    companyCity:companyCity1,
                    companyAddress:companyAddress1,
                    currency:currency1,
                    equityCapital:equityCapital1,
                    type:type1,
                    creationDate:creationDate1,
                    userId:userId1
                  },
                  responseType: 'json',
                })
                return form;
    },
    postFormForUser: async(companyGovernorate1 , companyCity1 , companyAddress1 , companyName1 , currency1 ,equityCapital1 ,type1 ,creationDate1 ,userId1)=>{
        var form = await axios({
            method:'post',
            url:'http://localhost:5000/routes/api/users/CreatingForm/'+ userId1,
            data: {
                companyGovernorate:companyGovernorate1 ,
                companyCity:companyCity1,
                companyAddress:companyAddress1,
                companyName:companyName1,
                currency:currency1,
                equityCapital:equityCapital1,
                type:type1,
                creationDate:creationDate1,
                
              },
              responseType: 'json',
            })
            return form;
},
    getForms: async() =>{
        const forms= await axios.get('http://localhost:5000/routes/api/forms/')
        return forms 
    },
    deleteForm: async (DeleteID) => {
                   const form = await axios.delete('http://localhost:5000/routes/api/forms/'+ DeleteID )
                  return form
              },
    GetFormById : async(FormID) => {    // get certain form
       
                form= await axios({
                    method : 'get',
                    url:'http://localhost:5000/routes/api/forms/'+ FormID
                })
                return form
            },
    postSSCForm :async(companyGovernorate1 , companyCity1 , companyAddress1 , companyName1 , currency1 ,equityCapital1 ,SSCManagers1,type1 ,creationDate1 ,userId1)=>{
        
                var form = await axios({
                method:'post',
                url :'http://localhost:5000/routes/api/users/CreatingForm/'+ userId1 ,
                data :{
                    companyGovernorate:companyGovernorate1 ,
                    companyCity:companyCity1,
                    companyAddress:companyAddress1,
                    companyName:companyName1,
                    currency:currency1,
                    equityCapital:equityCapital1,
                    SSCManagers:SSCManagers1,
                    type:type1,
                    creationDate:creationDate1,
                    
                },
                responseType:'json',
        
            })
               return form ;
            },
        
            
    getReviewerComments : async (formId)=>{
                const reviewerComments = await axios.get('http://localhost:5000/routes/api/forms/getReviewerComments'+ formId)
                return reviewerComments
            },
    postFormComments : async(companyGovernorate1 , companyCity1 , companyAddress1 , companyName1 , currency1 ,equityCapital1,type1 ,creationDate1 ,reviewerComments1,userId1)=>{
                var form = await axios({
                    method:'post',
                    url :'http://localhost:5000/routes/api/users/CreatingForm/'+ userId1 ,
                    data :{
                        companyGovernorate:companyGovernorate1 ,
                        companyCity:companyCity1,
                        companyAddress:companyAddress1,
                        companyName:companyName1,
                        currency:currency1,
                        equityCapital:equityCapital1,
                        type:type1,
                        creationDate:creationDate1,
                        reviewerComments:reviewerComments1,
                        
                    },
                    responseType:'json',
            
                })
                   return form ; 
            },
    postFormLawyerComments : async(companyGovernorate1 , companyCity1 , companyAddress1 , companyName1 , currency1 ,equityCapital1 ,type1 ,creationDate1 ,lawyerComments1,userId1)=>{
                var form = await axios({
                    method:'post',
                    url :'http://localhost:5000/routes/api/users/CreatingForm/'+ userId1 ,
                    data :{
                        companyGovernorate:companyGovernorate1 ,
                        companyCity:companyCity1,
                        companyAddress:companyAddress1,
                        companyName:companyName1,
                        currency:currency1,
                        equityCapital:equityCapital1,
                        type:type1,
                        creationDate:creationDate1,
                        lawyerComments:lawyerComments1,
                        
                    },
                    responseType:'json',
            
                })
                   return form ; 
            },
    getLawyerComments : async (formId)=>{
                const lawyerComments = await axios.get('http://localhost:5000/routes/api/forms/getLawyerComments/'+ formId)
                return lawyerComments
            }
};

        
// };
 //}
 module.exports = functions;
 jest.setTimeout(40000);