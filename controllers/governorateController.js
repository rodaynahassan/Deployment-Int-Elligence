const mongoose = require('mongoose');
const Governorate = require('../Models/Governorate');



exports.search=async function search (att,value)
{
    if (!att)
    {
        var governorates=await Governorate.find()
        return governorates
    }
    if (att==='name')
    {
        var certainGovernorate=await Governorate.find({'name':value})
        return certainGovernorate[0]
    }
 
}
