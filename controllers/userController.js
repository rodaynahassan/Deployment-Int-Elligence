const mongoose =require('mongoose')
const User = require('../Models/User')
const validator = require('../Validation/UserValidation')





function compare(a,b){                                                //comparing between creation dates
    if(Date.parse(a.creationDate)>Date.parse(b.creationDate)) return 1;
    
    if(Date.parse(a.creationDate)<Date.parse(b.creationDate)) return -1;

    return 0;
}

exports.create=async function create(body){                          //creating user
    
        var isValidated = undefined
        if(body.userType==='Lawyer'){
             isValidated = validator.createValidationL(body)
        }
        if(body.userType==='Investor'){
             isValidated = validator.createValidationI(body)
        }
        if(body.userType==='Reviewer'){
            isValidated = validator.createValidationR(body)
        }
        if (isValidated.error) return { error: isValidated.error.details[0].message }
     
     const newUser = await User.create(body)
     return  newUser
   
}




exports.remove=async function remove(att,value){                           //delete user

    
        if(att===null){
            return 'there is no user to delete'
        }
        else if(att==='_id'){
   
         const deletedUser = await User.findByIdAndDelete(value)
         return deletedUser
        }
    

        


   
}

 











