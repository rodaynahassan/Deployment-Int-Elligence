const express = require("express");
const Joi = require("joi");
const router = express.Router();
const formController = require("../../controllers/formController");
const userController = require("../../controllers/userController");
const User = require("../../models/User");
const notifications = require("../../helpers/notifications");
const dynamicFormController = require("../../controllers/dynamicFormController");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/keys_dev").secretOrKey;
const passport = require("passport");
require("../../config/passport")(passport);

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

const axios = require("axios");

//sort all forms for a  by form creation date
// router.get(
//   "/AllformsSortedByformDate/",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
//       var forms = await formController.search();
//       forms.sort(userController.compareByDate);
//       return res.json({ data: forms });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

// //sort forms by id as a lawyer
// router.get('/formSortedByformId/', async (req, res) => { // sort forms by form id
//     var forms = await Forms.find()
//     forms.sort(compareById)
//     return res.json({ data: forms });
// })

//sort all forms by id as a lawyer
// router.get(
//   "/AllFormSortedByFormId/",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     // sort all forms by form id
//     if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
//       const forms = await formController.search();
//       forms.sort(userController.compareById);
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

//sort by form creation date for a specific user
// router.get(
//   "/SpecificformsSortedByformDate",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userid = req.user.id;
//     //console.log(req.headers)
//     if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
//       var SpecificUser = await userController.search("_id", userid);
//       SpecificUser.forms.sort(userController.compareByDate);
//       console.log("hi");
//       return res.json({ data: SpecificUser.forms });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );
//sort specific forms by id as a lawyer
// router.get(
//   "/SpecificFormSortedByFormId",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     var userid = req.user.id;
//     if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
//       var searchUsers = await userController.search("_id", userid);
//       searchUsers.forms.sort(userController.compareById);
//       return res.json({ data: searchUsers.forms });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

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

// router.get(
//   "/getInProgressSPCCases/",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userid = req.user.id;
//     if (req.user.userType === "Investor" || req.user.userType === "Lawyer") {
//       var user = await userController.search("_id", userid);
//       var userForms = user.forms;
//       var inprogressForms = [];
//       for (i = 0; i < userForms.length; i++) {
//         if (
//           (userForms[i].type === "SPCForm" &&
//             userForms[i].status === "In progress Lawyer") ||
//           userForms[i].status === "In progress Reviewer"
//         )
//           inprogressForms.push(userForms[i]);
//       }
//       res.json({ data: inprogressForms });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

// router.get(
//   "/getInProgressSSCCases/",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userid = req.user.id;
//     if (req.user.userType === "Investor" || req.user.userType === "Lawyer") {
//       var user = await userController.search("_id", userid);
//       var userForms = user.forms;
//       var inprogressForms = [];
//       for (i = 0; i < userForms.length; i++) {
//         if (
//           (userForms[i].type === "SSCForm" &&
//             userForms[i].status === "In progress Lawyer") ||
//           userForms[i].status === "In progress Reviewer"
//         )
//           inprogressForms.push(userForms[i]);
//       }
//       res.json({ data: inprogressForms });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

// //get Array of Form
// router.get(
//   "/getUserFormsSSC/",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userId = req.user.id;
//     if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
//       const user = await userController.search("_id", userId);
//       var userForms = user.forms;
//       const arrayForms = [];
//       if (user.userType === "Lawyer") {
//         for (i = 0; i < userForms.length; i++) {
//           if (
//             userForms[i].type === "SSCForm" &&
//             (userForms[i].status === "In progress Lawyer" ||
//               userForms[i].status === "Lawyer accepted")
//           ) {
//             arrayForms.push(userForms[i]);
//           }
//         }
//         return res.json({ data: arrayForms });
//       } else if (user.userType === "Reviewer") {
//         for (i = 0; i < userForms.length; i++) {
//           if (userForms[i].status === "In progress Reviewer") {
//             arrayForms.push(userForms[i]);
//           }
//         }
//         return res.json({ data: arrayForms });
//       } else {
//         return res.json({ msg: "Not a user" });
//       }
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

// router.get(
//   "/getUserFormsSPC/",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userId = req.user.id;
//     if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
//       const user = await userController.search("_id", userId);
//       var userForms = user.forms;
//       const arrayForms = [];
//       if (user.userType === "Lawyer") {
//         for (i = 0; i < userForms.length; i++) {
//           if (
//             userForms[i].type === "SPCForm" &&
//             (userForms[i].status === "In progress Lawyer" ||
//               userForms[i].status === "Lawyer accepted")
//           ) {
//             arrayForms.push(userForms[i]);
//           }
//         }
//         return res.json({ data: arrayForms });
//       } else if (user.userType === "Reviewer") {
//         for (i = 0; i < userForms.length; i++) {
//           if (userForms[i].status === "In progress Reviewer") {
//             arrayForms.push(userForms[i]);
//           }
//         }
//         return res.json({ data: arrayForms });
//       } else {
//         return res.json({ msg: "Not a user" });
//       }
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );
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

