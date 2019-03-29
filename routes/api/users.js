const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const userController=require('../../controllers/userController')
const User = require('../../Models/User')
const Forms = require('../../Models/Form')
const validator = require('../../Validation/UserValidation')
const formController = require('../../controllers/formController')




//sort all cases for a  by case creation date
router.get('/AllCasesSortedByCaseDate/', async(req, res) => {                    
    var forms= await formController.search()
    forms.sort(userController.compareByDate)
    return res.json({ data: forms });
})
//sort by case creation date for a specific user
router.get('/SpecificCasesSortedByCaseDate/:id', async(req, res) => {   
    const userid=req.params.id
    var SpecificUser= await userController.search('_id' ,userid )
    SpecificUser.forms.sort(userController.compareByDate)
    return res.json({ data: SpecificUser.forms });
})
//sort cases by id as a lawyer 
router.get('/CaseSortedByCaseId/', async (req,res) => { // sort cases by case id
    var forms= await Forms.find()
    forms.sort(compareById)
    return res.json({ data: forms });
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

 

router.post('/register', async (req,res) => {                       //register Investor
    const newUser = await userController.registerInvestor(req.body) 
    if(newUser.error) return res.status(400).send(newUser) 
     return res.json({msg:'Account was created successfully', data: newUser})



    })

//update a user
 router.put('/:id', async (req,res) => {
      
      const id = req.params.id 
      const updateUser = await userController.update('_id',id,req.body)
      if(!updateUser) return res.json({msg :'ID not there'})
      if(updateUser.error) return res.status(400).send(updateUser)
      return res.json({msg : 'User Updated Successfully',data: updateUser})

 })


//get the case of the lawyer/Reviewer 
router.get('/getCases/:id',async(req,res) => {
    const userid = req.params.id
    const user = await User.findById(userid)
    var arrayOfForms = user.forms 
    res.json({data: arrayOfForms})
});

module.exports = router;






//When you delete a specific user , you delete with it all his forms 
//Delete a user
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     var SpecificUser= await userController.search('_id' ,id )
     for(i=0;i<SpecificUser.forms.length;i++){
         var formId=SpecificUser.forms[i]._id
         await formController.remove('_id',formId)
     }
     const deletedUser = await userController.remove('_id',id)
     res.json({msg:'User was deleted successfully', data: deletedUser})
    }
    catch(error) {
    
        console.log(error)
    }  
 })




