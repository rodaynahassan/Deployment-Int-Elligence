const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


// Models
const SSCManager = require('../../models/SSCManager');


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



// Get all users
router.get('/', (req, res) => res.json({ data: SSCManagers }));

router.get('/:id', (req, res) => {
  const SSCManagerID= req.params.id
  const SSCManager= SSCManagers.find(SSCManager=> SSCManager.ID === SSCManagerID)
  res.json({ data: SSCManager })
})

//create new 

router.post('/', (req, res) => {
	const name = req.body.name
    const type = req.body.type
    const gender = req.body.gender
    const nationality = req.body.nationality
    const nationalityType = req.body.nationalityType
  	const nationalityNumber = req.body.nationalityNumber
    const birthdate = req.body.birthdate
	  const address = req.body.address
    const typeOfManagers = req.body.typeOfManagers
    
    
    

    

	const schema = {
		name: Joi.string().min(3).required(),
        type: Joi.string().required(),
        gender: Joi.string().required(),
        nationality: Joi.string().required(),
        identificationType: Joi.string().required(),
        identificationNumber: Joi.string().required(),
        birthdate: Joi.date().required(),
        address: Joi.string().required(),
        typeOfManagers: Joi.string().required(),
    }

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newSSCManager = new SSCManager(
		    name,
        type,
        gender,
        nationality,
        nationalityType,
        nationalityNumber,
        birthdate,
        address,
        typeOfManagers
		
  )
    
  
    SSCManagers.push(newSSCManager)
    return res.json({ data: SSCManagers });
    
});

// Update 
router.put('/:id', (req, res) => {
    const SSCManagerID = req.params.id
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


    res.json({ data: SSCManagers })
})

// Delete a Manager
router.delete('/:id', (req, res) => {
    const SSCManagerID = req.params.id 
    const SSCManager = SSCManagers.find(SSCManager=> SSCManager.ID === SSCManagerID)
    const index = SSCManagers.indexOf(SSCManager)
    SSCManagers.splice(index,1)
    res.json({ data: SSCManagers })
})


module.exports = router;