// View lawyer comments of specific form of investor
// router.get(
//   "/getLaywerCommentsOfInvestorsform",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     var userid = req.user.id;
//     if (req.user.userType === "Investor") {
//       var user = await userController.search("_id", userid);
//       var lawyercom = user.forms.lawyerComments;
//       return res.json({ data: lawyercom });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

//get all users
router.get("/getAllUsers", async (req, res) => {
  const searchUsers = await userController.search();
  res.json({ data: searchUsers });
});

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
// router.post(
//   "/CreatingForm",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userId = req.user.id; //userID
//     req.body.userId = userId;

//     if (req.user.userType === "Investor" || req.user.userType === "Lawyer") {
//       const newForm = await formController.create(req.body);
//       const user = await userController.search("_id", userId);
//       if (newForm.error) return res.status(400).send(newForm.error);
//       if (!newForm) return res.json({ msg: "Form is null" });
//       if (user.userType === "Investor") {
//         newForm.status = "Unassigned";
//         const formId = newForm._id;
//         const returnedForm = await formController.update("_id", formId, {
//           status: newForm.status
//         });
//       } else if (user.userType === "Lawyer") {
//         newForm.status = "Lawyer accepted";
//         newForm.lawyerId = userId;
//         const formId = newForm._id;
//         const returnedForm = await formController.update("_id", formId, {
//           status: newForm.status,
//           lawyerId: userId
//         });
//       } else {
//         return res.json({ msg: "You can not create a form" });
//       }

//       user.forms.push(newForm);
//       const returnedUser = await userController.update("_id", userId, {
//         forms: user.forms
//       });
//       return res.json({ data: returnedUser });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

// //add a form to the array of forms of the lawyer/reviewer
// router.put('/takingForm/:formId', passport.authenticate('jwt', { session: false }), async (req, res) => {
//     const userid = req.user.userId
//     if (req.user.userType === "Reviewer" || req.user.userType === "Lawyer") {
//         const formid = req.params.formId
//         const user = await userController.search('_id', userid)
//         const form = await formController.search('_id', formid)
//         if (form.status === 'Unassigned' && user.userType === 'Lawyer') {
//             form.status = 'In progress Lawyer'
//             const id = form.userId
//             const investor = await userController.search('_id', id)
//             const investorForms = investor.forms
//             for (i = 0; i < investorForms.length; i++) {
//                 if (investorForms[i]._id.equals(formid)) {
//                     investorForms.remove(investorForms[i])
//                 }
//             }
//             const returnedForm = await formController.update('_id', formid, { status: form.status, lawyerId: userid })
//             user.forms.push(returnedForm)
//             investor.forms.push(returnedForm)
//             const returnedUser = await userController.update('_id', userid, { forms: user.forms })
//             const returnedInvestor = await userController.update('_id', id, { forms: investor.forms })
//             return res.json({ data: returnedUser })
//         }
//         else if (form.status === 'Lawyer accepted' && user.userType === 'Reviewer') {
//             form.status = 'In progress Reviewer'
//             const id = form.userId
//             const investor = await userController.search('_id', id)
//             const investorForms = investor.forms
//             for (i = 0; i < investorForms.length; i++) {
//                 if (investorForms[i]._id.equals(formid)) {
//                     investorForms.remove(investorForms[i])
//                 }
//             }
//             const lawyerid = form.lawyerId
//             const lawyer = await userController.search('_id', lawyerid)
//             const lawyerForms = lawyer.forms
//             for (i = 0; i < lawyerForms.length; i++) {
//                 if (lawyerForms[i]._id.equals(formid)) {
//                     lawyerForms.remove(lawyerForms[i])
//                 }
//             }
//             const returnedForm = await formController.update('_id', formid, { status: form.status })
//             user.forms.push(returnedForm)
//             investor.forms.push(returnedForm)
//             lawyer.forms.push(returnedForm)
//             const returnedUser = await userController.update('_id', userid, { forms: user.forms })
//             const returnedInvestor = await userController.update('_id', id, { forms: investor.forms })
//             const returnedLawyer = await userController.update('_id', lawyerid, { forms: lawyer.forms })
//             return res.json({ data: returnedUser })
//         }
//         else {
//             return res.json({ msg: 'You can not take it :)' })
//         }
//     }
//     else {
//         return res.json({ msg: 'Non Authorized' })
//     }

