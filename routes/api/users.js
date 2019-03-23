const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


const User = require('../../Models/User')
const validator = require('../../Validation/UserValidation')

//sort by case creation date
router.get('/CasesSortedByCreationDate/', async(req, res) => {                    
    var cases= await Cases.find()
    cases.sort(compare)
    return res.json({ data: cases });
})

function compare(a,b){
    if(Date.parse(a.creationDate)>Date.parse(b.creationDate)) return 1;
    
    if(Date.parse(a.creationDate)<Date.parse(b.creationDate)) return -1;

    return 0;
}
//sort cases by id as a lawyer 
router.get('/CaseSortedByCaseId/', async (req,res) => { // sort cases by case id
    var cases= await Cases.find()
    cases.sort(compareById)
    return res.json({ data: cases });
})


function compareById(a , b){
if(a._id > b._id )
return 1;

if(b._id > a._id )
return -1;

return 0;

}
// view a certain user
router.get('/:id', async(req, res) => {
    const userid=req.params.id
    const user= await User.findById(userid)
    return res.json({ data: user });
})
//view the financialBalance of an investor
router.get('/getTheFinancialBalance/:id', async(req, res) => {
    const userid=req.params.id
    const user= await User.findById(userid)
    const financialBalance= user.financialBalance
    return res.json({ data: financialBalance });
})



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


     //db.User.createIndex( { "email": 1 }, { sparse: true } )                //for creating sparse index to solve null duplicate values
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
     const user = await User.findById(id)
     if(!user) return res.status(404).send({error: 'User does not exist'})
     if(req.body.userType==='Lawyer'){
          const isValidated = validator.updateValidationL(req.body)
          if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     }
     if(req.body.userType==='Investor'){
         const isValidated = validator.updateValidationI(req.body)
          if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     }
     if(req.body.userType==='Reviewer'){
        const isValidated = validator.updateValidationR(req.body)
         if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    }
    
     const x = await User.findByIdAndUpdate(id,req.body)
    const updatedUser = await User.findById(id)
     res.json({msg: 'User updated successfully',data:updatedUser})
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
     const deletedUser = await User.findByIdAndRemove(id)
     res.json({msg:'User was deleted successfully', data: deletedUser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//get the case of the lawyer/Reviewer 
router.get('/getCases/:id',async(req,res) => {
    const userid = req.params.id
    const user = await User.findById(userid)
    var arrayOfCases = user.cases 
    res.json({data: arrayOfCases})
});

module.exports = router;








