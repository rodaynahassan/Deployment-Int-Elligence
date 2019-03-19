const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Form = require('../../Models/Form')
const validator = require('../../validations/formValidations')

//get all companies
//el moshkela hena f get all 
router.get('/', async (req,res) => {
    const forms  = await Form.fin
    res.json({data: companies})
})
//get a company by id
router.get('/:id', async (req,res) => {
        const id = req.params.id
        const form = await Form.findOne({id})
        res.json({data: form})
})
//create a company
router.post('/', async (req,res) => {
    try {
        if(req.body.type==='SSCForm'){
     const isValidated = validator. createValidationSSC(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newSSCForm = await Form.create(req.body)
     res.json({msg:'SSC Form was created successfully', data:Form})
    }
    if(req.body.type==='SPCForm'){
        const isValidated = validator. createValidationSPC(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newSPCForm = await Form.create(req.body)
        res.json({msg:'SPC Form was created successfully', data:Form})
       }
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
      } 

    })

    module.exports = router