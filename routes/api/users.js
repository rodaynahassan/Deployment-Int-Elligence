const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const formController = require('../../controllers/formController')
const userController=require('../../controllers/userController')
const User = require('../../Models/User')
const validator = require('../../Validation/UserValidation')
<<<<<<< HEAD
=======
const formController = require('../../controllers/formController')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys_dev').secretOrKey




>>>>>>> e3c20fd2470b7c101d3c1e90b10f8dc3d49867c6



//sort all forms for a  by form creation date
router.get('/AllFormsSortedByFormDate/', async(req, res) => {                    
    var forms= await formController.search()
    forms.sort(userController.compareByDate)
    return res.json({ data: forms });
})


<<<<<<< HEAD
//sort all forms by id as a lawyer 
router.get('/AllFormSortedByFormId/', async (req,res) => {  // sort all forms by form id
    const forms = await formController.search()
    forms.sort(userController.compareById)

})

//sort by form creation date for a specific user
router.get('/SpecificFormsSortedByFormDate/:id', async(req, res) => {   
=======
//sort by case creation date for a specific user
router.get('/SpecificCasesSortedByCaseDate/:id', async(req, res) => {   
>>>>>>> e3c20fd2470b7c101d3c1e90b10f8dc3d49867c6
    const userid=req.params.id
    var SpecificUser= await userController.search('_id' ,userid )
    SpecificUser.forms.sort(userController.compareByDate)
    return res.json({ data: SpecificUser.forms });
})


<<<<<<< HEAD

//sort specific forms by id as a lawyer 
router.get('/SpecificFormSortedByFormId/:id', async (req,res) => {  // sort specific forms by form id
    var userid=req.params.id
    var searchUsers = await userController.search('_id',userid)
    //searchUsers.forms = await formController.search()
    searchUsers.forms.sort(userController.compareById)
    return res.json({ data: searchUsers.forms });
})



=======
//sort cases by id as a lawyer 
router.get('/CaseSortedByCaseId/', async (req,res) => { // sort cases by case id
    var forms= await Forms.find()
    forms.sort(compareById)
    return res.json({ data: forms });
})


>>>>>>> e3c20fd2470b7c101d3c1e90b10f8dc3d49867c6
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
router.get('/getLaywerCommentsOfInvestorsForm/:id', async(req, res) => {
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

 
//Register a user
router.post('/register', async (req,res) => {                       //register Investor
    const newUser = await userController.registerInvestor(req.body) 
    if(newUser.error) return res.status(400).send(newUser) 
     return res.json({msg:'Account was created successfully', data: newUser})
})

//Login
router.post('/login',async(req,res)=>{
    try{
    const email=req.body.email;
    const password=req.body.password;
    const user = await User.findOne({email});
    if (!user)
        return res.status(404).json({email:'This email is not registered yet'})
    const doesItMatch=await bcrypt.compareSync(password,user.password);
    if (doesItMatch)
    {
        const payload={
            id: user.id,
            name:user.name,
            email:user.email
        }
    const token=jwt.sign(payload,tokenKey,{expiresIn:'1h'})  
    res.json({data: `Bearer ${token}`})
    return res.json({msg: 'You are logged in now',data: 'Token' })
    } 
    else 
        return res.status(400).send({ password: 'Wrong password' });   
}
catch(e){}
})


router.post('/register', async (req,res) => {                       //register Investor
    const newUser = await userController.registerInvestor(req.body) 
    if(newUser.error) return res.status(400).send(newUser) 
     return res.json({msg:'Investor was created successfully', data: newUser})

<<<<<<< HEAD
    })

//update a user 
 router.put('/:id' , async (req,res) => {
      var id = req.params.id  
=======

    }
 )



//update a user
 router.put('/:id', async (req,res) => {
      
      const id = req.params.id 
>>>>>>> e3c20fd2470b7c101d3c1e90b10f8dc3d49867c6
      const updateUser = await userController.update('_id',id,req.body)
      if(!updateUser) return res.json({msg :'ID not there'})
      if(updateUser.error) return res.status(400).send(updateUser)
      return res.json({msg : 'User Updated Successfully',data: updateUser})

 })


//update a user's form 
router.put('/:userId/:formId' , async (req,res) => {
    
    var userid=req.params.userId 
    var formid=req.params.formId
    var user= await userController.search('_id',userid)
    var updatedForm= await formController.update('_id',formid,req.body)
    user.forms = updatedForm
    const returnedUser = await userController.update('_id',userid,{forms:user.forms})
    return res.json({data:returnedUser});

})



//get the case of the lawyer/Reviewer 
//lsa we need to add en bageb ely status bta3etha in progress only
router.get('/getForms/:id',async(req,res) => {
    const userid=req.params.id
    const user= await userController.search('_id',userid)
    const formsOfUsers = user.forms
    return res.json({ data: formsOfUsers });
});

<<<<<<< HEAD


=======
>>>>>>> e3c20fd2470b7c101d3c1e90b10f8dc3d49867c6
//When you delete a specific user , you delete with it all his forms 
//Delete a user
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     var SpecificUser= await userController.search('_id' ,id )
<<<<<<< HEAD
     for(i=0;i<SpecificUser.forms.length;i++){
         var formId=SpecificUser.forms[i]._id
         await formController.remove('_id',formId)
     }
     const deletedUser = await userController.remove('_id',id)
=======
     if(!SpecificUser) return res.json({msg:'This user doesnt exist'})
     for(i=0;i<SpecificUser.forms.length;i++){
         var formId=SpecificUser.forms[i]._id
         await formController.remove('_id',formId)
         
     }
     
     const deletedUser = await userController.remove('_id',id)

>>>>>>> e3c20fd2470b7c101d3c1e90b10f8dc3d49867c6
     res.json({msg:'User was deleted successfully', data: deletedUser})
    }
    catch(error) {
    
        console.log(error)
    }  
 })

<<<<<<< HEAD


=======
>>>>>>> e3c20fd2470b7c101d3c1e90b10f8dc3d49867c6
module.exports = router;








