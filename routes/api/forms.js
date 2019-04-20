const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Form = require('../../Models/Form')
const validator = require('../../Validation/formValidations')
const controller = require('../../controllers/formController')
const passport = require('passport')
require('../../config/passport')(passport)









// //       for testing!!!!!!!!
// router.get('/getInvestorName',passport.authenticate('jwt', {session: false}) ,async (req,res) => {
//     // You can access the logged in user through req.user
//     // Add your authorization rules accordingly
//     const userid=req.user.id
//     const user= await userController.search('_id',userid)
//     const name= user.name
//     return res.json({ data: name  });

//     // return res.json({data: req.user})

// })





//get all forms
router.get('/getAllForms' , async (req,res) => {
    const forms  = await controller.search()
    return res.json({data:forms})
})
//get company aka status=approved
router.get('/getApprovedCompany', async (req,res) => {
    const form = await controller.search('status','Approved')
    return res.json({data:form})  
})
//get rejected form
router.get('/getRejectedCompany',passport.authenticate('jwt', {session: false}) , async (req,res) => {
    const form = await controller.search('status','Rejected')
    return res.json({data:form})
})
//get In progress Lawyer form
router.get('/getInProgressLawyerCompany',passport.authenticate('jwt', {session: false}) , async (req,res) => {
    const form = await controller.search('status','In progress Lawyer')
    return res.json({data:form})
})
//get In progress Reviewer form
router.get('/getInProgressReviewerCompany',passport.authenticate('jwt', {session: false}) , async (req,res) => {
    const form = await controller.search('status','In progress Reviewer')
    return res.json({data:form})
})
//get un assigned form 
router.get('/getUnAssignedForm',passport.authenticate('jwt', {session: false}) , async (req,res) => {
    const form = await controller.search('status','Unassigned')
    return res.json({data:form})
})
//get Lawyer Acceptedform 
router.get('/getLawyerAccepted',passport.authenticate('jwt', {session: false}) , async (req,res) => {
    if (req.user.userType === "Reviewer" || req.user.userType === "Lawyer") {    
    const form = await controller.search('status','Lawyer accepted')
    return res.json({data:form})
    }
    else{
        return res.json({ msg:'Non Authorized'});
    }
})
//get Reviewer's comments
router.get('/getReviewerComments/:id',passport.authenticate('jwt', {session: false}) , async(req, res)=>{
    if (req.user.userType === "Lawyer"|| req.user.userType === "Reviewer") { 
    const formId = req.params.id
    const formComment = await controller.search('_id',formId)
    var arrayReviewerComments = formComment.reviewerComments
    return res.json({ data: arrayReviewerComments});
    }
    else{
        return res.json({ msg:'Non Authorized'});
    }
})
//get Lawyer's comments
router.get('/getLawyerComments/:id', passport.authenticate('jwt', {session: false}) ,async(req, res)=>{
    if (req.user.userType === "Investor"|| req.user.userType === "Lawyer") {
    const formId = req.params.id
    const formComment = await controller.search('_id',formId)
    var arrayLawyerComments = formComment.lawyerComments
    return res.json({ data: arrayLawyerComments});
    }
    else{
        return res.json({ msg:'Non Authorized'});
    }
})

//get a form by id
router.get('getSpecificform/:id',  passport.authenticate('jwt', {session: false}) ,async (req,res) => {
        const id = req.params.id
        const form = await controller.search('_id',id)
        return res.json({data:form})
        
})

//create a form
router.post('/', passport.authenticate('jwt', {session: false}) , async (req,res) => {
    const newForm = await controller.create(req.body)
    return res.json({data:newForm})
    })

//update a form
 router.put('/:id', passport.authenticate('jwt', {session: false}) , async (req,res) => {
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
 router.delete('/:id', passport.authenticate('jwt', {session: false}) , async (req,res) => {
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

