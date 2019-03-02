const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


// Models
const SSCManager = require('../../models/SSCManager');

// temporary data created as if it was pulled out of the database ...
const SSCManagers = [
    new SSCManager('Farida', 'person' , 'female', 'Egyptian', 'NationalID','12345678123456','1990-6-12'
    ,'32 Hegaz st', 'COO' ),
    new SSCManager('Lilly', 'person', 'female', 'Egyptian', 'NationalID','123456789012123', '1989-7-15',
    '21 thawra st','CEO'),
    new SSCManager('Adam', 'person', 'male', 'Egyptian', 'NationalID', '21345676789876', '1987-12-4'
    ,'15 triumph square', 'CFO'),
    new SSCManager('Sherif', 'person','male','Egyptian','NationalID', '987876574321234', '1990-9-9'
    , '12 taj sultan','Founder'),
	
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get('/', (req, res) => res.json({ data: SSCManagers }));

//create new 

router.post('/joi', (req, res) => {
	const name = req.body.name
    const type = req.body.type
    const gender = req.body.gender
    const nationality = req.body.nationality
    const nationalityType = req.body.nationalityType
	const nationalityNumber = req.body.nationalityNumber
    const birthdate = req.body.birthdate
	const address = req.body.address
    const typeOfManager = req.body.typeOfManager
    
    
    

    

	// const schema = {
	// 	name: Joi.string().min(3).required(),
  //       type: Joi.string().required(),
  //       gender: Joi.string().required(),
  //       nationality: Joi.string().required(),
  //       nationalityType: Joi.string().required(),
  //       nationalityNumber: Joi.string().required(),
  //       birthdate: Joi.date().iso().required(),
  //       address: Joi.string().required(),
  //       typeOfManager: Joi.string().required(),
  //   }
  //   newSSCManager.push(SSCManagers)
  //   res.send(newSSCManager)

	// const result = Joi.validate(req.body, schema);

	// if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newSSCManager = {
		name,
        type,
        gender,
        nationality,
        nationalityType,
        nationalityNumber,
        birthdate,
        address,
        typeOfManager,
		id: uuid.v4(),
    }
    
    ;
    SSCManagers.push(newSSCManager)
    res.send(SSCManagers)
    //return res.json({ data: newSSCManager });
    
});

// Update 
router.put('/:ID', (req, res) => {
    const SSCManagerID = req.params.ID 
    const updatedName = req.body.name
    const updatedType = req.body.type
    const updatedGender = req.body.gender
    const updatedNationality = req.body.nationality
    const updatedIdentificationType = req.body.identificationType
    const updatedIdentificationNumber = req.body.identificationNumber
    const updatedBirthdate = req.body.birthdate
    const updatedAddress = req.body.address
    const updatedTypeOfManager = req.body.typeOfManager
    const SSCManager = SSCManagers.find(SSCManager => SSCManager.ID === SSCManagerID)
    if(updatedName)
    {
      SSCManager.name = updatedName
    }
    if(updatedType)
    {
      SSCManager.type = updatedType
    }
    if(updatedGender)
    {
         SSCManager.gender = updatedGender
    }
    if(updatedNationality)
    {
       SSCManager.nationality = updatedNationality
    }
    if(updatedIdentificationType)
    {
    SSCManager.identificationType = updatedIdentificationType
    }
    if(updatedIdentificationNumber)
    {
      SSCManager.identificationNumber = updatedIdentificationNumber
    }
    if(updatedBirthdate)
    {
      SSCManager.birthdate = updatedBirthdate
    }
    if(updatedAddress)
    {
      SSCManager.address = updatedAddress
    }
    if(updatedTypeOfManager)
    {
       SSCManager.typeOfManager = updatedTypeOfManager
    }


    res.send(SSCManagers)
})

// Delete a Manager
router.delete('/:ID', (req, res) => {
    const SSCManagerID = req.params.ID 
    const SSCManager = SSCManagers.find(SSCManager=> SSCManager.ID === SSCManagerID)
    const index = SSCManagers.indexOf(SSCManager)
    SSCManagers.splice(index,1)
    res.send(SSCManagers)
})

// Define the port, get it from the enviroment (used in production)
// Or just use 3000
//const port = process.env.PORT | 3000
//.listen(port, () => console.log(`Server up and running on port ${port}`))

module.exports = router;