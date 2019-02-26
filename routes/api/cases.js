const express = require('express');
const router = express.Router();
const Joi = require('joi');
const uuid = require('uuid');

// We will be connecting using database 
const Case = require('../../models/Case')

// temporary data created as if it was pulled out of the database ...
const cases =[
    new Case(null,"2017-1-26", false,"you need to update",false,false,"didn't see yet",false),
    new Case(null,"2018-9-8",true,"nothing to be updates", true,true ,"didn't see yet",false),
    new Case(null,"2019-7-8",true,"nothing to be updates",true,true,"didn't see yet",false),
    new Case(null,"2019-9-8",false,"you need to update",false,false,"didn't see yet",false) 
];

//get all cases
router.get('/', (req, res) => res.json({ data: cases }))

// Get a certain case
router.get('/:CaseID', (req, res) => {
    const CaseID = req.params.CaseID
    const Case = cases.find(Case => Case.CaseID === CaseID)
    res.send(Case)
})

//Create a new case
router.post('/', (req, res) => {
	const FormID = req.body.FormID;
    const CreationDate = req.body.CreationDate;
    const LawyerSeen = req.body.LawyerSeen;
    const LawyerApprove = req.body.LawyerApprove;
    const LawyerComments = req.body.LawyerComments;
    const ReviewerSeen = req.body.ReviewerSeen;
    const ReviewerComments = req.body.ReviewerComments;
    const ReviewerApprove = req.body.ReviewerApprove;

	const schema = {
        FormID: Joi.string(),
        CreationDate: Joi.date().iso().required(),	
        LawyerSeen: Joi.boolean().required(),
        LawyerApprove: Joi.boolean().required(),
        LawyerComments: Joi.string().required(),
        ReviewerSeen: Joi.boolean().required(),
        ReviewerComments: Joi.string().required(),
        ReviewerApprove: Joi.boolean().required(),
    	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newCase = {
        FormID,
        CreationDate,
        LawyerSeen,
        LawyerApprove,
        LawyerComments,
        ReviewerSeen,
        ReviewerComments,
        ReviewerApprove,
        CaseID: uuid.v4(),
    };
    cases.push(newCase);
    res.send(cases)
    //return res.json({ data: newCase });
});

// Update a Case
router.put('/:CaseID', (req, res) => {
    const CaseID = req.params.CaseID 
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
        Case.LawyerComments=UpdatedLawyerComments
    }
    if(UpdatedReviewerSeen)
    {
        Case.ReviewerSeen=UpdatedReviewerSeen
    }
    if(UpdatedReviewerComments)
    {
        Case.ReviewerComments=UpdatedReviewerComments
    }
    if(UpdatedReviewerApprove)
    {
        Case.ReviewerApprove=UpdatedReviewerApprove
    }
    res.send(cases)
})

//Delete a Case
router.delete('/:CaseID', (req, res) => {
    const CaseID = req.params.CaseID 
    const Case = cases.find(Case => Case.CaseID === CaseID)
    const index = cases.indexOf(Case)
    cases.splice(index,1)
    res.send(cases)
})

module.exports = router;
//const port = process.env.PORT | 3000
//app.listen(port, () => console.log(`Server up and running on port ${port}`))