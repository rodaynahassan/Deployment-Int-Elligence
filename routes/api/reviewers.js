
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Reviewer = require('../../models/Reviewer');
const validator = require('../../validations/ReviewerValidations')



// Create a reviewer 
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newReviewer = await Reviewer.create(req.body)
     res.json({msg:'Reviewer was created successfully', data: newReviewer})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


// View Reviewers
 router.get('/', async (req,res) => {  // View all
    const Reviewers = await Reviewer.find()
    res.json({data: Reviewers})
})

router.get('/:id', (req, res) => { // View by ID
    const revid = req.params.id  
    const Reviewers = await Reviewer.findOne({revid})
    res.json({data: Reviewers})
})




// Update a Reviewer
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const reviewer = await Reviewer.findOne({id})
     if(!reviewer) return res.status(404).send({error: 'Reviewer does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedReviewer = await Reviewer.updateOne(req.body)
     res.json({msg: 'Reviewer updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })




// Delete  
router.delete('/:id', (req, res) => {
    const ReviewerID = req.params.id 
    const Reviewer = Reviewers.find(Reviewer => Reviewer.id === ReviewerID)
    const index = Reviewers.indexOf(Reviewer)
    Reviewers.splice(index,1)
    res.json({ data: Reviewers })
})

// Delete 
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedReviewer = await Reviewer.findByIdAndRemove(id)
     res.json({msg:'Reviewer was deleted successfully', data: deletedReviewer})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

    module.exports = router


