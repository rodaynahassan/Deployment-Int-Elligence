const mongoose = require('mongoose');
const Admin = require('../../Models/Admin');
const adminValidator = require('../../Validation/adminValidations');

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
        const  admin= await Admin.findByIdAndDelete(value,body)
        return admin
    }
    else{
        const  admins = await Admin.deleteMany({ att: value },body)
        return admins
    }
}