// })

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

// router.post('/register', async (req, res) => {                       //register Investor
//     const newUser = await userController.registerInvestor(req.body)
//     if (newUser.error) return res.status(400).send(newUser)

//     return res.json({ msg: 'Account was created successfully', data: newUser })
// })

//Login
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email });
    if (!user) {
      const admin = await Admin.findOne({ email });
      if (!admin)
        return res
          .status(404)
          .json({ email: "This email is not registered yet" });
      else {
        const doesItMatch = await bcrypt.compareSync(password, admin.password);
        if (doesItMatch) {
          const payload = {
            id: admin.id,
            name: admin.name,
            email: admin.email
          };
          const token = jwt.sign(payload, tokenKey, { expiresIn: "1h" });
          //res.json({data: `Bearer ${token}`})
          return res.json({
            msg: "You are logged in now",
            token: `Bearer ${token}`,
            type: admin.userType
          });
        }
       }
    }
    else return res.status(400).send({ password: "Wrong password" });
      }
  catch (e) {
console.log(e);
  }
});

//Calculating fees as a lawyer
// router.put(
//   "/CalculatingFees/:formId",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     if (req.user.userType === "Lawyer") {
//       var equation = await axios.get(
//         "http://localhost:5000/routes/api/fakeServer/ReturningEquation"
//       );
//       //console.log(equation);
//       const formid = req.params.formId;
//       const form = await formController.search("_id", formid);
//       var capital = form.equityCapital;
//       var calculatedFees =
//         equation.data.data.m * capital + equation.data.data.c;
//       const returnedFees = calculatedFees;
//       const updatedForm = await formController.update("_id", formid, {
//         fees: returnedFees
//       });
//       const investorid = updatedForm.userId;
//       const lawyerid = updatedForm.lawyerId;
//       const investor = await userController.search("_id", investorid);
//       const lawyer = await userController.search("_id", lawyerid);
//       const investorForms = investor.forms;
//       for (i = 0; i < investorForms.length; i++) {
//         if (investorForms[i]._id.equals(formid)) {
//           investorForms.remove(investorForms[i]);
//         }
//       }
//       const lawyerForms = lawyer.forms;
//       for (i = 0; i < lawyerForms.length; i++) {
//         if (lawyerForms[i]._id.equals(formid)) {
//           lawyerForms.remove(lawyerForms[i]);
//         }
//       }
//       lawyer.forms.push(updatedForm);
//       investor.forms.push(updatedForm);
//       const returnedLawyer = await userController.update("_id", lawyerid, {
//         forms: lawyer.forms
//       });
//       const returnedInvestor = await userController.update("_id", investorid, {
//         forms: investor.forms
//       });
//       res.json({ data: updatedForm });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

// //Accepting and updating financial balance of the investor
// router.put(
//   "/accept/:formId",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     if (req.user.userType === "Lawyer") {
//       const userid = req.user.id;
//       const formid = req.params.formId;
//       const user = await userController.search("_id", userid);
//       const form = await formController.search("_id", formid);
//       if (form.status === "In progress Lawyer" && user.userType === "Lawyer") {
//         form.status = "Lawyer accepted";
//         const investorid = form.userId;
//         const investor = await userController.search("_id", investorid);
//         const investorForms = investor.forms;
//         for (i = 0; i < investorForms.length; i++) {
//           if (investorForms[i]._id.equals(formid)) {
//             investorForms.remove(investorForms[i]);
//           }
//         }
//         const lawyerForms = user.forms;
//         for (i = 0; i < lawyerForms.length; i++) {
//           if (lawyerForms[i]._id.equals(formid)) {
//             lawyerForms.remove(lawyerForms[i]);
//           }
//         }
//         const returnedForm = await formController.update("_id", formid, {
//           status: form.status
//         });
//         user.forms.push(returnedForm);
//         investor.forms.push(returnedForm);
//         const returnedLawyer = await userController.update("_id", userid, {
//           forms: user.forms
//         });
//         const returnedInvestor = await userController.update(
//           "_id",
//           investorid,
//           { forms: investor.forms }
//         );
//         return res.json({ data: returnedLawyer });
//       } else if (
//         form.status === "In progress Reviewer" &&
//         user.userType === "Reviewer"
//       ) {
//         form.status = "Approved";
//         const investorid = form.userId;
//         const investor = await userController.search("_id", investorid);
//         const investorForms = investor.forms;
//         for (i = 0; i < investorForms.length; i++) {
//           if (investorForms[i]._id.equals(formid)) {
//             investorForms.remove(investorForms[i]);
//           }
//         }
//         const lawyerid = form.lawyerId;
//         const lawyer = await userController.search("_id", lawyerid);
//         const lawyerForms = lawyer.forms;
//         for (i = 0; i < lawyerForms.length; i++) {
//           if (lawyerForms[i]._id.equals(formid)) {
//             lawyerForms.remove(lawyerForms[i]);
//           }
//         }
//         const reviewerForms = user.forms;
//         for (i = 0; i < reviewerForms.length; i++) {
//           if (reviewerForms[i]._id.equals(formid)) {
//             reviewerForms.remove(reviewerForms[i]);
//           }
//         }

