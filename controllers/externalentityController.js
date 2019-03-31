const mongoose = require('mongoose')
//const Form = require('../Models/ExternalEntity')
const validator = require('../Validation/externalentityValidations')
const ExternalEntity = require('../Models/ExternalEntity')
//Searching for external entity (GAFI , Notary Public,Commercial Register)
exports.search=async function search(att,value)
{
    if(!att)
   {
    var values  = await ExternalEntity.find()
     return values
   }
   if (att==='_id')
   {
       var values= await ExternalEntity.findById(value)
        return values
   }
   if(att ==='Name')
    {
    var values=await ExternalEntity.find({'Name':value})
    return values
    }
    if(att ==='Api')
    {
    var values=await ExternalEntity.find({'Api':value})
    return values
    }

}
//create external entity
exports.create=async function create(body)
{
    try{
        const isExternalEntityValidated=validator.createValidation(body)
        if(isExternalEntityValidated.error) return {error:isExternalEntityValidated.error.details[0].message}
        const newExternalEntity =await ExternalEntity.create(body)
        return newExternalEntity
       }
    catch(error)
    {
        console.log(error)
    }
}

//update external entity 
exports.update=async function update(att,value,body)
{
   var isValidated=undefined
   isValidated=validator.updateValidation(body)
   if(isValidated.error) return {error:isValidated.error.details[0].message}
   if(!att)
   {
       return null
   }
 if(att==='id')  
 {
     const externalentity=await ExternalEntity.findByIdAndUpdate(value,body)
     return externalentity
 }
 else
 {
    const externalentities=await ExternalEntity.updateMany(value,body)
    return externalentities
 }
}

// delete external entiity
exports.remove=async function remove(att,value)
{
    if(!att)
    {
      return null
    }
    if (att==='_id')
    {
        var deletedExternalEntity= await ExternalEntity.findByIdAndDelete(value)
         return deletedExternalEntity
    }
}