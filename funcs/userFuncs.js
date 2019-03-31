const axios = require('axios');
const functions = {
    postLawyer: async (userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,password1,birthdate1,address1,email1) => {
         axios({
            method:'post',
            url:'http://localhost:3000/routes/api/users/register',
            data: {
            userType:userType1,    
            name: name1,
            gender: gender1,
            nationality: nationality1,
            identificationType: identificationType1,
            identificationNumber: identificationNumber1,
            password: password1,
            birthdate: birthdate1,
            address: address1,
            email:email1
            }
            })
        },
    loginLawyer: async (password1,email1) => {
            axios({
               method:'post',
               url:'http://localhost:3000/routes/api/usres/login',
               data: {
               password: password1,
               email:email1
               }
               })
           },
    postInvestor: async (userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,password1,birthdate1,address1,email1,investorType1) => {
            axios({
               method:'post',
               url:'http://localhost:3000/routes/api/users/register',
               data: {
               userType:userType1,    
               name: name1,
               gender: gender1,
               nationality: nationality1,
               identificationType: identificationType1,
               identificationNumber: identificationNumber1,
               password: password1,
               birthdate: birthdate1,
               address: address1,
               email:email1,
               investorType: investorType1
               }
               })
           },
    loginInvestor: async (password1,email1) => {
               axios({
                  method:'post',
                  url:'http://localhost:3000/routes/api/usres/login',
                  data: {
                  password: password1,
                  email:email1
                  }
                  })
              },
    postReviewer: async (userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,password1,birthdate1,address1,email1) => {
                axios({
                   method:'post',
                   url:'http://localhost:3000/routes/api/users/register',
                   data: {
                   userType:userType1,    
                   name: name1,
                   gender: gender1,
                   nationality: nationality1,
                   identificationType: identificationType1,
                   identificationNumber: identificationNumber1,
                   password: password1,
                   birthdate: birthdate1,
                   address: address1,
                   email:email1
                   }
                   })
               },
    loginReviewer: async (password1,email1) => {
                   axios({
                      method:'post',
                      url:'http://localhost:3000/routes/api/usres/login',
                      data: {
                      password: password1,
                      email:email1
                      }
                      })
                  },
    deleteUser: async (DeleteID) => {
            await axios.delete('http://localhost:/routes/api/users/'+ DeleteID)
            
        },
    
    getUsers: async() =>{
                const users = await axios.get('http://localhost:3000/routes/api/users/')
                  return users
            },
        
};
module.exports = functions;

jest.setTimeout(40000);