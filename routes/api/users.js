const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const formController = require('../../controllers/formController')
const userController=require('../../controllers/userController')
const User = require('../../Models/User')
const validator = require('../../Validation/UserValidation')



//sort all forms for a  by form creation date
router.get('/AllCasesSortedByCaseDate/', async(req, res) => {                    
    var forms= await formController.search()
    forms.sort(userController.compareByDate)
    return res.json({ data: forms });
})


//sort all forms by id as a lawyer 
router.get('/AllCaseSortedByCaseId/', async (req,res) => {  // sort all forms by form id
    const forms = await formController.search()
    forms.sort(userController.compareById)

})

//sort by form creation date for a specific user
router.get('/SpecificCasesSortedByCaseDate/:id', async(req, res) => {   
    const userid=req.params.id
    var SpecificUser= await userController.search('_id' ,userid )
    SpecificUser.forms.sort(userController.compareByDate)
    return res.json({ data: SpecificUser.forms });
})



//sort specific forms by id as a lawyer 
router.get('/SpecificCaseSortedByCaseId/:id', async (req,res) => {  // sort specific forms by form id
    var userid=req.params.id
    var searchUsers = await userController.search('_id',userid)
    //searchUsers.forms = await formController.search()
    searchUsers.forms.sort(userController.compareById)
    return res.json({ data: searchUsers.forms });
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


// View lawyer comments of specific form of investor 
router.get('/getLaywerCommentsOfInvestorsCase/:id', async(req, res) => {
    var userid = req.params.id
    var user = await userController.search('_id',userid)
    var lawyercom = user.forms.lawyerComments
    return res.json({ data: lawyercom });
})


//get all users
router.get('/', async (req,res) => {
    const searchUsers = await userController.search()
    res.json({data: searchUsers})
})

 

router.post('/register', async (req,res) => {                       //register Investor
    const newUser = await userController.registerInvestor(req.body) 
    if(newUser.error) return res.status(400).send(newUser) 
     return res.json({msg:'Investor was created successfully', data: newUser})

    })

//update a user + updating his form if required
 router.put('/:id' , async (req,res) => {
      var id = req.params.id 
      var forms = body.forms 
      var user = await userController.search('_id',id)
      if(forms){
          var oldforms = user.forms
      }

      for(let i=0 ;i < forms.length ; i++){  
         var formId = user.forms[i]._id 
         forms[i] = await formController.update('_id',formId,req.body)
         //var newforms = oldforms + forms
         body.forms.push(forms[i]) // Try oldforms.push()
      }

      const updateUser = await userController.update('_id',id,req.body)
      if(!updateUser) return res.json({msg :'ID not there'})
      if(updateUser.error) return res.status(400).send(updateUser)
      return res.json({msg : 'User Updated Successfully',data: updateUser})

 })



//get the case of the lawyer/Reviewer 
//lsa we need to add en bageb ely status bta3etha in progress only
router.get('/getCases/:id',async(req,res) => {
    const userid=req.params.id
    const user= await userController.search('_id',userid)
    const formsOfUsers = user.forms
    return res.json({ data: formsOfUsers });
});

module.exports = router;








