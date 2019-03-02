const express = require('express');
const router = express.Router();
const Joi = require('joi');
const uuid = require('uuid');


const Case = require('../../models/Case')


const cases =[
    new Case(null,"2017-1-26"),
    new Case(null,"2018-9-8"),
    new Case(null,"2019-7-8"),
    new Case(null,"2019-9-8") 
];

//get all cases
router.get('/', (req, res) => res.json({ data: cases }))

// Get a certain case
router.get('/:id', (req, res) => {
    const CaseID = req.params.id
    const Case = cases.find(Case => Case.CaseID === CaseID)
    return res.json({ data: Case });

})

//Create a new case
router.post('/', (req, res) => {
	const Form = req.body.Form
    const CreationDate = req.body.CreationDate

	const schema = {
        CreationDate: Joi.date().iso().required()
    	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newCase = new Case(
        Form,
        CreationDate
    );
    cases.push(newCase);
    return res.json({ data: newCase });
});

// Update a Case
router.put('/:id', (req, res) => {
    const CaseID = req.params.Caseid 
    const UpdatedCreationDate = req.body.CreationDate
    const UpdatedLawyerSeen = req.body.LawyerSeen
    const UpdatedLawyerApprove = req.body.LawyerApprove
    const UpdatedLawyerComments = req.body.LawyerComments
    const UpdatedReviewerSeen = req.body.ReviewerSeen
    const UpdatedReviewerComments = req.body.ReviewerComments
    const UpdatedReviewerApprove = req.body.ReviewerApprove 

    const Case = cases.find(Case => Case.CaseID === CaseID)
    if(UpdatedCreationDate)
    {
        Case.CreationDate=UpdatedCreationDate
    }
    if(UpdatedLawyerSeen)
    {
        Case.LawyerSeen=UpdatedLawyerSeen
    }
    if(UpdatedLawyerApprove)
    {
        Case.LawyerApprove=UpdatedLawyerApprove
    }
    if(UpdatedLawyerComments)
    {
        Case.LawyerComments.push(UpdatedLawyerComments) //in the update we will only push the new comment
    }
    if(UpdatedReviewerSeen)
    {
        Case.ReviewerSeen=UpdatedReviewerSeen
    }
    if(UpdatedReviewerComments)
    {
        Case.ReviewerComments.push(UpdatedReviewerComments) // same as lawyer comments
    }
    if(UpdatedReviewerApprove)
    {
        Case.ReviewerApprove=UpdatedReviewerApprove
    }
    return res.json({ data: cases });
})

//Delete a Case
router.delete('/:id', (req, res) => {
    const CaseID = req.params.id 
    const Case = cases.find(Case => Case.CaseID === CaseID)
    const index = cases.indexOf(Case)
    cases.splice(index,1)
    return res.json({ data: cases });
})

module.exports = router;
