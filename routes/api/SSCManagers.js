const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()


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

router.get('/',async(req,res) =>{
  const SSCManagers = await SSCManager.find()
  res.json({data:SSCManagers})
})

  router.get('/',async(req,res) =>{
    const id = req.params.id
    const SSCManagers = await SSCManager.findOne({id})
    res.json({data:SSCManagers})
  })



router.post('/', async (req,res) => {
  try {
   const isValidated = validator.createValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const newSSCManager = await SSCManager.create(req.body)
   res.json({msg:'SSCManager is created successfully', data: newSSCManager})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
    
// Update 

router.put('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const SSCManager = await SSCManager.findOne({id})
   if(!SSCManager) return res.status(404).send({error: 'SSCManager does not exist'})
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updatedSSCManager = await SSCManager.updateOne(req.body)
   res.json({msg: 'SSCManager updated successfully'})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})


// // Delete a Manager

router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedSSCManager= await SSCManager.findByIdAndRemove(id)
   res.json({msg:'SSC Manager was deleted successfully', data: deletedSSCManager})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})


module.exports = router;