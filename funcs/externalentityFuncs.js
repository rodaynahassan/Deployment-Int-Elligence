const axios = require('axios')
const mongoose = require('mongoose')
const Form = require('../Models/ExternalEntity')
const functions =
{
    postExternalEntity : async(Name1,Equation1,Api1,Email1) => {
        axios({
            method :'post',
            url :'http://localhost:3000/routes/api/externalentities/',
            data:{
                Name : Name1,
                Equation : Equation1,
                Api : Api1,
                Email : Email1
            }
        })
    },
    getExternalEntity : async() => {
        const externalentities = await axios.get('http://localhost:3000/routes/api/externalentities/')
        return externalentities
    },
    getExternalEntityByName : async(Name) => {
        externalentities = await axios({
        method :'get',
        url:'http://localhost:3000/routes/api/externalentities/getByExternalEntityName/'+Name
        })
        return externalentities
    },
    getExternalEntityByAPI : async(Api) => {
        externalentities = await axios({
        method :'get',
        url:'http://localhost:3000/routes/api/externalentities/getByExternalEntityApi/'+Api
        })
        return externalentities
    }

    

}

module.exports = functions
jest.setTimeout(40000);















module.exports = functions ;
jest.setTimeout(40000);