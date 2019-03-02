// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const Investor = require('../../models/Investor');


const investors = [
	new Investor('Omar', 'Male', 'Egyptian' ,'National ID', '12345678912345','1998-10-22','street 1','01001234567','123-4567','omar@summerge.com','pass','Dollars',null),
	new Investor('Sia', 'Female', 'Australia' ,'National ID', '9876543219876','1990-11-22','street 2','01006754321','123-9876','sia@summerge.com','pass','Dollars',null ),
	new Investor('Ted', 'Male', 'English' ,'National ID', '92374782974822','2000-5-19','street 3','010078324120','987-6543','Ted@summerge.com','pass','Euros',null),
];



// Get all Investors
router.get('/', (req, res) => res.json({ data: investors }));
//Search by ID
router.get('/:id', (req, res) => {
    const Id = req.params.id 
    const investor = investors.find(investor => investor.investorId === Id)
    return res.json({ data: investor });
})
// Create a new Investor


router.post('/', (req, res) => {
	const name = req.body.name
	const gender=req.body.gender;
    const nationality= req.body.nationality;
    const identificationType=req.body.identificationType;
    const identificationNumber=req.body.identificationNumber;
    const birthDate=req.body.birthDate;
    const address=req.body.address;
    const telephone=req.body.telephone;
    const fax=req.body.fax;
    const email=req.body.email;
    const password= req.body.password;
    const currency=req.body.currency;

	const schema = {
		name: Joi.string().min(3).required(),
        gender: Joi.string().required(),
        nationality: Joi.string().required(),
        identificationType: Joi.string().required(),
        identificationNumber: Joi.string().required(),
        birthDate: Joi.date().required(),
        address: Joi.string().required(),
        telephone: Joi.string().required(),
        fax: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        currency: Joi.string().required(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newInvestor = new Investor(
		name,
        gender,
        nationality,
        identificationType,
        identificationNumber,
        birthDate,
        address,
        telephone,
        fax,
        email,
        password,
        currency,
        null)
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
    const updatedLawyer = req.body.lawyer
    const updatedCompanies = req.body.companies
    const updatedForms = req.body.forms
    const updatedPassword = req.body.password

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
    if(updatedLawyer)
        investor.lawyer = updatedLawyer
    if(updatedCompanies)
        investor.companies.push(updatedCompanies)
    if(updatedForms)
        investor.forms.push(updatedForms)
    if(updatedPassword)
        investor.password=updatedPassword
   
    return res.json({ data: investors });
})

router.delete('/:id', (req, res) => {
    const investorId = req.params.id 
    const investor = investors.find(investor => investor.investorId === investorId)
    const index = investors.indexOf(investor)
    investors.splice(index,1)
    return res.json({ data: investors });
})

module.exports = router;