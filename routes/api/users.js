const express = require('express');
const Joi = require('joi');
const router = express.Router();
const formController = require('../../controllers/formController')
const userController = require('../../controllers/userController')
const User = require('../../Models/User')
const Admin = require('../../Models/Admin')
const validator = require('../../Validation/UserValidation')
const notifications = require('../../helpers/notifications')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys_dev').secretOrKey
const passport = require('passport')
require('../../config/passport')(passport)






















// //       for testing!!!!!!!!
// router.get('/getInvestorName',passport.authenticate('jwt', {session: false}) ,async (req,res) => {
//     // You can access the logged in user through req.user
//     // Add your authorization rules accordingly
//     const userid=req.user.id
//     const user= await userController.search('_id',userid)
//     const name= user.name
//     return res.json({ data: name  });

//     // return res.json({data: req.user})

// })









//sort all forms for a  by form creation date
router.get('/AllformsSortedByformDate/', async (req, res) => {
    var forms = await formController.search()
    forms.sort(userController.compareByDate)
    return res.json({ data: forms });
})

















//sort forms by id as a lawyer 
router.get('/formSortedByformId/', async (req, res) => { // sort forms by form id
    var forms = await Forms.find()
    forms.sort(compareById)
    return res.json({ data: forms });
})


//sort all forms by id as a lawyer 
router.get('/AllFormSortedByFormId/', async (req, res) => {  // sort all forms by form id
    const forms = await formController.search()
    forms.sort(userController.compareById)
})




//sort by form creation date for a specific user
router.get('/SpecificformsSortedByformDate', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userid = req.user.id
    console.log(req.headers)
    if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
        var SpecificUser = await userController.search('_id', userid)
        SpecificUser.forms.sort(userController.compareByDate)
        return res.json({ data: SpecificUser.forms });
    }
    else {
        return res.json({ msg: "Non Authorized" });
    }
})
//sort specific forms by id as a lawyer 
router.get('/SpecificFormSortedByFormId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    var userid = req.user.id
    if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
        var searchUsers = await userController.search('_id', userid)
        searchUsers.forms.sort(userController.compareById)
        return res.json({ data: searchUsers.forms });
    }
    else {
        return res.json({ msg: "Non Authorized" });
    }

})











//get all lawyers 
router.get('/getAllLawyers', async (req, res) => {
    const userType = await userController.search('userType', 'Lawyer')
    return res.json({ data: userType })
})
//get all investors
router.get('/getAllInvestors', async (req, res) => {
    const userType = await userController.search('userType', 'Investor')
    return res.json({ data: userType })
})
//get all Reviewers 
router.get('/getAllReviewers', async (req, res) => {
    const userType = await userController.search('userType', 'Reviewer')
    return res.json({ data: userType })
})







// view a certain user
router.get('/CertainUser', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userid = req.user.id
    const searchUsers = await userController.search('_id', userid)
    return res.json({ data: searchUsers });
})








//view the financialBalance of an investor
router.get('/getTheFinancialBalance', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userid = req.user.id
    if (req.user.userType === "Investor") {
        const user = await userController.search('_id', userid)
        const financialBalance = user.financialBalance
        return res.json({ data: financialBalance });
    }
    else {
        return res.json({ msg: "Non Authorized" })
    }
})










// View lawyer comments of specific form of investor 
router.get('/getLaywerCommentsOfInvestorsform', passport.authenticate('jwt', { session: false }), async (req, res) => {
    var userid = req.user.id
    if (req.user.userType === "Investor") {
        var user = await userController.search('_id', userid)
        var lawyercom = user.forms.lawyerComments
        return res.json({ data: lawyercom });
    }
    else {
        return res.json({ msg: "Non Authorized" })
    }
})













//get all users
router.get('/getAllUsers', async (req, res) => {
    const searchUsers = await userController.search()
    res.json({ data: searchUsers })
})










// //As a User i can Create a form
// router.post('/CreatingForm', passport.authenticate('jwt', { session: false }), async (req, res) => {
//     const id = req.user.id        //userID
//     req.body.userId = id
//     const newForm = await formController.create(req.body)
//     const user = await userController.search('_id', id)
//     if (newForm.error) return res.status(400).send(newForm.error)
//     if (!newForm) return res.json({ msg: "Form is null" })
//     user.forms.push(newForm)
//     const returnedUser = await userController.update('_id', id, { forms: user.forms })
//     return res.json({ data: returnedUser })
// })








//As a User i can Create a form
router.post('/CreatingForm', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userId = req.user.id        //userID
    req.body.userId = userId

    if (req.user.userType === "Investor" || req.user.userType === "Lawyer") {
        const newForm = await formController.create(req.body)
        const user = await userController.search('_id', userId)
        if (user.userType === "Investor") {
            newForm.status = "Unassigned"
            const formId = newForm._id
            const returnedForm = await formController.update('_id', formId, { status: newForm.status })

        }
        else if (user.userType === "Lawyer") {
            newForm.status = "Lawyer accepted"
            newForm.lawyerId = userId
            const formId = newForm._id
            const returnedForm = await formController.update('_id', formId, { status: newForm.status, lawyerId: userId })
        }
        else {
            return res.json({ msg: 'You can not create a form' })
        }
        if (newForm.error) return res.status(400).send(newForm.error)
        if (!newForm) return res.json({ msg: "Form is null" })
        user.forms.push(newForm)
        const returnedUser = await userController.update('_id', userId, { forms: user.forms })
        return res.json({ data: returnedUser })
    }
    else {
        return res.json({ msg: 'Non Authorized' })
    }
})









