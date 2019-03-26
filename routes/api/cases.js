const express = require('express');
const router = express.Router();

const validator = require('../../Validation/caseValidations')
const mongoose = require('mongoose')
const Case = require('../../Models/Case')
//const formValidator=require('../../Validation/caseValidations')
const controller = require('../../controllers/caseController')



//get all cases
router.get('/', async (req,res) => {
    const cases = await controller.search()
    res.json({data:cases})

})

//As an Admin I should be able to view case by company Name
router.get('/getByCompanyName/:companyName', async (req,res) => {
    const companyname = req.params.companyName
    const casesRequested = await controller.search('companyName',companyname)
   return res.json({data: casesRequested})
})

//get a case
router.get('/:id', async (req,res) => {
    const id=req.params.id
    const cases = await controller.search('_id',id)
    res.json({data:cases})
})

//View Reviewer's comments
router.get('/getReviewerComments/:id', async(req, res)=>{
    const caseId = req.params.id
    const caseComment = await controller.search('_id',caseId)
    var arrayReviewerComments = caseComment.reviewerComments
    return res.json({ data: arrayReviewerComments});

})



//create new case
router.post('/', async (req,res) => {

    var newCase = await controller.create(req.body)
    return res.json({data: newCase})
    // try {
    //  const isValidated = validator.createValidation(req.body)
    //  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    //  const newCase = await Case.create(req.body)
    //  res.json({msg:'Case was created successfully', data: newCase})
    // }
    // catch(error) {
    //     // We will be handling the error later
    //     console.log(error)
    // }  
 })


//update a case
router.put('/:id', async (req,res) => {
    try{
        const id=req.params.id
        var ncase = await controller.update('id',id,req.body)
        if(!ncase) return res.json({msg:'ID not there'})
        if(ncase.error) return res.status(400).send(ncase)
        return res.json({msg:'case updated successfully',data:ncase})
    }
    
    
    // try {/.
    //  const id = req.params.id
    //  const newCase = await Case.findById(id)
    //  if(!newCase) return res.status(404).send({error: 'Case does not exist'})
    //  const isValidated = validator.updateValidation(req.body)
    //  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    //  const x = await Case.findByIdAndUpdate(id,req.body)
    // const updatedCase = await Case.findById(id)
    //  res.json({msg: 'Case updated successfully', data:updatedCase})
    // }
     catch(error)
      {
         console.log(error)
     }  
 })


//delete a case
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedCase = await controller.remove('_id',id)
     res.json({msg:'case was deleted successfully', data: deletedCase})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

  //Get the form of the Lawyer/Reviewer case
router.get('/getForms/:id', async(req, res) => {
    const caseid = req.params.id
    const cases = await controller.search('_id',caseid)
    var CaseForm = cases.form
    res.json({ data: CaseForm });
})

module.exports = router;
