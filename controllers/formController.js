const mongoose = require('mongoose')
const Form = require('../Models/Form')
const validator = require('../Validation/formValidations')

exports.search=async function search(att,value)
{
    if(!att)
   {
    const values  = await Form.find()
     return values
   }
   if (att==='_id')
   {
       var values= await Form.findById(value)
        return values

   }
   

}

exports.remove=async function remove(att,value)
{
    if(!att)
    {
      return null
    }
    if (att==='_id')
    {
        var deletedForm= await Form.findByIdAndDelete(value)
         return deletedForm
 
    }


}
