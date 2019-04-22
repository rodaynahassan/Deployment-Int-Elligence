const axios = require('axios');

const functions = {
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