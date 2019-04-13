const express = require('express');
const Joi = require('joi');
const router = express.Router();
const formController = require('../../controllers/formController')
const userController=require('../../controllers/userController')
const User = require('../../Models/User')
const validator = require('../../Validation/UserValidation')
const notifications = require('../../helpers/notifications')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys_dev').secretOrKey


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
//sort forms by id as a lawyer 
router.get('/formSortedByformId/', async (req,res) => { // sort forms by form id
    var forms= await Forms.find()
    forms.sort(compareById)
    return res.json({ data: forms });
})
//sort all forms by id as a lawyer 
router.get('/AllFormSortedByFormId/', async (req,res) => {  // sort all forms by form id
    const forms = await formController.search()
    forms.sort(userController.compareById)
})
//sort specific forms by id as a lawyer 
router.get('/SpecificFormSortedByFormId/:id', async (req,res) => {  // sort specific forms by form id
    var userid=req.params.id
    var searchUsers = await userController.search('_id',userid)
    searchUsers.forms.sort(userController.compareById)
    return res.json({ data: searchUsers.forms });
})
//get all lawyers 
router.get('/getAllLawyers', async(req, res) => {
    const userType = await userController.search('userType','Lawyer')
    return res.json({data:userType})
})
//get all investors
router.get('/getAllInvestors', async(req, res) => {
    const userType = await userController.search('userType','Investor')
    return res.json({data:userType})
})
//get all Reviewers 
router.get('/getAllReviewers', async(req, res) => {
    const userType = await userController.search('userType','Reviewer')
    return res.json({data:userType})
})
// view a certain user
router.get('/:id', async(req, res) => {
    const userid=req.params.id
    const searchUsers = await userController.search('_id',userid)
    return res.json({ data: searchUsers });
})

// view certain attributes of user
router.get('/CertainAttributes/:id', async(req, res) => {
    const userid=req.params.id
    const searchUsers = await userController.search('_id',userid)
    return res.json({ Username:searchUsers.name, Gender: searchUsers.gender, Nationality: searchUsers.nationality, IdentificationType : searchUsers.identificationType, IdentificationNumber: searchUsers.identificationNumber, Birthdate: searchUsers.birthdate, Address: searchUsers.address, Email: searchUsers.email, Password: searchUsers.password, Telephone: searchUsers.telephone, Fax: searchUsers.fax});
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
//As a User i can Create a form
router.post('/CreatingForm/:id', async(req,res) =>{
    const id = req.params.id        //userID
    req.body.userId=id
    const newForm = await formController.create(req.body)

    const user = await userController.search('_id',id)
    if(newForm.error) return res.status(400).send(newForm.error)
    if(!newForm) return res.json({msg:"Form is null"})

    const user = await userController.search('_id',userId)
    //console.log(newForm)
    if(newForm.error) return res.status(400).json(newForm.error)
    if(!newForm) return res.json({msg:"Form is null"})
    newForm.fees = 0
    if(user.userType === "Investor")
    {
        newForm.status = "Unassigned"
        const formId = newForm._id
        const returnedForm = await formController.update('_id',formId,{status:newForm.status,fees:newForm.fees})

    }
    else if(user.userType === "Lawyer")
    {
        newForm.status = "Lawyer accepted"
        newForm.lawyerId=userId
        const formId = newForm._id
        const returnedForm = await formController.update('_id',formId,{status:newForm.status,lawyerId:userId,fees:newForm.fees})
    }
    else{
        return res.json({msg:'You can not create a form'})
    }
    

    user.forms.push(newForm)
    const returnedUser = await userController.update('_id',id,{forms:user.forms})
    return res.json({data:returnedUser})
})
//When you delete a specific user , you delete the unassigned forms only
//Delete a user
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     var SpecificUser= await userController.search('_id' ,id )
     if(!SpecificUser) return res.json({msg:'This user doesnt exist'})
     for(i=0;i<SpecificUser.forms.length;i++)
     {
        //var deletedForm = SpecificUser.forms[i].status
        if(SpecificUser.forms[i].status === 'Unassigned')
        {
            var formId=SpecificUser.forms[i]._id
            await formController.remove('_id',formId)  
        }
     }
     const deletedUser = await userController.remove('_id',id)
     res.json({msg:'User was deleted successfully', data: deletedUser})
    }
    catch(error) {
        console.log(error)
    }  
 })
//Create a User
router.post('/', async (req,res) => {
    
     const newUser = await userController.create(req.body)
     if(newUser.error) return res.status(400).send(newUser) 
     return res.json({msg:'User was created successfully', data: newUser})
    }
 )
