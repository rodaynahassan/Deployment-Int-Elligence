const validator = require('../Validation/caseValidations')
const mongoose = require('mongoose')
const Case = require('../Models/Case')

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