//add a form to the array of forms of the lawyer/reviewer
router.put('/takingForm/:formId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userid = req.user.userId
    if (req.user.userType === "Reviewer" || req.user.userType === "Lawyer") {
        const formid = req.params.formId
        const user = await userController.search('_id', userid)
        const form = await formController.search('_id', formid)
        if (form.status === 'Unassigned' && user.userType === 'Lawyer') {
            form.status = 'In progress Lawyer'
            const id = form.userId
            const investor = await userController.search('_id', id)
            const investorForms = investor.forms
            for (i = 0; i < investorForms.length; i++) {
                if (investorForms[i]._id.equals(formid)) {
                    investorForms.remove(investorForms[i])
                }
            }
            const returnedForm = await formController.update('_id', formid, { status: form.status, lawyerId: userid })
            user.forms.push(returnedForm)
            investor.forms.push(returnedForm)
            const returnedUser = await userController.update('_id', userid, { forms: user.forms })
            const returnedInvestor = await userController.update('_id', id, { forms: investor.forms })
            return res.json({ data: returnedUser })
        }
        else if (form.status === 'Lawyer accepted' && user.userType === 'Reviewer') {
            form.status = 'In progress Reviewer'
            const id = form.userId
            const investor = await userController.search('_id', id)
            const investorForms = investor.forms
            for (i = 0; i < investorForms.length; i++) {
                if (investorForms[i]._id.equals(formid)) {
                    investorForms.remove(investorForms[i])
                }
            }
            const lawyerid = form.lawyerId
            const lawyer = await userController.search('_id', lawyerid)
            const lawyerForms = lawyer.forms
            for (i = 0; i < lawyerForms.length; i++) {
                if (lawyerForms[i]._id.equals(formid)) {
                    lawyerForms.remove(lawyerForms[i])
                }
            }
            const returnedForm = await formController.update('_id', formid, { status: form.status })
            user.forms.push(returnedForm)
            investor.forms.push(returnedForm)
            lawyer.forms.push(returnedForm)
            const returnedUser = await userController.update('_id', userid, { forms: user.forms })
            const returnedInvestor = await userController.update('_id', id, { forms: investor.forms })
            const returnedLawyer = await userController.update('_id', lawyerid, { forms: lawyer.forms })
            return res.json({ data: returnedUser })
        }
        else {
            return res.json({ msg: 'You can not take it :)' })
        }
    }
    else {
        return res.json({ msg: 'Non Authorized' })
    }

})


















//When you delete a specific user , you delete the unassigned forms only
//Delete a user
router.delete('delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        var SpecificUser = await userController.search('_id', id)
        if (!SpecificUser) return res.json({ msg: 'This user doesnt exist' })
        for (i = 0; i < SpecificUser.forms.length; i++) {
            //var deletedForm = SpecificUser.forms[i].status
            if (SpecificUser.forms[i].status === 'Unassigned') {
                var formId = SpecificUser.forms[i]._id
                await formController.remove('_id', formId)
            }
        }
        const deletedUser = await userController.remove('_id', id)
        res.json({ msg: 'User was deleted successfully', data: deletedUser })
    }
    catch (error) {
        console.log(error)
    }
})

















router.post('/register', async (req, res) => {                       //register Investor
    const newUser = await userController.registerInvestor(req.body)
    if (newUser.error) return res.status(400).send(newUser)

    return res.json({ msg: 'Account was created successfully', data: newUser })
})






//Login
router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({ email });
        if (!user) {

            const admin = await Admin.findOne({ email })
            if (!admin)
                return res.status(404).json({ email: 'This email is not registered yet' })
            else {
                const doesItMatch = await bcrypt.compareSync(password, admin.password);
                if (doesItMatch) {
                    const payload = {
                        id: admin.id,
                        name: admin.name,
                        email: admin.email
                    }
                    const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
                    //res.json({data: `Bearer ${token}`})
                    return res.json({ msg: 'You are logged in now', token: `Bearer ${token}`, type: admin.userType })
                }
            }
        }
        const doesItMatch = await bcrypt.compareSync(password, user.password);
        if (doesItMatch) {
            const payload = {
                id: user.id,
                name: user.name,
                email: user.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            //res.json({data: `Bearer ${token}`})
            return res.json({ msg: 'You are logged in now', token: `Bearer ${token}`, type: user.userType })//,data:'Token'
        }
        else
            return res.status(400).send({ password: 'Wrong password' });
    }

    catch (e) { console.log(e) }
})








