const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const formController = require('../../controllers/formController')
const userController=require('../../controllers/userController')
const User = require('../../Models/User')
const Forms = require('../../Models/Form')
const validator = require('../../Validation/UserValidation')
<<<<<<< HEAD
=======
const formController = require('../../controllers/formController')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys_dev').secretOrKey

>>>>>>> 55761158caa77b76e9fc1c8ab30a1679593ab92e

//sort all forms for a  by form creation date
router.get('/AllformsSortedByformDate/', async(req, res) => {                    
    var forms= await formController.search()
    forms.sort(userController.compareByDate)
    return res.json({ data: forms });
})
//sort by form creation date for a specific user
router.get('/SpecificformsSortedByformDate/:id', async(req, res) => {   
    const userid=req.params.id
    var SpecificUser= await userController.search('_id' ,userid )
    SpecificUser.forms.sort(userController.compareByDate)
    return res.json({ data: SpecificUser.forms });
})
<<<<<<< HEAD
//sort forms by id as a lawyer 
router.get('/formSortedByformId/', async (req,res) => { // sort forms by form id
=======
//sort cases by id as aa lawyer 
router.get('/CaseSortedByCaseId/', async (req,res) => { // sort cases by case id
>>>>>>> 55761158caa77b76e9fc1c8ab30a1679593ab92e
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


// View lawyer comments of specific form of investor 
router.get('/getLaywerCommentsOfInvestorsform/:id', async(req, res) => {
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
     return res.json({msg:'Investor was created successfully', data: newUser})
 })

<<<<<<< HEAD
router.post('/register', async (req,res) => {                       //register Investor
    const newUser = await userController.registerInvestor(req.body) 
    if(newUser.error) return res.status(400).send(newUser) 
     return res.json({msg:'Investor was created successfully', data: newUser})

=======
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
>>>>>>> 55761158caa77b76e9fc1c8ab30a1679593ab92e

//update a user
 router.put('/:id', async (req,res) => {
      
      const id = req.params.id 
      const updateUser = await userController.update('_id',id,req.body)
      if(!updateUser) return res.json({msg :'ID not there'})
      if(updateUser.error) return res.status(400).send(updateUser)
      return res.json({msg : 'User Updated Successfully',data: updateUser})

 })

<<<<<<< HEAD

//get the case of the lawyer/Reviewer 
//lsa we need to add en bageb ely status bta3etha in progress only
router.get('/getCases/:id',async(req,res) => {
    const userid = req.params.id
    const user = await User.findById(userid)
    var arrayOfForms = user.forms 
    res.json({data: arrayOfForms})
});

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
=======
>>>>>>> 55761158caa77b76e9fc1c8ab30a1679593ab92e

//get the form of the lawyer/Reviewer 
router.get('/getforms/:id',async(req,res) => {
    const userid = req.params.id
    const user = await User.findById(userid)
    var arrayOfForms = user.forms 
    res.json({data: arrayOfForms})
});

<<<<<<< HEAD

// as a lawyer/reviewer i can make a decision 
// router.put('/Decision/:userId/:formId', async(req, res) => {
//     const userid=req.params.userId 
//     const formid=req.params.formId
//     const user= await userController.search('_id',userid)
//     const updatedForm= await formController.update('_id',formid,req.body)
//     user.forms = updatedForm
//     const returnedUser = await userController.update('_id',userid,{forms:user.forms})
//     return res.json({data:returnedUser});
// });


// as a lawyer i can make a comment
router.put('/lawyerComments/:userId/:formId', async(req, res) => {
    const userid=req.params.userId 
    const formid=req.params.formId
    const user= await userController.search('_id',userid)
    //console.log(user)
    const form = await formController.search('_id',formid) 
    //console.log(form)
    var comments = form.lawyerComments
    for(i=0;i<req.body.lawyerComments.length;i++)
    {
        var x = req.body.lawyerComments[i]
        comments.push(x)
    }
    for(i=0;i<user.forms.length;i++){
        if(user.forms[i]._id.equals(form._id))
        {
            console.log(i)
            user.forms[i] = await formController.update('_id',formid,{lawyerComments:comments})
        }
    }
    const returnedUser = await userController.update('_id',userid,{forms:user.forms})
    return res.json({data:returnedUser});
});

//as a reviewer i can make a comment
router.put('/reviewerComments/:userId/:formId', async(req, res) => {
    const userid=req.params.userId 
    const formid=req.params.formId
    const user= await userController.search('_id',userid)
    const form = await formController.search('_id',formid) 
    var comments = form.reviewerComments
    for(i=0;i<req.body.reviewerComments.length;i++)
    {
        var x = req.body.reviewerComments[i]
        comments.push(x)
    }
    for(i=0;i<user.forms.length;i++){
        if(user.forms[i]._id.equals(form._id))
        {
            user.forms[i] = await formController.update('_id',formid,{reviewerComments:comments})
        }
    }
    const returnedUser = await userController.update('_id',userid,{forms:user.forms})
    return res.json({data:returnedUser});
});


module.exports = router;








=======
module.exports = router;
>>>>>>> 55761158caa77b76e9fc1c8ab30a1679593ab92e
