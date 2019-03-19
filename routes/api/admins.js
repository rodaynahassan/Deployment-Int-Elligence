// Dependencies
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const Case =require ('../../Models/Case');

// Models
const Admin = require('../../Models/Admin');


// Get admins
router.get('/', async (req,res) => {
	const admins = await Admin.find()
	res.json({data: admins})
})

//view case by company Name
router.get('/:companyName', async (req,res) => {
	const casesRequested = await Case.find({companyName})
	res.json({data: casesRequested})
})


// Create a new admin

router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newAdmin = await Admin.create(req.body)
    res.json({msg:'Admin was created successfully', data: newAdmin})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const admin = await Admin.findOne({id})
     if(!admin) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.updateOne(req.body)
     res.json({msg: 'Admin updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.delete('/:id', async (req, res) => {
	try{
    const adminId = req.params.id 
    const deletedAdmin = await Admin.findByIdAndRemove(adminId)
	res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
	}
	catch(error){
		console.log(error)
	}
})



module.exports = router;