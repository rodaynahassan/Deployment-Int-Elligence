const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const userController = require('../../controllers/userController')
const caseController = require('../../controllers/caseController')



const User = require('../../Models/User')
const Cases = require('../../Models/Case')
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
    const cases = await userController.search()
    cases.cases.sort(userController.compareById)
    return res.json({ data: cases });
})



// view a certain user
router.get('/:id', async(req, res) => {
    const userid=req.params.id
    const searchUsers = await userController.search('_id',userid)
    return res.json({ data: searchUsers });
})
//view the financialBalance of an investor
router.get('/getTheFinancialBalance/:id', async(req, res) => {
    const userid=req.params.id
    const user= await userController.search('_id',userid)
    const financialBalance= user.financialBalance
    return res.json({ data: financialBalance });
})


//get all users
router.get('/', async (req,res) => {
    const searchUsers = await userController.search()
    res.json({data: searchUsers})
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
      
      const id = req.params.id 
      const updateUser = await userController.update('_id',id,req.body)
      if(!updateUser) return res.json({msg :'ID not there'})
      if(updateUser.error) return res.status(400).send(updateUser)
      return res.json({msg : 'User Updated Successfully',data: updateUser})

     
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
    const userid=req.params.id
    const user= await userController.search('_id',userid)
    const casesOfUsers = user.cases
    return res.json({ data: casesOfUsers });
});

module.exports = router;








