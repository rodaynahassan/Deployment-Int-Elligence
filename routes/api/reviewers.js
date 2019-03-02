const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


const Reviewer = require('../../models/Reviewer');

const Reviewers = [
    new Reviewer('Ali Ibrahim Elsebaie','male','Egyptian','00121225454126','NationalID',
    '1998-18-12','Maadi','+201145144451','+1 227 536-923','Ali.elsebaie@yahoo.com','seba3y'),
    new Reviewer('Mohamed Amr Aboushnef','male','Egyptian','00121225454129','NationalID',
    '1998-8-26','Maadi','+201002777876','+1 227 577-923','mohamed.shenif@yahoo.com','shenfo'),	
    new Reviewer('Abdelrahman Adel Saleh','male','Egyptian','00121225454121','NationalID',
    '1998-5-25','Maadi','+201006591115','+1 227 776-923','Bibo.adel@yahoo.com','amin'),	
    new Reviewer('Tarek Ashraf Habashy','male','Egyptian','A6789665','PassportID',
    '1998-1-1','Maadi','+201145144333','+1 227 536-944','Tarek.habashy@yahoo.com','habashy'),
];


router.get('/', (req, res) => res.json({ data: Reviewers })); //view

router.get('/:id', (req, res) => {
    const reviewerid=req.params.id
    const reviewer= Reviewers.find(reviewer=> reviewer.id===reviewerid)
    return res.json({ data: reviewer });
})


router.post('/', (req, res) => { //Create
	const name = req.body.name
    const gender = req.body.gender
    const nationality = req.body.nationality
    const identificationType= req.body.identificationType
    const identificationNumber = req.body.identificationNumber
    const birthdate = req.body.birthdate
    const address = req.body.address
    const telephone = req.body.telephone
    const fax = req.body.cases
    const email = req.body.email
    const password = req.body.password

	const schema = {
		name: Joi.string().min(3).required(),
        gender: Joi.string().required(),
        nationality: Joi.string().required(),
        identificationType: Joi.string().required(),
        identificationNumber: Joi.string().required(),
        birthdate: Joi.date().iso().required(),
        address: Joi.string().required(),
        telephone: Joi.number(),
        fax: Joi.number(),
        email: Joi.string().email(),
        password: Joi.string().required(),

	}

	const result = Joi.validate(req.body,schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newReviewer = new Reviewer (
        
		name,
        gender,
        nationality,
        identificationNumber,
        identificationType,
        birthdate,
        address,
        telephone,
        fax,
        email,
        password
    );

    Reviewers.push(newReviewer)
    res.json({ data: Reviewers })
});
    
// Update
router.put('/:id', (req, res) => {
    const revid = req.params.id  // search by ID
    const updatedname = req.body.name
    const updatedgender = req.body.gender
    const updatednationality = req.body.nationality
    const updatedidentificationType = req.body.identificationType
    const updatedidentificationNumber = req.body.identificationNumber
    const updatedbirthdate = req.body.birthdate
    const updatedaddress = req.body.address
    const updatedtelephone = req.body.telephone
    const updatedfax= req.body.fax
    const updatedcases = req.body.cases
    const updatedemail = req.body.email
    const updatedpassword = req.body.password

    const Reviewer = Reviewers.find(Reviewer => Reviewer.id === revid)
    if(updatedname){
    Reviewer.name = updatedname
}
if(updatedgender ){
    Reviewer.gender = updatedgender
}
if(updatednationality ){
    Reviewer.nationality = updatednationality
}
if(updatedidentificationType ){
    Reviewer.identificationType= updatedidentificationType
}
if(updatedidentificationNumber){
    Reviewer.identificationNumber = updatedidentificationNumber
}
if(updatedbirthdate ){
    Reviewer.birthdate = updatedbirthdate
}
if(updatedaddress ){
    Reviewer.address = updatedaddress
}
if(updatedtelephone ){
    Reviewer.telephone = updatedtelephone
}
if(updatedfax ){
    Reviewer.fax = updatedfax
}
if(updatedcases ){
    Reviewer.cases.push(updatedcases) 
}
if(updatedemail ){
    Reviewer.email = updatedemail
}
if(updatedpassword ){
    Reviewer.password = updatedpassword
}

res.json({ data: Reviewers })
})



// Delete  
router.delete('/:id', (req, res) => {
    const ReviewerID = req.params.id 
    const Reviewer = Reviewers.find(Reviewer => Reviewer.id === ReviewerID)
    const index = Reviewers.indexOf(Reviewer)
    Reviewers.splice(index,1)
    res.json({ data: Reviewers })
})

    module.exports = router


