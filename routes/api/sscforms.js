const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const SSCForm = require('../../Models/SSCForm')
const validator=require('../../validations/sscformValidation')

// GET ALL SSC FORMS
router.get('/', async (req,res) => {
    const sscforms = await SSCForm.find()
    res.json({data: sscforms})
})

// GET SSC FORM BY ID
router.get('/', async (req,res) => {
    const id=req.params.id
    const sscform = await SSCForm.findOne({id})
    res.json({data: sscform})
})

// Create a new SSCForm
router.post('/', async (req, res) => {
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newSSCForm = await SSCForm.create(req.body)
        res.json({msg:'SSCForm was created successfully', data: newSSCForm})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    })
//Update SSC Form
    router.put('/:id', async (req,res) => {
        try {
         const id = req.params.id
         const SSCForm = await SSCForm.findOne({id})
         if(!SSCForm) return res.status(404).send({error: 'SSCForm does not exist'})
         const isValidated = validator.updateValidation(req.body)
         if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
         const updatedSSCForm = await SSCForm.updateOne(req.body)
         res.json({msg: 'SSCForm updated successfully'})
        }
        catch(error) {
            // We will be handling the error later
            console.log(error)
        }  
    })

    
   // Delete SSC form
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedSSCForm = await SSCForm.findByIdAndRemove(id)
     res.json({msg:'SSCForm was deleted successfully', data: deletedSSCForm})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
})

module.exports = router;