//         const returnedForm = await formController.update("_id", formid, {
//           status: form.status
//         });
//         user.forms = reviewerForms;
//         lawyer.forms = lawyerForms;
//         investor.forms.push(returnedForm);
//         if (investorid.equals(lawyerid)) {
//           const returnedInvestor = await userController.update(
//             "_id",
//             investorid,
//             { forms: investor.forms }
//           );
//           const returnedReviewer = await userController.update("_id", userid, {
//             forms: user.forms
//           });
//           return res.json({ data: returnedReviewer });
//         } else {
//           const updatedFinancialBalance = form.fees + investor.financialBalance;
//           const returnedInvestor = await userController.update(
//             "_id",
//             investorid,
//             { forms: investor.forms, financialBalance: updatedFinancialBalance }
//           );
//           const returnedReviewer = await userController.update("_id", userid, {
//             forms: user.forms
//           });
//           const returnedLawyer = await userController.update("_id", lawyerid, {
//             forms: lawyer.forms
//           });
//           return res.json({ data: returnedReviewer });
//         }
//       } else {
//         return res.json({ msg: "You already accepted this case" });
//       }
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

// //add a form to the array of forms of the lawyer/reviewer
// router.put(
//   "/takingForm/:formId",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     if (req.user.userType === "Reviewer" || req.user.userType === "Lawyer") {
//       const userid = req.user.id;
//       const formid = req.params.formId;
//       const user = await userController.search("_id", userid);
//       const form = await formController.search("_id", formid);
//       if (form.status === "Unassigned" && user.userType === "Lawyer") {
//         form.status = "In progress Lawyer";
//         const id = form.userId;
//         const investor = await userController.search("_id", id);
//         const investorForms = investor.forms;
//         for (i = 0; i < investorForms.length; i++) {
//           if (investorForms[i]._id.equals(formid)) {
//             investorForms.remove(investorForms[i]);
//           }
//         }
//         const returnedForm = await formController.update("_id", formid, {
//           status: form.status,
//           lawyerId: userid
//         });
//         user.forms.push(returnedForm);
//         investor.forms.push(returnedForm);
//         const returnedUser = await userController.update("_id", userid, {
//           forms: user.forms
//         });
//         const returnedInvestor = await userController.update("_id", id, {
//           forms: investor.forms
//         });
//         return res.json({ data: returnedUser });
//       } else if (
//         form.status === "Lawyer accepted" &&
//         user.userType === "Reviewer"
//       ) {
//         form.status = "In progress Reviewer";
//         const id = form.userId;
//         const investor = await userController.search("_id", id);
//         const investorForms = investor.forms;
//         for (i = 0; i < investorForms.length; i++) {
//           if (investorForms[i]._id.equals(formid)) {
//             investorForms.remove(investorForms[i]);
//           }
//         }
//         const lawyerid = form.lawyerId;
//         const lawyer = await userController.search("_id", lawyerid);
//         const lawyerForms = lawyer.forms;
//         for (i = 0; i < lawyerForms.length; i++) {
//           if (lawyerForms[i]._id.equals(formid)) {
//             lawyerForms.remove(lawyerForms[i]);
//           }
//         }
//         const returnedForm = await formController.update("_id", formid, {
//           status: form.status
//         });
//         user.forms.push(returnedForm);
//         investor.forms.push(returnedForm);
//         lawyer.forms.push(returnedForm);
//         const returnedUser = await userController.update("_id", userid, {
//           forms: user.forms
//         });
//         const returnedInvestor = await userController.update("_id", id, {
//           forms: investor.forms
//         });
//         const returnedLawyer = await userController.update("_id", lawyerid, {
//           forms: lawyer.forms
//         });
//         return res.json({ data: returnedUser });
//       } else {
//         return res.json({ msg: "You can not take it :)" });
//       }
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

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

