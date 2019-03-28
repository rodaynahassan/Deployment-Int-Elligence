const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const caseController = require('../../controllers/caseController')
const userController=require('../../controllers/userController')
const formController=require('../../controllers/formController')
const User = require('../../Models/User')
const Cases = require('../../Models/Case')
const Form = require('../../Models/Form')
const validator = require('../../Validation/UserValidation')






//sort by case creation date
router.get('/CasesSortedByCreationDate/', async(req, res) => {                    
    var cases= await Cases.find()
    cases.sort(compare)
    return res.json({ data: cases });
})



//sort all cases by id as a lawyer 
router.get('/AllCaseSortedByCaseId/', async (req,res) => {  // sort all cases by case id
    const cases = await caseController.search()
    cases.sort(userController.compareById)
    return res.json({ data: cases });
})


//sort specific cases by id as a lawyer 
router.get('/SpecificCaseSortedByCaseId/:id', async (req,res) => {  // sort specific cases by case id
    var userid=req.params.id
    var searchUsers = await userController.search('_id',userid)
    //searchUsers.cases = await caseController.search()
    searchUsers.cases.sort(userController.compareById)
    return res.json({ data: searchUsers.cases });
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


// View lawyer comments of specific case of investor 
router.get('/getLaywerCommentsOfInvestorsCase/:id', async(req, res) => {
    var userid = req.params.id
    var user = await userController.search('_id',userid)
    var lawyercom = user.cases.lawyerComments
    return res.json({ data: lawyercom });
})


//get all users
router.get('/', async (req,res) => {
    const searchUsers = await userController.search()
    res.json({data: searchUsers})
})

 

//create a user
router.post('/', async (req,res) => {
    
     const newUser = await userController.create(req.body)
     if(newUser.error) return res.status(400).send(newUser) 
     return res.json({msg:'User was created successfully', data: newUser})


    }
 )

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
     const deletedUser = await userController.remove('_id',id)
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


//steps
//1)get my self as a lawyer or reviewer
//2)get array of cases as a lawyer or reviewer
//3)view the form of specific case as a lawyer or reviewer
//4)get the attribute of accepting and rejecting of this specific case

router.put('/users/:userId/cases/:caseId', async(req, res) => {
    const userid=req.params.userId 
    const caseid=req.params.caseId
    const user= await userController.search('_id',userid)
    const caseOfUser = await caseController.search('_id',caseid)
    //const formCase = user.cases.form.formController.search()  //front enfd getting the form to view it 
    const approveLawyer= await caseController.update('_id',caseid,req.body)
    return res.json({data:approveLawyer});
});



module.exports = router;








