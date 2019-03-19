const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


const User = require('../../Models/User')


// view a certain user
router.get('/:id', async(req, res) => {
    const userid=req.params.id
    const user= await User.findOne({userid})
    return res.json({ data: user });
})

//View the sorted cases by date
router.get('/sortByCreationDate/:id', async(req, res) => {
    const userid=req.params.id
    const user= await User.findOne({userid})
    user.cases.sort(compare)
    return res.json({ data: user.cases });
})

function compare(a,b){
    if(Date.parse(a.creationDate)>Date.parse(b.creationDate)) return 1
    if(Date.parse(a.creationDate)>Date.parse(b.creationDate)) return -1
    return 0
}

//get all users
router.get('/', async (req,res) => {
    const users = await User.find()
    res.json({data: users})
})




//create a user
router.post('/', async (req,res) => {
    try {
        var isValidated = undefined
        if(req.body.userType==='Lawyer'){
             isValidated = validator.createValidationL(req.body)
        }
        if(req.body.userType==='Investor'){
             isValidated = validator.createValidationI(req.body)
        }
        if(req.body.userType==='Reviewer'){
            isValidated = validator.createValidationR(req.body)
       }
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newUser = await User.create(req.body)
     res.json({msg:'User was created successfully', data: newUser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


//update a user
 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const user = await User.findOne({id})
     if(!user) return res.status(404).send({error: 'User does not exist'})
     var isValidated = undefined
     if(req.body.userType==='Lawyer'){
          isValidated = validator.updateValidationL(req.body)
     }
     if(req.body.userType==='Investor'){
          isValidated = validator.updateValidationI(req.body)
     }
     if(req.body.userType==='Reviewer'){
         isValidated = validator.updateValidationR(req.body)
    }
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedUser = await User.updateOne(req.body)
     res.json({msg: 'User updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })





//delete a user
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedUser = await User.findByIdAndRemove({id})
     res.json({msg:'User was deleted successfully', data: deletedUser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })















module.exports = router;









