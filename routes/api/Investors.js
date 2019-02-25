// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const Investor = require('../../models/Investor');

// temporary data created as if it was pulled out of the database ...
const investors = [
	new Investor('Omar', 'Male', ['Person'], 'Egyptian' ,'National ID', '12345678912345','10/22/1998','street 1','01001234567','123-4567','omar@summerge.com','Dollars',null,[] ),
	new Investor('Sia', 'Female', ['Person'], 'Australia' ,'National ID', '9876543219876','11/22/1990','street 2','01006754321','123-9876','sia@summerge.com','Dollars',null,[] ),
	new Investor('Ted', 'Male', ['Person'], 'English' ,'National ID', '92374782974822','9/19/1987','street 3','010078324120','987-6543','Ted@summerge.com','Euros',null,[] ),
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all Investors
router.get('/', (req, res) => res.json({ data: investors }));

// Create a new Investor


router.post('/joi', (req, res) => {
	const name = req.body.name
	const gender=req.body.gender;
    const type=req.body.type;
    const nationality= req.body.nationality;
    const identificationType=req.body.identificationType;
    const identificationNumber=req.body.identificationNumber;
    const birthDate=req.body.birthDate;
    const address=req.body.address;
    const telephone=req.body.telephone;
    const fax=req.body.fax;
    const email=req.body.email;
    const currency=req.body.currency;
    const lawyerID=req.body.lawyerID;
    const companyNames=req.body.companyNames;

	const schema = {
		name: Joi.string().min(3).required(),
        gender: Joi.string().required(),
        type: Joi.string().required(),
        nationality: Joi.string().required(),
        identificationType: Joi.string().required(),
        identificationNumber: Joi.string().required(),
        birthDate: Joi.date().required(),
        address: Joi.string().required(),
        telephone: Joi.string().required(),
        fax: Joi.string().required(),
        email: Joi.string().email().required(),
        currency: Joi.string().required(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newInvestor = {
		name,
        id: uuid.v4(),
        gender,
        type,
        nationality,
        identificationType,
        identificationNumber,
        birthDate,
        address,
        telephone,
        fax,
        email,
        currency,
        lawyerID:null,
        companyNames:[],
    };
    investors.push(newInvestor);
	return res.json({ data: investors });
});

router.put('/:id', (req, res) => {
    const investorId = req.params.id 
    const updatedName = req.body.name
    const updatedGender = req.body.gender
    const updatedType = req.body.type
    const updatedNationally = req.body.nationality
    const updatedIdentificationNumber = req.body.identificationNumber
    const updatedIdentificationType = req.body.identificationType
    const updatedBirthDate = req.body.birthDate
    const updatedAddress = req.body.address
    const updatedTelephone = req.body.telephone
    const updatedFax = req.body.fax
    const updatedEmail = req.body.email
    const updatedCurrency = req.body.currency
    const updatedLawyerID = req.body.lawyerID
    const updatedCompanyNames = req.body.companyNames

    const investor = investors.find(investor => investor.investorId === investorId)

    if(updatedName)
        investor.name = updatedName
    if(updatedGender)
        investor.gender = updatedGender
    if(updatedType)
        investor.type.push(updatedType)
    if(updatedNationally)
        investor.nationality = updatedNationally        
    if(updatedIdentificationNumber)
        investor.identificationNumber = updatedIdentificationNumber
    if(updatedIdentificationType)
        investor.identificationType = updatedIdentificationType
    if(updatedBirthDate)
        investor.birthDate = updatedBirthDate
    if(updatedAddress)
        investor.address = updatedAddress
    if(updatedTelephone)
        investor.telephone = updatedTelephone
    if(updatedFax)
        investor.fax = updatedFax
    if(updatedEmail)
        investor.email = updatedEmail
    if(updatedCurrency)
        investor.currency = updatedCurrency
    if(updatedLawyerID)
        investor.lawyerID = updatedLawyerID
    if(updatedCompanyNames)
        investor.companyNames.push(updatedCompanyNames)
   
    res.send(investors)
})

router.delete('/:id', (req, res) => {
    const investorId = req.params.id 
    const investor = investors.find(investor => investor.id === investorId)
    const index = investors.indexOf(investor)
    investors.splice(index,1)
    res.send(investors)
})

module.exports = router;