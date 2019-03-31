// const funcs= require('./funcs/userFuncs')
const axios = require('axios')
const mongoose= require('mongoose')
const User= require('../Models/User')

const functions = {
   CreateReviewerOrLawyer: async(userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,birthdate1,address1,email1,password1) =>{  
           await axios({
            method:'post',
            url:'http://localhost:3000/routes/api/admins/register',
            //url:'http://desolate-oasis-18053.herokuapp.com/routes/api/admins/register',
            data:{ 
            userType:userType1,
            name: name1,
            gender:gender1 ,
            nationality:nationality1 ,
            identificationType:identificationType1 ,
            identificationNumber: identificationNumber1 ,
            birthdate: birthdate1,
            address:address1 ,
            email:email1,
            password:password1,
           
            }
        })
    },    
    createLawyerOrReviewer: async(userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,birthdate1,address1,email1,password1,telephone1) =>{  
         await axios({
            method:'post',
            url:'http://localhost:3000/routes/api/admins/register',
            //url:'http://desolate-oasis-18053.herokuapp.com/routes/api/admins/register',
            data:{ 
            userType:userType1,
            name: name1,
            gender:gender1 ,
            nationality:nationality1 ,
            identificationType:identificationType1 ,
            identificationNumber: identificationNumber1 ,
            birthdate: birthdate1,
            address:address1 ,
            email:email1,
            password:password1,
            telephone:telephone1     
            }
        })  
    },
    createInvestor: async(userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,birthdate1,address1,email1,password1) =>{  
        var user = await axios({
           method:'post',
           url:'http://localhost:3000/routes/api/users/register',
           data:{ 
           userType:userType1,
           name: name1,
           gender:gender1 ,
           nationality:nationality1 ,
           identificationType:identificationType1 ,
           identificationNumber: identificationNumber1 ,
           birthdate: birthdate1,
           address:address1 ,
           email: email1 ,
           password:password1
           }
    
       })
      return user
    },
    postFormForUser: async(companyGovernorate1 , companyCity1 , companyAddress1 , companyName1 , currency1 ,equityCapital1 ,type1,status1 ,creationDate1 ,userId1)=>{
        var form = await axios({
            method:'post',
            url:'http://localhost:3000/routes/api/users/CreatingForm/'+ userId1,
            data: {
                companyGovernorate:companyGovernorate1 ,
                companyCity:companyCity1,
                companyAddress:companyAddress1,
                companyName:companyName1,
                currency:currency1,
                equityCapital:equityCapital1,
                type:type1,
                status:status1,
                creationDate:creationDate1
              },
              responseType: 'json',
            })
            return form;
    },
    getAllForms: async() =>{
            const forms = await axios.get('http://localhost:3000/routes/api/forms/')
                return forms
        },
    getFormByID: async(FormID) =>{
            const form = await axios({
                method:'get',
                url:'http://localhost:3000/routes/api/forms/'+FormID
                })
            return form
        },
    getCompanyOfAnInvestor: async(userID) =>{
            const form =  await axios({
                method:'get',
                url:'http://localhost:3000/routes/api/users/getApprovedCompanies/'+userID
                })
            return form
        },
    getInProgressCase: async(userID) =>{
            const form =  await axios({
                method:'get',
                url:'http://localhost:3000/routes/api/users/getInProgressCases/'+userID
            })
            return form
    },
    postLawyer: async (userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,password1,birthdate1,address1,email1) => {
        await axios({
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
        await axios({
               method:'post',
               url:'http://localhost:3000/routes/api/usres/login',
               data: {
               password: password1,
               email:email1
               }
               })
           },
    loginInvestor: async (password1,email1) => {
        await axios({
                  method:'post',
                  url:'http://localhost:3000/routes/api/usres/login',
                  data: {
                  password: password1,
                  email:email1
                  }
                  })
              },
    postReviewer: async (userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,password1,birthdate1,address1,email1) => {
        await axios({
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
        await axios({
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
   getAllUsers : async() => {   // get all users

       users= await axios({
           method : 'get',
           url:'http://localhost:3000/routes/api/users/'
       })
       return users
   },


   getUserById : async(UserId) => {    // get certain user
       
       user= await axios({
           method : 'get',
           url:'http://localhost:3000/routes/api/users/'+ UserId
       })
       return user
   },

   CreateInvestor: async(userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,birthdate1,address1,email1,password1,financialBalance1) =>{  
    await axios({
       method:'post',
       url:'http://localhost:3000/routes/api/users/register',
       data:{ 
       userType:userType1,
       name: name1,
       gender:gender1 ,
       nationality:nationality1 ,
       identificationType:identificationType1 ,
       identificationNumber: identificationNumber1 ,
       birthdate: birthdate1,
       address:address1 ,
       email: email1 ,
       password:password1,
       financialBalance : financialBalance1
       }

   })
  
},

UpdateUser: async(UserId) =>{     // update a certain user
    return await axios({
        method:'put',
        url : 'http://localhost:3000/routes/api/users/' + UserId,
        data: {

            name: 'ALI EL SEBAIE2',
            nationality:'Masry',
        }
      
    
    })
   
  
},

UpdateFormInUser: async(UserId,FormId) =>{     // update a form in a certain user
    return await axios({
        method:'put',
        url : 'http://localhost:3000/routes/api/users/' + UserId + '/' + FormId,
        data: {
            companyName: 'sebaie200 company',
            companyNameInEnglish: 'Irish comp'
        }
    })
  
}
    
};



jest.setTimeout(40000)
module.exports = functions;