//Update a User
 //Register a user
router.post('/register', async (req,res) => {                       //register Investor
    const newUser = await userController.registerInvestor(req.body) 
    if(newUser.error) return res.status(400).send(newUser) 
   
     return res.json({msg:'Account was created successfully', data: newUser})
})


// change password
router.post('/changePassword/:id', async (req,res) => { 
    const userid = req.params.id  
    const user = await userController.search('_id',userid)
    const newPassword=req.body.newPassword;
    const confirmPassword= req.body.confirmPassword;
        if (newPassword===confirmPassword)
        {
        const salt = await bcrypt.genSalt(10);
        newPasswordEnc= await bcrypt.hash(newPassword, salt); 
        user.password=newPasswordEnc
        await user.save();
        return res.json({msg:'Password was updated successfully', data: user})
        }
        else 
        return res.json({msg:'The passwords do not match!'})
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
    return res.json({msg: 'You are logged in now',data:'Token' })
    } 
    else 
        return res.status(400).send({ password: 'Wrong password' });   
}
catch(e){}
})




//update a user 
 router.put('/:id' , async (req,res) => {
     try{
      var id = req.params.id  
      const updateUser = await userController.update('_id',id,req.body)
      if(!updateUser) return res.json({msg :'ID not there'})
      if(updateUser.error) return res.status(400).json(updateUser)
      return res.json({msg : 'User Updated Successfully',data: updateUser})
     }
     catch(error)
    {
        console.log(error)
    }
 })
//as a lawyer/reviewer/investor I should be able to view my in progress cases
router.get('/getInProgressCases/:id',async(req,res) => {
    const userid = req.params.id
    var user = await userController.search('_id',userid)
    var userForms = user.forms
    var inprogressForms = []
    for(i=0;i<userForms.length;i++){
        if((userForms[i].status==='In progress Lawyer')||(userForms[i].status==='In progress Reviewer'))
            inprogressForms.push(userForms[i])
    }
    res.json({data:inprogressForms})
})

 //Update a user's form
 router.put('/:userId/:formId' , async (req,res) =>{
     var userid = req.params.userId
     var formid=req.params.formId
     var user = await userController.search('_id',userid)
     var updatedForm = await formController.update('_id',formid,req.body)
     user.forms = updatedForm
     const returnedUser = await userController.update('_id',userid,{forms:user.forms})
     if(req.body.status){
        if(req.body.status==='Approved'){
            var notify = await notifications.notifyExternalEntities(updatedForm)
        }
    }

     if(req.body.status!==undefined||req.body.lawyerSeen!==undefined||req.body.lawyerComments!==undefined||req.body.lawyerApprove!==undefined||req.body.reviewerSeen!==undefined||req.body.reviewersComments!==undefined||req.body.reviewerApprove!==undefined){
        var notifyUser = await notifications.notifyUserForFormUpdates(user,updatedForm)
        return res.json({data:returnedUser,notification:notifyUser})
     }

     return res.json({data:returnedUser})  
})
//as an investor i should be able to view my companies
router.get('/getApprovedCompanies/:id',async(req,res) => {
    const userid = req.params.id
    var user = await userController.search('_id',userid)
    if(user.userType==='Investor'){
        var userForms = user.forms
        var approvedForms = []
        for(i=0;i<userForms.length;i++){
            if(userForms[i].status==='Approved')
                approvedForms.push(userForms[i])
        }
        res.json({data:approvedForms})
}
else{
    res.json({msg: 'You are not an investor to get you accepted companies'})
}
})


//get the form of the lawyer/Reviewer 
router.get('/getforms/:id',async(req,res) => {
    const userid = req.params.id
    const user = await User.findById(userid)
    var arrayOfForms = user.forms 
    res.json({data: arrayOfForms})
});
// as a lawyer i can make a comment
router.put('/lawyerComments/:userId/:formId', async(req, res) => {
    const userid=req.params.userId 
    const formid=req.params.formId
    const user= await userController.search('_id',userid)
    console.log(user)
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
    if(req.body.lawyerComments!==undefined){
        var notifyUser = await notifications.notifyUserForFormUpdates(user,updatedForm)
        return res.json({data:returnedUser,notification:notifyUser})
     }

     return res.json({data:returnedUser})
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
    if(req.body.reviewerComments!==undefined){
        var notifyUser = await notifications.notifyUserForFormUpdates(user,updatedForm)
        return res.json({data:returnedUser,notification:notifyUser})
     }

     return res.json({data:returnedUser})
});
module.exports = router;

