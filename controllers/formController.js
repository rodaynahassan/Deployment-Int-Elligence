const mongoose = require('mongoose')
const Form = require('../Models/Form')
const validator = require('../Validation/formValidations')
const User = require('../Models/User')

//Creating
exports.create = async function create(body)
{
    try 
    {
        if(body.type==='SSCForm')
        {
            //var found=false;
            const userId=body.userId;
            const form=await Form.findOne({userId})
            if (form!==null)
            return {error: 'Sorry you have already created a SSC Company before'}
            else{
            const SpecificUser= User.findById(userId)
            if (SpecificUser.nationality ==='Egyptian')   
            {
                for(i=0;i<body.SSCManagers.length;i++)
            {
                const SSCMValidated=validator.createValidationSSCManagers(body.SSCManagers[i])
                if(SSCMValidated.error)
                {       
                    return {error: SSCMValidated.error.details[0].message}
                }
            }
              
        }   
        else{
            for(j=0;j<body.SSCManagers.length;j++)
            {
                const SSCMValidated=validator.createValidationSSCManagers(body.SSCManagers[j])
                if(SSCMValidated.error)
                {       
                    return {error: SSCMValidated.error.details[0].message}
                }
                if(body.SSCManagers[j].nationality==='Egyptian'){
                    found=true;
                }
            }
            if (!found)
            {
                return {error: 'You must have an egyptian manager'}  
            }

            
        }
        const isValidated = validator.createValidationSSC(body)
            if (isValidated.error)
            {
                return "There is sth worong with your entries"
            } 
            const newSSCForm = await Form.create(body)
            return newSSCForm
    }
    }
             
        if(body.type==='SPCForm')
        {
            const isValidated = validator.createValidationSPC(body)
            if (isValidated.error) 
            {
                return {error: isValidated.error.details[0].message}
            }
            const newSPCForm = await Form.create(body)   
            return newSPCForm
        }
    }
    catch(error) 
    {
        console.log(error)
    }
}

//Updating
exports.update = async function update(att,value,body)
{
    try {
        if(!att)
        {
            return null
        }
        if(att==='_id')
        {
            const form = await Form.findById(value)
            if(form.type==='SSCForm')
            {
                if(!form)
                {
                    return {error: 'SSC Form does not exist'}
                } 
                const isValidated = validator.updateValidationSSC(body)
                if (isValidated.error) 
                {   
                    return {error: isValidated.error.details[0].message}
                }
                const x = await Form.findByIdAndUpdate(value,body)
                const updatedSSC = await Form.findById(value)
                return updatedSSC
            }
           if(form.type==='SPCForm')
           {
               if(!form) 
               {
                   return {error: 'SPC Form does not exist'}
               }
               const isValidated = validator.updateValidationSPC(body)
               if (isValidated.error) 
               {
                   return {error: isValidated.error.details[0].message}
               }
               const x = await Form.findByIdAndUpdate(value,body)
               const updatedSPC = await Form.findById(value)
               return updatedSPC
            }
            return {error: 'Form does not exist'}
            }
       }
       catch(error) 
       {
           console.log(error)
       }  
}

//Searching
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
   if(att ==='status')
    {
        var values=await Form.find({'status':value})
        return values
    }
   
   if(att ==='companyName')
    {
    var values=await Form.find({'companyName':value})
    return values
    }
    
    
   
}
//Deleting
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
