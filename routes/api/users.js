const express = require("express");
const Joi = require("joi");
const router = express.Router();
const formController = require("../../controllers/formController");
const userController = require("../../controllers/userController");
const User = require("../../models/User");
const notifications = require("../../helpers/notifications");
const dynamicFormController = require("../../controllers/dynamicFormController");
const Admin = require('../../models/Admin')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/keys_dev").secretOrKey;
const passport = require('passport')
require('../../config/passport')(passport)
const axios = require("axios");

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

//get all lawyers
router.get("/getAllLawyers", async (req, res) => {
  const userType = await userController.search("userType", "Lawyer");
  return res.json({ data: userType });
});

//get all investors
router.get("/getAllInvestors", async (req, res) => {
  const userType = await userController.search("userType", "Investor");
  return res.json({ data: userType });
});

//get all Reviewers
router.get("/getAllReviewers", async (req, res) => {
  const userType = await userController.search("userType", "Reviewer");
  return res.json({ data: userType });
});

// view a certain user
router.get(
  "/CertainUser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    const searchUsers = await userController.search("_id", userid);
    return res.json({ data: searchUsers });
  }
);

router.get(
  "/CertainAttributes",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    const searchUsers = await userController.search("_id", userid);
    return res.json({
      Username: searchUsers.name,
      Gender: searchUsers.gender,
      Nationality: searchUsers.nationality,
      IdentificationType: searchUsers.identificationType,
      IdentificationNumber: searchUsers.identificationNumber,
      Birthdate: searchUsers.birthdate,
      Address: searchUsers.address,
      Email: searchUsers.email,
      Password: searchUsers.password,
      Telephone: searchUsers.telephone,
      Fax: searchUsers.fax
    });
  }
);

//view the financialBalance of an investor
router.get(
  "/getTheFinancialBalance",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    if (req.user.userType === "Investor") {
      const user = await userController.search("_id", userid);
      const financialBalance = user.financialBalance;
      return res.json({ data: financialBalance });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//get all users
router.get("/getAllUsers", async (req, res) => {
  const searchUsers = await userController.search();
  res.json({ data: searchUsers });
});

//When you delete a specific user , you delete the unassigned forms only
//Delete a user
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const id = req.user.id;
    var SpecificUser = await userController.search("_id", id);
    if (!SpecificUser)
      return res.status(400).json({ msg: "This user doesnt exist" });
    const deletedUser = await userController.remove("_id", id);
    const forms = await dynamicFormController.search("investorId", id);
    for (i = 0; i < forms; i++) {
      if (forms[i].status === "Unassigned") {
        await dynamicFormController.remove("_id", forms[i]._id);
      }
    }
    res.json({ msg: "User was deleted successfully", data: deletedUser });
  }
);

//Register a user
router.post("/register", async (req, res) => {
  const newUser = await userController.registerInvestor(req.body);
  if (newUser.error) return res.status(400).send(newUser);
  if (newUser.userType === "Investor") {
    newUser.financialBalance = 0;
    returnedUser = await userController.update("_id", newUser._id, {
      financialBalance: newUser.financialBalance
    });
    return res.json({
      msg: "Account was created successfully",
      data: returnedUser
    });
  }
  return res.json({ msg: "Account was created successfully", data: newUser });
});

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
router.put(
  "/updateUser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    var id = req.user.id;
    const updateUser = await userController.update("_id", id, req.body);
    if (!updateUser) return res.json({ msg: "ID not there" });
    if (updateUser.error) return res.status(400).json(updateUser);
    return res.json({ msg: "User Updated Successfully", data: updateUser });
  }
);

//Update a user's form
router.put(
  "/updateForm/:formId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    var userid = req.user.id;
    if (req.user.userType === "Investor" || req.user.userType === "Lawyer") {
      var formid = req.params.formId;
      var user = await userController.search("_id", userid);
      var updatedForm = await formController.update("_id", formid, req.body);
      const userForms = user.forms;
      for (i = 0; i < user.forms.length; i++) {
        if (userForms[i]._id.equals(formid)) {
          userForms[i] = updatedForm;
        }
      }
      const returnedUser = await userController.update("_id", userid, {
        forms: user.forms
      });
      if (req.body.status) {
        if (req.body.status === "Approved") {
          var notify = await notifications.notifyExternalEntities(updatedForm);
        }
      }

      if (
        req.body.status !== undefined ||
        req.body.lawyerSeen !== undefined ||
        req.body.lawyerComments !== undefined ||
        req.body.lawyerApprove !== undefined ||
        req.body.reviewerSeen !== undefined ||
        req.body.reviewersComments !== undefined ||
        req.body.reviewerApprove !== undefined
      ) {
        var notifyUser = await notifications.notifyUserForFormUpdates(
          user,
          updatedForm
        );
        return res.json({ data: returnedUser, notification: notifyUser });
      }

      return res.json({ data: returnedUser });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

// change password
router.post(
  "/changePassword",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    const user = await userController.search("_id", userid);
    const newPassword = req.body.newPassword;
    const confirmPassword = req.body.confirmPassword;
    if (newPassword === confirmPassword) {
      const salt = await bcrypt.genSalt(10);
      newPasswordEnc = await bcrypt.hash(newPassword, salt);
      user.password = newPasswordEnc;
      await user.save();
      return res.json({ msg: "Password was updated successfully", data: user });
    } else return res.json({ msg: "The passwords do not match!" });
  }
);

module.exports = router;
