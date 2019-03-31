 const axios = require('axios');

const functions =
{
    postExternalEntity : async(Name1,Equation1,Api1) => {
        axios({
            method :'post',
            url :'localhost:3000/routes/api/externalentities',
            data:{
                Name : Name1,
                Equation : Equation1,
                Api : Api1,
                Email:Email1
            }
        })
    },
    deleteExternalEntity: async()=>{
                return axios({
                   method: 'delete',
                   url: 'localhost:3000/routes/api/externalentities/',
                   headers: {'Content-Type': 'application/json'}
                })

    },
     getExternalEntities: ()=>{
                        return axios({
                        method:'get',
                        url: 'localhost:3000/routes/api/externalentities',
                        headers: {'Content-Type': 'application/json'}
             });
                    
    
    
    


            }
        }
    
    
 module.exports = functions;
jest.setTimeout(40000);
