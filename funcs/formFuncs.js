const axios = require('axios');

const functions = {
    postForm: async(formType1 , companyName1 , companyNameInEnglish1 , companyGovernorate1 , companyCity1 ,companyAddress1 ,companyTelephone1,companyFax1,currency1,investorNationality1,equityCapital1)=>{
        return await axios({
            method:'post',
            url:'http://localhost:5000/routes/api/dynamicForms/',
            data: {
              formType: formType1,
              companyName: companyName1,
              companyNameInEnglish: companyNameInEnglish1,
              companyGovernorate: companyGovernorate1,
              companyCity: companyCity1,
              companyAddress: companyAddress1,
              companyTelephone: companyTelephone1,
              companyFax: companyFax1,
              currency: currency1,
              investorNationality: investorNationality1,
              equityCapital: equityCapital1
              },
              responseType: 'json',
            })
            .then(res => {
              return res;
            })
            .catch(err => {
              return { error: err };
            });
    },
    getForms: async() =>{
        return await axios.get('http://localhost:5000/routes/api/dynamicForms/')
        .then(res => {
            return res;
          })
          .catch(err => {
            return { error: err };
          });
    },
    deleteForm: async (DeleteID) => {
            return await axios.delete('http://localhost:5000/routes/api/dynamicForms/'+ DeleteID )
            .then(res => {
                return res;
              })
              .catch(err => {
                return { error: err };
              });
    }
        };

        
// };
 //}
 module.exports = functions;
 jest.setTimeout(40000);