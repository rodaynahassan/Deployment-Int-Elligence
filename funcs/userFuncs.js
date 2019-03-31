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
        },


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
