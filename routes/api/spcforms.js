const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const SPCForm = require('../../Models/SPCForm')
const validator = require('../../validations/spcformValidations')

//Create SPCForm
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const spcform = await SPCForm.create(req.body)
     res.json({msg:'SPCForm was created successfully', data: spcform})
    }
    catch(error) {
        console.log(error)
    }  
 })

//Read all SPCForms
router.get('/', async (req,res) => {
    const spcform = await SPCForm.find()
    res.json({data: spcform})
})

//Read a Certain SPCForm
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const spcform = await SPCForm.findOne({id})
    res.json({ data: spcform })
})

//Update SPCForm
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const spcform = await SPCForm.findOne({id})
     if(!spcform) return res.status(404).send({error: 'SPCForm does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedSPCForm = await SPCForm.updateOne(req.body)
     res.json({msg: 'SPCForm updated successfully'})
    }
    catch(error) {
        console.log(error)
    }  
 })

//Delete SPCForm
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const spcform = await SPCForm.findByIdAndRemove(id)
     res.json({msg:'SPCForm was deleted successfully', data: spcform})
    }
    catch(error) {
        console.log(error)
    }  
 })

module.exports = router