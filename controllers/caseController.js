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
