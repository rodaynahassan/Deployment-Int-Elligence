const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Form = require('../../Models/Form')
const validator = require('../../Validation/formValidations')
const controller = require('../../controllers/formController')

//get all forms
router.get('/', async (req,res) => {
    const forms  = await controller.search()
    return res.json({data:forms})
})
//get company aka status=approved
router.get('/getApprovedCompany', async (req,res) => {
    const form = await Controller.search('status','Approved')
    return res.json({data:form})  
})
//get rejected form
router.get('/getRejectedCompany', async (req,res) => {
    const form = await controller.search('status','Rejected')
    return res.json({data:form})
})
//get In progress Lawyer form
router.get('/getInProgressLawyerCompany', async (req,res) => {
    const form = await controller.search('status','In progress Lawyer')
    return res.json({data:form})
})
//get In progress Reviewer form
router.get('/getInProgressReviewerCompany', async (req,res) => {
    const form = await controller.search('status','In progress Reviewer')
    return res.json({data:form})
})
//get un assigned form 
router.get('/getUnAssignedForm', async (req,res) => {
    const form = await controller.search('status','Unassigned')
    return res.json({data:form})
})
//get Lawyer Acceptedform 
router.get('/getLawyerAccepted', async (req,res) => {
    const form = await controller.search('status','Lawyer accepted')
    return res.json({data:form})
})
//get Reviewer's comments
router.get('/getReviewerComments/:id', async(req, res)=>{
    const formId = req.params.id
    const formComment = await controller.search('_id',formId)
    var arrayReviewerComments = formComment.reviewerComments
    return res.json({ data: arrayReviewerComments});

})
//get Lawyer's comments
router.get('/getLawyerComments/:id', async(req, res)=>{
    const formId = req.params.id
    const formComment = await controller.search('_id',formId)
    var arrayLawyerComments = formComment.lawyerComments
    return res.json({ data: arrayLawyerComments});

})
 //get Reviewer's comments
 router.get('/getReviewerComments/:id', async(req, res)=>{
    const formId = req.params.id
    const formComment = await controller.search('_id',formId)
    var arrayReviewerComments = formComment.reviewerComments
    return res.json({ data: arrayReviewerComments});
})
//get a form by id
router.get('/:id', async (req,res) => {
        const id = req.params.id
        const form = await controller.search('_id',id)
        return res.json({data:form})
        
})

//create a form
router.post('/', async (req,res) => {
    const newForm = await controller.create(req.body)
    return res.json({data:newForm})
    })

//update a form
 router.put('/:id', async (req,res) => {
    try
    {
        const id = req.params.id
        var form = await controller.update('_id',id,req.body)
        if(form.error) return res.status(400).json(form.error)
        if(!form) return res.json({msg:"ID not found"})
        return res.json({msg:"Form Updated Successfully", data:form})
    }
    catch(error)
    {
        console.log(error)
    }
 })

//delete a form
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedForm= await controller.remove('_id',id)
    return res.json({msg:'Form was deleted successfully', data: deletedForm})
    }
    catch(error) {
        console.log(error)
    }  
 })

 

module.exports = router

