<<<<<<< HEAD
const axios = require('axios');

const functions = {
        GetUsers: async () => {

            const users = await axios.get('http://desolate-oasis-18053.herokuapp.com/routes/api/users')
            return users
            
        }
        
};
module.exports = functions;

jest.setTimeout(30000);
=======
// const funcs= require('./funcs/userFuncs')
 const mongoose= require('mongoose')
 const User= require('../Models/User')
const axios = require('axios')




const functions = {
    createUser: async() =>{  
        axios({
            method:'post',
            url:'http://desolate-oasis-18053.herokuapp.com/routes/api/admins/register',
            data:{ userType:"Lawyer",
            name: "Mohamed" ,
            gender:"male" ,
            nationality:"Egyptian" ,
            identificationType:"national ID" ,
            identificationNumber: "123332233838" ,
            birthdate: "1998-08-26",
            address:"zahraa el maddi" ,
            telephone:"01002992990",
            fax:"2299292992",
           // cases: ,
            email: "mohamed@gmail.com" ,
            password:"27772882",
            //lawyer: ,
            //investorType: ,
            //financialBalance:}
            }
        })
        const user=await axios.get('http://desolate-oasis-18053.herokuapp.com/routes/api/users/register')  
        return user


    } 
    
    
    // getBooks: async () => {
    // const books = await axios.get('http://localhost:3000/api/books/')
    // return books
    // }
    
};








module.exports = functions;
>>>>>>> 5ad6db6a8635f45344fe8897002336bd770df620
