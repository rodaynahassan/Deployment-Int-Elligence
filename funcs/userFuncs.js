// const funcs= require('./funcs/userFuncs')
const axios = require('axios')
const mongoose= require('mongoose')
const User= require('../Models/User')





const functions = {


   CreateReviewerOrLawyer: async(userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,birthdate1,address1,email1,password1) =>{  
           await axios({
            method:'post',
            url:'http://localhost:5000/routes/api/admins/register',
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
            url:'http://localhost:5000/routes/api/admins/register',
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
        await axios({
           method:'post',
           url:'http://localhost:5000/routes/api/users/register',
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
           email: email1 ,
           password:password1
           }

       })
      
   },

   GetAllUsers : async() => {   // get all users

       users= await axios({
           method : 'get',
           url:'http://localhost:5000/routes/api/users/'
       })
       return users
   },


   GetUserById : async(UserId) => {    // get certain user
       
       user= await axios({
           method : 'get',
           url:'http://localhost:5000/routes/api/users/'+ UserId
       })
       return user
   },

   CreateInvestor: async(userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,birthdate1,address1,email1,password1,financialBalance1) =>{  
    await axios({
       method:'post',
       url:'http://localhost:5000/routes/api/users/register',
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
        url : 'http://localhost:5000/routes/api/users/' + UserId,
        data: {

            name: 'ALI EL SEBAIE2',
            nationality:'Masry',
        }
      
    
    })
   
  
},

UpdateFormInUser: async(UserId,FormId) =>{     // update a form in a certain user
    return await axios({
        method:'put',
        url : 'http://localhost:5000/routes/api/users/' + UserId + '/' + FormId,
        data: {
            companyName: 'sebaie200 company',
            companyNameInEnglish: 'Irish comp'
        }
    })
  
},
           
    
    DeleteUser: async(deleteID) =>{   
        const user= await axios.delete('http://localhost:5000/routes/api/users/'+deleteID)
       
        //const user= await axios.delete('http://desolate-oasis-18053.herokuapp.com/routes/api/users/'+deleteID)
        return user

    },


    GetFormById : async(FormId) => {    // get certain form
       
        form = await axios({
            method : 'get',
            url:'http://localhost:5000/routes/api/forms/'+ FormId
        })
    
        return form 
    },
    
    
    GetAllForms : async() => {   // get all forms
    
        forms= await axios({
            method : 'get',
            url:'http://localhost:5000/routes/api/forms/'
        })
        return forms
    },
    
};



jest.setTimeout(40000)
module.exports = functions;