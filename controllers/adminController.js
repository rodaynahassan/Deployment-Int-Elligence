const mongoose = require('mongoose');
const Admin = require('../Models/Admin');
const adminValidator = require('../Validation/adminvalidations')

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
    var values=await Admin.findById({att:value})
    return values
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
