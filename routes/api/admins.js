// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();



// Models
const Admin = require('../../Models/Admin');

// temporary data created as if it was pulled out of the database ...
const admins = [
	new Admin('Barney', 'Male','Egyptian','National ID','123456789','password1','1995-8-9','Maadi'),
	new Admin('Lilly', 'Female','American','Passport','a1b2n33ii','password2','1993-1-1','Tagamoa',1,1,'a@b.com'),
	new Admin('Ted', 'Male','German','Passport','uimn827ee','password3','1990-4-11','Nasr City',1,1,'a@b.com'),
	new Admin('Marshal', 'Male','Tunisian','Passport','hdyf7w82j','password4','1991-11-19','Maadi',1,1,'a@b.com'),
	new Admin('Robin', 'Male','French','Passport','nd762behe','password5','1997-8-20','Maadi')
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200


router.get('/api/admins/:id', (req, res) => {
    const adminId = req.params.id
    const admin = admins.find(admin => admin.id === adminId)
    res.send(admin)
})


// Get all users
router.get('/', (req, res) => res.json({ data: admins }))

// Create a new user

router.post('/joi', (req, res) => {
	const name = req.body.name;
    const gender = req.body.gender;
    const nationality = req.body.nationality;
    const identificationType = req.body.identificationType;
    const identificationNumber = req.body.identificationNumber;
    const password = req.body.password;
    const birthdate = req.body.birthdate;
    const address = req.body.address;
    const telephone = req.body.telephone;
    const fax = req.body.fax;
    const email = req.body.email;


	const schema = {
        name: Joi.string().required(),
        gender: Joi.string().required(),
        nationality: Joi.string().required(),
        identificationType: Joi.string().required(),
        identificationNumber: Joi.string().required(),
        password: Joi.string().min(8).required(),
        birthdate: Joi.date().required(),
        address: Joi.string().required(),
        telephone: Joi.number(),
        fax: Joi.number(),
        email: Joi.string().email(),

	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    const newAdmin = {
		name,
        gender,
        nationality,
        identificationType,
        identificationNumber,
        password,
        birthdate,
        address,
        telephone,
        fax,
        email,
		id: uuid.v4(),
    };
    admins.push(newAdmin)
    res.send(admins)
	return res.json({ data: newAdmin });
});

router.put('/:id', (req, res) => {
    const adminId = req.params.id 
    const updatedName = req.body.name
    const updatedGender = req.body.gender
    const updatedNationality = req.body.nationality
    const updatedIdentificationType = req.body.identificationType
    const updatedIdentificationNumber = req.body.identificationNumber
    const updatedPassword = req.body.password
    const updatedBirthdate = req.body.birthdate
    const updatedAddress = req.body.address
    const updatedTelephone = req.body.telephone
    const updatedFax = req.body.fax
    const updatedEmail = req.body.email
    const admin = admins.find(admin => admin.id === adminId)
    if(updatedName){
        admin.name = updatedName
    }
    if(updatedGender){
        admin.gender = updatedGender
    }
    if(updatedNationality){
        admin.nationality = updatedNationality
    }
    if(updatedIdentificationType){
        admin.identificationType = updatedIdentificationType
    }
    if(updatedIdentificationNumber){
        admin.identificationNumber = updatedIdentificationNumber
    }
    if(updatedPassword){
        admin.password = updatedPassword
    }
    if(updatedBirthdate){
        admin.birthdate = updatedBirthdate
    }
    if(updatedAddress){
        admin.address = updatedAddress
    }
    if(updatedTelephone){
        admin.telephone = updatedTelephone
    }
    if(updatedFax){
        admin.fax = updatedFax
    }
    if(updatedEmail){
        admin.email = updatedEmail
    }
    res.send(admins)
})

router.delete('/:id', (req, res) => {
    const adminId = req.params.id 
    const admin = admins.find(admin => admin.id === adminId)
    const index = admins.indexOf(admin)
    admins.splice(index,1)
    res.send(admins)
})


module.exports = router;