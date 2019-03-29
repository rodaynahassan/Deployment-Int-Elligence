const mongoose = require('mongoose');
const Admin = require('../Models/Admin');
const adminValidator = require('../Validation/adminvalidations')
const userValidator = require('../Validation/UserValidation')
const User = require('../Models/User')
const bcrypt = require('bcrypt');


exports.search=async function search (att,value)
{
    if (!att)
    {
        var admins=await Admin.find()
        return admins
    }
    if (att==='id')
    {
        var certainAdmin=await Admin.findById(value)
        return certainAdmin
    }
}
exports.create=async function create(body)
{
    try
    {
      const isAdminValidated=adminValidator.createValidation(body)
      if (isAdminValidated.error) return {error:isAdminValidated.error.details[0].message}
      const newAdmin=await Admin.create(body)
      return newAdmin


    }
    catch (error) 
    {
        console.log(error)
    }
}


exports.update = async function update(att,value,body){
    var isValidated = undefined
    isValidated = adminValidator.updateValidation(body)
    if(isValidated.error) return {error: isValidated.error.details[0].message}
    if(!att){
        return null
    }
    if(att==='id'){
        
        const  admin= await Admin.findByIdAndUpdate(value,body)
        return admin
    }
    else{
        const  admins = await Admin.updateMany({ att: value },body)
        return admins
    }
    

}
exports.remove = async function remove(att,value){
    if(!att){
        return null
    }
    if(att==='id'){
        const  admin= await Admin.findByIdAndDelete(value)
        return admin
    }
    else{
        const  admins = await Admin.deleteMany({ att: value })
        return admins
    }
}


//sort cases by ID
exports.compareById = function compareById(a,b){
    if(a._id < b._id) return -1
    if(b._id < a._id) return 1
    
    return 0
}

//View the sorted cases by date
exports.compare = function compare(a,b){
    if(Date.parse(a.creationDate)>Date.parse(b.creationDate)) return 1
    if(Date.parse(a.creationDate)<Date.parse(b.creationDate)) return -1
    return 0
}


// exports.createLawyerOrReviewer=async function createLawyerOrReviewer(body){                          //creating Lawyer or Reviewer
    
//     var isValidated = undefined
//     if(body.userType==='Lawyer'){
//          isValidated = validator.createValidationL(body)
//     }
//     if(body.userType==='Reviewer'){
//         isValidated = validator.createValidationR(body)
//     }
//     if (isValidated.error) return { error: isValidated.error.details[0].message }
 
//  const newUser = await User.create(body)
//  return  newUser
// }



exports.registerLawyerOrReviewer=async function registerLawyerOrReviewer(body){                      //creating Lawyer or Reviewer
    const { error1 } = userValidator.createValidationL(body)            
    const { error2 } = userValidator.createValidationR(body)
    if (error1) {
        return error1.details[0].message;
    }
    if (error2){
        return error2.details[0].message;
    }
    let user = await User.findOne({ email: body.email });
    // const user = await User.findOne({body:email})
    if(user) return {error: 'Account already exists'}
    
   
    const newUser = await User.create(body)
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();

    
    return newUser
}




