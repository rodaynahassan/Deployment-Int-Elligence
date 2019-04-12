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
const axios = require('axios');


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
    const userId = req.params.id        //userID
    req.body.userId=userId
    const newForm = await formController.create(req.body)
    newForm.fees = 0
    const user = await userController.search('_id',userId)
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
    if(newForm.error) return res.status(400).send(newForm.error)
    if(!newForm) return res.json({msg:"Form is null"})
    user.forms.push(newForm)
    const returnedUser = await userController.update('_id',userId,{forms:user.forms})
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
    try{
     const newUser = await userController.create(req.body)
     if(newUser.error) return res.status(400).send(newUser) 
     return res.json({msg:'User was created successfully', data: newUser})
    }
   
catch(err)
{
    console.log(err)
   }
})
//Update a User
 //Register a user
router.post('/register', async (req,res) => {                       //register Investor
    const newUser = await userController.registerInvestor(req.body)
    if(newUser.error) return res.status(400).send(newUser) 
    if(newUser.userType==='Investor'){
        newUser.financialBalance=0
        returnedUser = await userController.update('_id',newUser._id,{financialBalance:newUser.financialBalance})
        return res.json({msg:'Account was created successfully', data: returnedUser})
    }
    return res.json({msg:'Account was created successfully', data:newUser})
     
    
     
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

//Calculating fees as a lawyer
router.put('/CalculatingFees/:formId',async(req,res) =>{
   var equation = await axios.get('http://localhost:5000/routes/api/fakeServer/ReturningEquation')
   const formid = req.params.formId
   const form = await formController.search('_id',formid)
   var capital = form.equityCapital
   var calculatedFees = (equation.data.data.m * capital)+(equation.data.data.c)
   const returnedFees = calculatedFees
   const updatedForm = await formController.update('_id',formid,{fees:returnedFees})
   const investorid = updatedForm.userId
   const lawyerid = updatedForm.lawyerId
   const investor = await userController.search('_id',investorid)
   const lawyer = await userController.search('_id',lawyerid)
   const investorForms = investor.forms
    for(i=0;i<investorForms.length;i++){
        if(investorForms[i]._id.equals(formid)){
            investorForms.remove(investorForms[i])
        }
    }
    const lawyerForms = lawyer.forms
    for(i=0;i<lawyerForms.length;i++){
        if(lawyerForms[i]._id.equals(formid)){
            lawyerForms.remove(lawyerForms[i])
        }
    }
    lawyer.forms.push(updatedForm)
    investor.forms.push(updatedForm)
    const returnedLawyer = await userController.update('_id',lawyerid,{forms:lawyer.forms})
    const returnedInvestor = await userController.update('_id',investorid,{forms:investor.forms})
   res.json({data:updatedForm})
})
//reject a specific form 
router.put('/reject/:formId/:userId',async(req,res)=>{
    const userid=req.params.userId ;
    const formid=req.params.formId ;
    const user= await userController.search('_id',userid)
    const form = await formController.search('_id',formid) 
    if(form.status==='In progress Reviewer' && user.userType === ("Reviewer"))
    {
        form.status = "Rejected"
        const formId = form._id
        
        const id = form.userId
        const investor = await userController.search('_id',id)
        const investorForms = investor.forms
        for(i=0;i<investorForms.length;i++){
            if(investorForms[i]._id.equals(formid)){
                investorForms.remove(investorForms[i])
            }
        }
        const lawyerid = form.lawyerId
        const lawyer = await userController.search('_id',lawyerid)
        const lawyerForms = lawyer.forms
        for(i=0;i<lawyerForms.length;i++){
            if(lawyerForms[i]._id.equals(formid)){
                lawyerForms.remove(lawyerForms[i])
            }
        }
        const reviewerid = req.params.userId
        const reviewer = await userController.search('_id',reviewerid)
        const reviewerForms = reviewer.forms
        for(i=0;i<reviewerForms.length;i++)
        {
            if(reviewerForms[i]._id.equals(formid)){
                reviewerForms.remove(reviewerForms[i])
            }
        }

         const returnedForm = await formController.update('_id',formId,{status:form.status})
        user.forms.push(returnedForm)
        investor.forms.push(returnedForm)
        lawyer.forms.push(returnedForm)
        reviewer.forms.push(returnedForm)
        const returnedUser = await userController.update('_id',userid,{forms:user.forms})
        const returnedInvestor = await userController.update('_id',id,{forms:investor.forms})
        const returnedLawyer = await userController.update('_id',lawyerid,{forms:lawyer.forms})
        const returnedReviewer = await userController.update('_id',reviewerid,{forms:reviewer.forms})
        return res.json({data:returnedForm})
    } 
    else
    {
        return res.json({msg:'NO'})
    }
    
});

//Accepting and updating financial balance of the investor
router.put('/accept/:formId/:userId',async(req,res)=>{
    const userid=req.params.userId;
    const formid=req.params.formId;
    const user= await userController.search('_id',userid)
    const form = await formController.search('_id',formid) 
    if(form.status ==='In progress Lawyer' && user.userType ==='Lawyer')
    {
        form.status = 'Lawyer accepted'
        const investorid = form.userId
        const investor = await userController.search('_id',investorid)
        const investorForms = investor.forms
        for(i=0;i<investorForms.length;i++){
            if(investorForms[i]._id.equals(formid)){
                investorForms.remove(investorForms[i])
            }
        }
        const lawyerForms = user.forms
        for(i=0;i<lawyerForms.length;i++){
            if(lawyerForms[i]._id.equals(formid)){
                lawyerForms.remove(lawyerForms[i])
            }
        }
        const returnedForm = await formController.update('_id',formid,{status:form.status})
        user.forms.push(returnedForm)
        investor.forms.push(returnedForm)
        const returnedLawyer = await userController.update('_id',userid,{forms:user.forms})
        const returnedInvestor = await userController.update('_id',investorid,{forms:investor.forms})
        return res.json({data:returnedLawyer})
    }
    else if(form.status==='In progress Reviewer' && user.userType === 'Reviewer')
    {
        form.status = 'Approved'
        const investorid = form.userId
        const investor = await userController.search('_id',investorid)
        const investorForms = investor.forms
        for(i=0;i<investorForms.length;i++){
            if(investorForms[i]._id.equals(formid)){
                investorForms.remove(investorForms[i])
            }
        }
        const lawyerid = form.lawyerId
        const lawyer = await userController.search('_id',lawyerid)
        const lawyerForms = lawyer.forms
        for(i=0;i<lawyerForms.length;i++){
            if(lawyerForms[i]._id.equals(formid)){
                lawyerForms.remove(lawyerForms[i])
            }
        }
        const reviewerForms = user.forms
        for(i=0;i<reviewerForms.length;i++)
        {
            if(reviewerForms[i]._id.equals(formid)){
                reviewerForms.remove(reviewerForms[i])
            }
        }

        const returnedForm = await formController.update('_id',formid,{status:form.status})
        user.forms=reviewerForms
        lawyer.forms=lawyerForms
        investor.forms.push(returnedForm)
        if(investorid.equals(lawyerid)){
            const returnedInvestor = await userController.update('_id',investorid,{forms:investor.forms})
            const returnedReviewer = await userController.update('_id',userid,{forms:user.forms})
            return res.json({data:returnedReviewer})
        }
        else{
            const updatedFinancialBalance = form.fees + investor.financialBalance
            const returnedInvestor = await userController.update('_id',investorid,{forms:investor.forms,financialBalance:updatedFinancialBalance})
            const returnedReviewer = await userController.update('_id',userid,{forms:user.forms})
            const returnedLawyer = await userController.update('_id',lawyerid,{forms:lawyer.forms})
            return res.json({data:returnedReviewer})
        }     
    } 
    else
    {
        return res.json({msg:'You already accepted this case'})
    }
    
});

//add a form to the array of forms of the lawyer/reviewer
router.put('/takingForm/:userId/:formId' ,  async (req,res) => {
    const userid = req.params.userId
    const formid = req.params.formId
    const user = await userController.search('_id',userid)
    const form = await formController.search('_id',formid)
    if(form.status==='Unassigned' && user.userType==='Lawyer'){
        form.status='In progress Lawyer'
        const id = form.userId
        const investor = await userController.search('_id',id)
        const investorForms = investor.forms
        for(i=0;i<investorForms.length;i++){
            if(investorForms[i]._id.equals(formid)){
                investorForms.remove(investorForms[i])
            }
        }
        const returnedForm = await formController.update('_id',formid,{status:form.status,lawyerId:userid})
        user.forms.push(returnedForm)
        investor.forms.push(returnedForm)
        const returnedUser = await userController.update('_id',userid,{forms:user.forms})
        const returnedInvestor = await userController.update('_id',id,{forms:investor.forms})
        return res.json({data:returnedUser})
   }
   else if(form.status==='Lawyer accepted' && user.userType==='Reviewer'){
        form.status='In progress Reviewer'
        const id = form.userId
        const investor = await userController.search('_id',id)
        const investorForms = investor.forms
        for(i=0;i<investorForms.length;i++){
            if(investorForms[i]._id.equals(formid)){
                investorForms.remove(investorForms[i])
            }
        }
        const lawyerid = form.lawyerId
        const lawyer = await userController.search('_id',lawyerid)
        const lawyerForms = lawyer.forms
        for(i=0;i<lawyerForms.length;i++){
            if(lawyerForms[i]._id.equals(formid)){
                lawyerForms.remove(lawyerForms[i])
            }
        }
        const returnedForm = await formController.update('_id',formid,{status:form.status})
        user.forms.push(returnedForm)
        investor.forms.push(returnedForm)
        lawyer.forms.push(returnedForm)
        const returnedUser = await userController.update('_id',userid,{forms:user.forms})
        const returnedInvestor = await userController.update('_id',id,{forms:investor.forms})
        const returnedLawyer = await userController.update('_id',lawyerid,{forms:lawyer.forms})
        return res.json({data:returnedUser})
}
   else{
       return res.json({msg:'You can not take it :)'})
   }
})


//update a user 
 router.put('/:id' , async (req,res) => {
      var id = req.params.id  
      const updateUser = await userController.update('_id',id,req.body)
      if(!updateUser) return res.json({msg :'ID not there'})
      if(updateUser.error) return res.status(400).send(updateUser)
      return res.json({msg : 'User Updated Successfully',data: updateUser})
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
     const userForms = user.forms
     for(i=0;i<user.forms.length;i++){
         if(userForms[i]._id.equals(formid)){
             userForms.remove(userForms[i])
         }
     }
     userForms.push(updatedForm)
     user.forms = userForms
     const returnedUser = await userController.update('_id',userid,{forms:user.forms})
     if(req.body.status){
        if(req.body.status==='Approved'){
            var notify = await notifications.notifyExternalEntities(updatedForm)
        }
    }

     if(req.body.status!==undefined||req.body.lawyerComments!==undefined||req.body.reviewersComments!==undefined){
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
   // console.log(user)
    const form = await formController.search('_id',formid) 
    //console.log(form)
    var comments = form.lawyerComments
    for(i=0;i<req.body.lawyerComments.length;i++)
    {
        var x = req.body.lawyerComments[i]
        comments.push(x)
    }
    var updatedForm = null;
    for(i=0;i<user.forms.length;i++){
        if(user.forms[i]._id.equals(form._id))
        {
            console.log(i)
            user.forms[i] = await formController.update('_id',formid,{lawyerComments:comments})
            updatedForm = user.forms[i]
        }
    }
    const returnedUser = await userController.update('_id',userid,{forms:user.forms})
    if(req.body.lawyerComments!==[] || req.body.lawyerComments!==undefined ){
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
    var updatedForm = null;
    for(i=0;i<user.forms.length;i++){
        if(user.forms[i]._id.equals(form._id))
        {
            user.forms[i] = await formController.update('_id',formid,{reviewerComments:comments})
            updatedForm = user.forms[i]
        }
    }
    const returnedUser = await userController.update('_id',userid,{forms:user.forms})
    if(req.body.reviewerComments!==[] || req.body.reviewerComments!==undefined ){
        var notifyUser = await notifications.notifyUserForFormUpdates(user,updatedForm)
        return res.json({data:returnedUser,notification:notifyUser})
     }

     return res.json({data:returnedUser})
});

//get Array of Form 
router.get('/getUserForms/:id', async(req, res)=>{
    const userId = req.params.id
    const user = await userController.search('_id',userId)
    var userForms = user.forms
    const arrayForms =[]
    if(user.userType==='Lawyer'){
        for(i=0;i<userForms.length;i++){
            if(userForms[i].status==='In progress Lawyer' || userForms[i].status==='Lawyer accepted'){
                arrayForms.push(userForms[i])
            }
        }
        return res.json({data:arrayForms})
    }
    else if(user.userType==='Reviewer'){
        for(i=0;i<userForms.length;i++){
            if(userForms[i].status==='In progress Reviewer'){
                arrayForms.push(userForms[i])
            }
        }
        return res.json({data:arrayForms})
    }
    else{
        return res.json({ msg:'Not a user'});
    }
})

module.exports = router;

