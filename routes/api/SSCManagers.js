const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const SSCManager = require('../../Models/Form');
const validator = require('../../validations/SSCManagerValidations')

// Get all users

router.get('/',async(req,res) =>{
  const SSCManagers = await Form.find()
  res.json({data:SSCManagers})
})

  router.get('/:id',async(req,res) =>{
    const id = req.params.id
    const SSCManagers = await Form.findOne({id})
    res.json({data:SSCManagers})
  })



router.post('/', async (req,res) => {
  try {
   const isValidated = validator.createValidationSSCManagers(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const newSSCManager = await Form.create(req.body)
   res.json({msg:'SSCManager is created successfully', data: newSSCManager})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
    
// Update 

router.put('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const SSCManager = await Form.findOne({id})
   if(!SSCManager) return res.status(404).send({error: 'SSCManager does not exist'})
   const isValidated = validator.updateValidationSSCManagers(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updatedSSCManager = await Form.updateOne(req.body)
   res.json({msg: 'SSCManager updated successfully'})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})


// // Delete a Manager

router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedSSCManager= await Form.findByIdAndRemove(id)
   res.json({msg:'SSC Manager was deleted successfully', data: deletedSSCManager})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})


module.exports = router;