const mongoose = require('mongoose');
const Governorate = require('../Models/Governorate');



exports.search=async function search (att,value)
{
    if (!att)
    {
        var governorates=await Governorate.find()
        return governorates
    }
    if (att==='_id')
    {
        var certainGovernorate=await Governorate.findById(value)
        return certainGovernorate
    }
 
}
