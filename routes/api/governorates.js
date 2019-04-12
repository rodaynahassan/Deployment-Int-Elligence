const express = require('express');
const router = express.Router();
const Governorate= require('../../Models/Governorate');
const governorateController = require('../../controllers/governorateController')


//Regarding the drop down list

//get all governorates
router.get('/', async (req,res) => {
    const governorates = await Governorate.find()
    res.json({data: governorates})
})
//get all governoratesCities
router.get('/getByGovernorateName/:id', async (req,res) => {
    const id = req.params.id
    const govRequested = await governorateController.search('_id',id)
    var x = govRequested.cities
   return res.json({data: x})
})

//create a new governorate
router.post('/', async (req,res) => {
    try {
     const newGovernorate = await Governorate.create(req.body)
     res.json({msg:'Governorate was created successfully', data: newGovernorate})
    }
    catch(error) {
        console.log(error)
    }  
 })
 router.put('/:id', async (req,res) => {
    try {
        const governorates = await Governorate.find()
     res.json({msg:'Governorate was created successfully', data: newGovernorate})
    }
    catch(error) {
        console.log(error)
    }  
 })
 
 //delete a certain governorate
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedGovernorate = await Governorate.findByIdAndRemove(id)
     res.json({msg:'Governorate was deleted successfully', data: deletedGovernorate})
    }
    catch(error) {
        console.log(error)
    }  
})
module.exports = router;
