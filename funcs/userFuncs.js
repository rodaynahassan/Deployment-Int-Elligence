 const axios = require('axios')
 const mongoose= require('mongoose')

 const User= require('../Models/User')




const functions = {


    createLawyerOrReviewer: async(userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,birthdate1,address1,email1,password1) =>{  
         axios({
            method:'post',
            url:'http://desolate-oasis-18053.herokuapp.com/routes/api/admins/register',
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
            password:password1
           
            }
        })
      
       


    },
//     createInvestor: async(userType1,name1,gender1,nationality1,identificationType1,identificationNumber1,birthdate1,address1,telephone1,fax1,email1,password1) =>{  
//         axios({
//            method:'post',
//            url:'http://desolate-oasis-18053.herokuapp.com/routes/api/users/register',
//            data:{ userType:userType1,
//            name: name1,
//            gender:gender1 ,
//            nationality:nationality1 ,
//            identificationType:identificationType1 ,
//            identificationNumber: identificationNumber1 ,
//            birthdate: birthdate1,
//            address:address1 ,
//            telephone:telephone1,
//            fax:fax1,
//           // cases: ,
//            email: email1 ,
//            password:password1,
//            //lawyer: ,
//            //investorType: ,
//            //financialBalance:}
//            }
//        })
      


//    },
    
    
    DeleteUser: async(deleteID) =>{  
        
        const user= await axios.delete('http://desolate-oasis-18053.herokuapp.com/routes/api/users/'+deleteID)
        return user

    },

    getUsers : async() => {

        users= await axios({
            method : 'get',
            url:'http://desolate-oasis-18053.herokuapp.com/routes/api/users/'

        })
        return users
    },


    getUserById : async(UserId) => {

        user= await axios({
            method : 'get',
            url:'http://desolate-oasis-18053.herokuapp.com/routes/api/users/'+UserId
        })
        return user
    }

 
};


jest.setTimeout(40000)





module.exports = functions;