const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')



const Company = require('../../Models/Company')
const validator = require('../../validations/bookValidations')

//get all companies
router.get('/', async (req,res) => {
    const companies = await Company.find()
    res.json({data: companies})
})
//get a company by id
router.get('/', async (req,res) => {
        const id = req.params.id
        const company = await Company.findOne({id})
        res.json({data: company})
})
//create a company
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newCompany = await Company.create(req.body)
     res.json({msg:'Company was created successfully', data: Company})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


//update a company
 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const company = await Company.findOne({id})
     if(!company) return res.status(404).send({error: 'Company does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedBook = await Book.updateOne(req.body)
     res.json({msg: 'Company updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 
//delete a company
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedCompany= await Company.findByIdAndRemove(id)
     res.json({msg:'Company was deleted successfully', data: deletedCompany})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router
