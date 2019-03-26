const mongoose = require('mongoose');
const Admin = require('../Models/Admin');
const adminValidator = require('../Validation/adminvalidations')
const Case = require('../Models/Case');

exports.create=async function search (att,value)
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
      var isAdminValidated=adminValidator.createValidation(req.body)
      if (isAdminValidated.error) return {error:isAdminValidated.error.details[0].message}
      const newAdmin=await Admin.create(req.body)
      return newAdmin


    }
    catch (error) 
    {
        console.log(error)
    }
}