//as a lawyer/reviewer/investor I should be able to view my in progress cases
// router.get(
//   "/getInProgressCases",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userid = req.user.id;
//     var user = await userController.search("_id", userid);
//     var userForms = user.forms;
//     var inprogressForms = [];
//     for (i = 0; i < userForms.length; i++) {
//       if (
//         userForms[i].status === "In progress Lawyer" ||
//         userForms[i].status === "In progress Reviewer"
//       )
//         inprogressForms.push(userForms[i]);
//     }
//     res.json({ data: inprogressForms });
//   }
// );

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

//as an investor i should be able to view my companies
// router.get(
//   "/getApprovedCompanies",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userid = req.user.id;
//     if (req.user.userType === "Investor") {
//       var user = await userController.search("_id", userid);
//       if (user.userType === "Investor") {
//         var userForms = user.forms;
//         var approvedForms = [];
//         for (i = 0; i < userForms.length; i++) {
//           if (userForms[i].status === "Approved")
//             approvedForms.push(userForms[i]);
//         }
//         res.json({ data: approvedForms });
//       } else {
//         res.json({
//           msg: "You are not an investor to get you accepted companies"
//         });
//       }
//     } else {
//       res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

//get the form of the lawyer/Reviewer
// router.get(
//   "/getforms",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userid = req.user.id;
//     if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
//       const user = await User.findById(userid);
//       var arrayOfForms = user.forms;
//       res.json({ data: arrayOfForms });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

// // as a lawyer i can make a comment
// router.put(
//   "/lawyerComments/:formId",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userid = req.user.id;
//     if (req.user.userType === "Lawyer") {
//       const formid = req.params.formId;
//       const user = await userController.search("_id", userid);
//       //console.log(user)
//       const form = await formController.search("_id", formid);
//       //console.log(form)
//       var comments = form.lawyerComments;
//       for (i = 0; i < req.body.lawyerComments.length; i++) {
//         var x = req.body.lawyerComments[i];
//         comments.push(x);
//       }
//       var updatedForm = null;
//       for (i = 0; i < user.forms.length; i++) {
//         if (user.forms[i]._id.equals(form._id)) {
//           //console.log(i)
//           user.forms[i] = await formController.update("_id", formid, {
//             lawyerComments: comments
//           });
//           updatedForm = user.forms[i];
//         }
//       }
//       const returnedUser = await userController.update("_id", userid, {
//         forms: user.forms
//       });
//       if (
//         req.body.lawyerComments !== [] ||
//         req.body.lawyerComments !== undefined
//       ) {
//         var notifyUser = await notifications.notifyUserForFormUpdates(
//           user,
//           updatedForm
//         );
//         return res.json({ data: returnedUser, notification: notifyUser });
//       }

//       return res.json({ data: returnedUser });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

// //as a reviewer i can make a comment
// router.put(
//   "/reviewerComments/:formId",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const userid = req.user.id;
//     if (req.user.userType === "Reviewer") {
//       const formid = req.params.formId;
//       const user = await userController.search("_id", userid);
//       const form = await formController.search("_id", formid);
//       var comments = form.reviewerComments;
//       for (i = 0; i < req.body.reviewerComments.length; i++) {
//         var x = req.body.reviewerComments[i];
//         comments.push(x);
//       }
//       var updatedForm = null;
//       for (i = 0; i < user.forms.length; i++) {
//         if (user.forms[i]._id.equals(form._id)) {
//           user.forms[i] = await formController.update("_id", formid, {
//             reviewerComments: comments
//           });
//           updatedForm = user.forms[i];
//         }
//       }
//       const returnedUser = await userController.update("_id", userid, {
//         forms: user.forms
//       });
//       if (req.body.reviewerComments !== undefined) {
//         var notifyUser = await notifications.notifyUserForFormUpdates(
//           user,
//           updatedForm
//         );
//         return res.json({ data: returnedUser, notification: notifyUser });
//       }

//       return res.json({ data: returnedUser });
//     } else {
//       return res.status(401).json({ msg: "Non Authorized" });
//     }
//   }
// );

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

// //update a user
// router.put('/:id' , async (req,res) => {
//     try{
//      var id = req.params.id
//      const updateUser = await userController.update('_id',id,req.body)
//      if(!updateUser) return res.json({msg :'ID not there'})
//      if(updateUser.error) return res.status(400).json(updateUser)
//      return res.json({msg : 'User Updated Successfully',data: updateUser})
//     }
//     catch(error)
//    {
//        console.log(error)
//    }
// })
module.exports = router;
