const axios = require('axios');

const functions = {
    postForm: async(companyGovernorate1 , companyCity1 , companyAddress1 , companyName1 , currency1 ,equityCapital1 ,type1 ,creationDate1 ,userId1)=>{
            var form = await axios({
                method:'post',
                url:'http://localhost:3000/routes/api/forms/',
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
    getForms: async() =>{
        const forms= await axios.get('http://localhost:3000/routes/api/forms/')
        return forms 
    },
    deleteForm: async (DeleteID) => {
                   const form = await axios.delete('http://localhost:3000/routes/api/forms/'+ DeleteID )
                  return form
              },
    GetFormById : async(FormID) => {    // get certain form
       
                form= await axios({
                    method : 'get',
                    url:'http://localhost:3000/routes/api/forms/'+ FormID
                })
                return form
            }
};

        
// };
 //}
 module.exports = functions;
 jest.setTimeout(40000);