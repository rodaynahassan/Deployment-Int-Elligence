const mongoose = require('mongoose');
const User = require('../Models/User')
const validator = require('../Validation/UserValidation')





exports.compareByDate=function compareByDate(a,b){                                                //comparing between creation dates
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


   
exports.search = async function search(att ,value ){  // Search users
    if(att === null){
     var values = await User.find()
     return values
    }
    
    if(att === '_id'){
        var values = await User.findById(value)
        return values
    }

    var values = User.find({att:value})
    return values

}


exports.update = async function update(att, value, body){  // Update Users
   
    try {
        if(! att ) 
        return null

        if(body.userType==='Lawyer'){
             const isValidated = validator.updateValidationL(body)
             if (isValidated.error) return { error: isValidated.error.details[0].message }
        }
        if(body.userType==='Investor'){
            const isValidated = validator.updateValidationI(body)
             if (isValidated.error) return { error: isValidated.error.details[0].message }
        }
        if(body.userType==='Reviewer'){
           const isValidated = validator.updateValidationR(body)
            if (isValidated.error) return { error: isValidated.error.details[0].message }
       }
       if(att ==='_id' ){
        var updatedUser = await User.findByIdAndUpdate(value,body)
        var x = await User.findById(value)
        return x
       }
       var updatedUser = User.updateMany({att:value},body)
       var x = await User.findById(value)
       return x
       }
      
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }



      exports.compareById = async function compareById(a , b){  // for sorting the cses by caseID
        if(a._id > b._id )
        return 1;
        
        if(b._id > a._id )
        return -1;
        
        return 0;
        
        }

   
}