//update a user 
router.put('/updateUser', passport.authenticate('jwt', { session: false }), async (req, res) => {
    var id = req.user.id
    const updateUser = await userController.update('_id', id, req.body)
    if (!updateUser) return res.json({ msg: 'ID not there' })
    if (updateUser.error) return res.status(400).send(updateUser)
    return res.json({ msg: 'User Updated Successfully', data: updateUser })
})













//as a lawyer/reviewer/investor I should be able to view my in progress cases
router.get('/getInProgressCases', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userid = req.user.id
    var user = await userController.search('_id', userid)
    var userForms = user.forms
    var inprogressForms = []
    for (i = 0; i < userForms.length; i++) {
        if ((userForms[i].status === 'In progress Lawyer') || (userForms[i].status === 'In progress Reviewer'))
            inprogressForms.push(userForms[i])
    }
    res.json({ data: inprogressForms })
})














//Update a user's form
router.put('/updateForm/:formId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    var userid = req.user.userId
    if (req.user.userType === "Investor" || req.user.userType === "Lawyer") {
        var formid = req.params.formId
        var user = await userController.search('_id', userid)
        var updatedForm = await formController.update('_id', formid, req.body)
        user.forms = updatedForm
        const returnedUser = await userController.update('_id', userid, { forms: user.forms })
        if (req.body.status) {
            if (req.body.status === 'Approved') {
                var notify = await notifications.notifyExternalEntities(updatedForm)
            }
        }

        if (req.body.status !== undefined || req.body.lawyerSeen !== undefined || req.body.lawyerComments !== undefined || req.body.lawyerApprove !== undefined || req.body.reviewerSeen !== undefined || req.body.reviewersComments !== undefined || req.body.reviewerApprove !== undefined) {
            var notifyUser = await notifications.notifyUserForFormUpdates(user, updatedForm)
            return res.json({ data: returnedUser, notification: notifyUser })
        }

        return res.json({ data: returnedUser })
    }
    else {
        return res.json({ msg: 'Non Authorized' })
    }

})















//as an investor i should be able to view my companies
router.get('/getApprovedCompanies', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userid = req.user.id
    if (req.user.userType === "Investor") {
        var user = await userController.search('_id', userid)
        if (user.userType === 'Investor') {
            var userForms = user.forms
            var approvedForms = []
            for (i = 0; i < userForms.length; i++) {
                if (userForms[i].status === 'Approved')
                    approvedForms.push(userForms[i])
            }
            res.json({ data: approvedForms })
        }
        else {
            res.json({ msg: 'You are not an investor to get you accepted companies' })
        }
    }
    else {
        res.json({ msg: 'Non Authorized' })
    }
})












//get the form of the lawyer/Reviewer 
router.get('/getforms', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userid = req.user.id
    if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
        const user = await User.findById(userid)
        var arrayOfForms = user.forms
        res.json({ data: arrayOfForms })
    }
    else {
        return res.json({ msg: 'Non Authorized' })
    }
});













// as a lawyer i can make a comment
router.put('/lawyerComments/:formId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userid = req.user.userId
    if (req.user.userType === "Lawyer") {

        const formid = req.params.formId
        const user = await userController.search('_id', userid)
        console.log(user)
        const form = await formController.search('_id', formid)
        //console.log(form)
        var comments = form.lawyerComments
        for (i = 0; i < req.body.lawyerComments.length; i++) {
            var x = req.body.lawyerComments[i]
            comments.push(x)
        }
        for (i = 0; i < user.forms.length; i++) {
            if (user.forms[i]._id.equals(form._id)) {
                console.log(i)
                user.forms[i] = await formController.update('_id', formid, { lawyerComments: comments })
            }
        }
        const returnedUser = await userController.update('_id', userid, { forms: user.forms })
        if (req.body.lawyerComments !== undefined) {
            var notifyUser = await notifications.notifyUserForFormUpdates(user, updatedForm)
            return res.json({ data: returnedUser, notification: notifyUser })
        }

        return res.json({ data: returnedUser })
    }
    else {
        return res.json({ msg: 'Non Authorized' })
    }
});












//as a reviewer i can make a comment
router.put('/reviewerComments/:formId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const userid = req.user.userId
    if (req.user.userType === "Reviewer") {
        const formid = req.params.formId
        const user = await userController.search('_id', userid)
        const form = await formController.search('_id', formid)
        var comments = form.reviewerComments
        for (i = 0; i < req.body.reviewerComments.length; i++) {
            var x = req.body.reviewerComments[i]
            comments.push(x)
        }
        for (i = 0; i < user.forms.length; i++) {
            if (user.forms[i]._id.equals(form._id)) {
                user.forms[i] = await formController.update('_id', formid, { reviewerComments: comments })
            }
        }
        const returnedUser = await userController.update('_id', userid, { forms: user.forms })
        if (req.body.reviewerComments !== undefined) {
            var notifyUser = await notifications.notifyUserForFormUpdates(user, updatedForm)
            return res.json({ data: returnedUser, notification: notifyUser })
        }

        return res.json({ data: returnedUser })
    }
    else {
        return res.json({ msg: 'Non Authorized' })
    }
});







module.exports = router;

