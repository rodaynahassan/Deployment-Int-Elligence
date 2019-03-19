const express = require('express');
const router = express.Router();
//const Joi = require('joi');
//const uuid = require('uuid');
const validator = require('../../Validation/caseValidations')
const mongoose = require('mongoose')
const Case = require('../../Models/Case')


//get all cases
router.get('/', async (req,res) => {
    const cases = await Case.find()
    res.json({data: cases})
})


//get a case
router.get('/:id', async (req,res) => {
    const id=req.params.id
    const cases = await Case.findOne({id})
    res.json({data: cases})
})

//View Reviewer's comments
router.get('/:id', async(req, res)=>{
    const caseId = req.params.id
    const caseComment = await Case.findOne({caseId})
    var arrayReviewerComments = caseComment.reviewerComments
    return res.json({ data: arrayReviewerComments});

})

//create new case
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newCase = await Case.create(req.body)
     res.json({msg:'Case was created successfully', data: newCase})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })



//update a case
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const newCase = await Case.findOne({id})
     if(!newCase) return res.status(404).send({error: 'Case does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedCase = await Case.updateOne(req.body)
     res.json({msg: 'Case updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


//delete a case
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedCase = await Case.findByIdAndRemove(id)
     res.json({msg:'case was deleted successfully', data: deletedCase})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router;
