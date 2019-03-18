const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


const Lawyer = require('../../Models/Lawyer')












// view a certain lawyer
router.get('/:id', async(req, res) => {
    const lawyerid=req.params.id
    const lawyer= await Lawyer.findOne({lawyerid})
    return res.json({ data: lawyer });
})


//get all lawyers
router.get('/', async (req,res) => {
    const Lawyers = await Lawyer.find()
    res.json({data: Lawyers})
})




//create a lawyer
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newLawyer = await Lawyer.create(req.body)
     res.json({msg:'Lawyer was created successfully', data: newLawyer})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


//update a lawyer
 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const lawyer = await Lawyer.findOne({id})
     if(!lawyer) return res.status(404).send({error: 'Lawyer does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedLawyer = await Lawyer.updateOne(req.body)
     res.json({msg: 'Lawyer updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })





//delete a lawyer
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedLawyer = await Lawyer.findByIdAndRemove(id)
     res.json({msg:'Lawyer was deleted successfully', data: deletedLawyer})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })















module.exports = router;









