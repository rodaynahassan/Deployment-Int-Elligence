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
    const Case = cases.find(Case => Case.caseID === CaseID)
    return res.json({ data: Case });

})

//Create a new case
router.post('/', (req, res) => {
	const Form = req.body.form
    const CreationDate = req.body.creationDate

	const schema = {
            creationDate: Joi.date().required(),
            form: Joi.object() //must insert an object , syntax -> {} , it doesn't accept null
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
    const CaseID = req.params.id 
    const UpdatedCreationDate = req.body.creationDate
    const UpdatedLawyerSeen = req.body.lawyerSeen
    const UpdatedLawyerApprove = req.body.lawyerApprove
    const UpdatedLawyerComments = req.body.lawyerComments
    const UpdatedReviewerSeen = req.body.reviewerSeen
    const UpdatedReviewerComments = req.body.reviewerComments
    const UpdatedReviewerApprove = req.body.reviewerApprove 

    const Case = cases.find(Case => Case.caseID === CaseID)
    if(UpdatedCreationDate)
    {
        Case.creationDate=UpdatedCreationDate
    }
    if(UpdatedLawyerSeen)
    {
        Case.lawyerSeen=UpdatedLawyerSeen
    }
    if(UpdatedLawyerApprove)
    {
        Case.lawyerApprove=UpdatedLawyerApprove
    }
    if(UpdatedLawyerComments)
    {
        Case.lawyerComments.push(UpdatedLawyerComments) //in the update we will only push the new comment
    }
    if(UpdatedReviewerSeen)
    {
        Case.reviewerSeen=UpdatedReviewerSeen
    }
    if(UpdatedReviewerComments)
    {
        Case.reviewerComments.push(UpdatedReviewerComments) // same as lawyer comments
    }
    if(UpdatedReviewerApprove)
    {
        Case.reviewerApprove=UpdatedReviewerApprove
    }
    return res.json({ data: cases });
})

//Delete a Case
router.delete('/:id', (req, res) => {
    const CaseID = req.params.id 
    const Case = cases.find(Case => Case.caseID === CaseID)
    const index = cases.indexOf(Case)
    cases.splice(index,1)
    return res.json({ data: cases });
})

module.exports = router;
