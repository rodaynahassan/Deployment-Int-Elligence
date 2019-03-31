const validator = require('../Validation/caseValidations')
const mongoose = require('mongoose')
const Case = require('../Models/Case')


//create a new case controller 
exports.create=async function create (body)
{
   
    try 
    {
        const isValidated= validator.createValidation(body)
        if (isValidated.error)
        {
            return {error: isValidated.error.details[0].message}
        }

        const newCase = await Case.create(body)
        return newCase 
      
     }
     
       catch(error) {
          
           console.log(error)
       }  
}
//update case controller 
exports.update=async function update (att , value, body)
{
    try
  {
      const isValidated= validator.updateValidation(body)
      if (isValidated.error)
      {
          return {error: isValidated.error.details[0].message}
      }

    if(!att)
    {
        return null 
    }
    if (att==='id')
    {
        const x = await Case.findByIdAndUpdate(value,body)
        const updatedCase = await Case.findById(value)
        return updatedCase
    }

   }
      catch(error) 
      {
           console.log(error)
       }
       
    }
//get the cases
exports.search = async function search(att , value)
{
    if(!att)
    {
        var values=await Case.find()
        return values
    }
    if(att==='_id')
    {
        var values=await Case.findById(value)
        return values
    }
    if(att ==='companyName')
    {
    var values=await Case.find({'companyName':value})
    return values
    }
}

//delete the cases
exports.remove = async function remove(att , value)
{
    if(!att)
    {
       return 'There is no Case to delete'
    }
    if(att==='_id')
    {
        var deletedCase = await Case.findByIdAndDelete(value)
        return deletedCase
    }
    

}




