 const axios = require('axios');
 const mongoose = require('mongoose')
const Form = require('../Models/ExternalEntity')

const functions =
{
    //creating new entitiy
    postExternalEntity : async(Name1,Equation1,Api1,Email1) => {
       return await axios({
            method :'post',
            url :'http://localhost:5000/routes/api/externalentities/',
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
                   url: 'localhost:5000/routes/api/externalentities/',
                   headers: {'Content-Type': 'application/json'}
                })

    },
    getExternalEntity : async() => {
        const externalentities = await axios.get('http://localhost:5000/routes/api/externalentities/')
        return externalentities
    },
    //getting a certain entity
    getExternalEntityById : async(externalEntityId) => { 
       
        externalentity= await axios({
            method : 'get',
            url:'http://localhost:5000/routes/api/externalentities/'+ externalEntityId
        })
        return externalentity
    },
    //updating a certain entity
    updateExternalEntityByID : async(externalEntityId) =>{
        axios.put('http://localhost:5000/routes/api/externalentities/'+ externalEntityId ,
        {
            Equation:'x+2=4'
        })
        .then(response =>{
        })
        .catch(error => {

        });
    },


    getExternalEntityByName : async(Name) => {
                externalentities = await axios({
                method :'get',
                url:'http://localhost:5000/routes/api/externalentities/getByExternalEntityName/'+Name
                })
                return externalentities
            },
    getExternalEntityByAPI : async(Api) => {
                externalentities = await axios({
                method :'get',
                url:'http://localhost:5000/routes/api/externalentities/getByExternalEntityApi/'+Api
                })
                return externalentities
            }

}
module.exports = functions;
jest.setTimeout(40000);

















