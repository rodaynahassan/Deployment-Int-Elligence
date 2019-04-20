const express = require("express");
const Joi = require("joi");
const router = express.Router();
const dynamicFormController = require("../../controllers/dynamicFormController");
const userController = require("../../controllers/userController");
const User = require("../../models/User");
const Admin = require("../../models/Admin");
const validator = require("../../validations/userValidations");
const notifications = require("../../helpers/notifications");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/keys_dev").secretOrKey;
const passport = require("passport");
require("../../config/passport")(passport);
const axios = require("axios");

//sort all forms for a  by form creation date
router.get(
  "/AllformsSortedByformDate/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
      var forms = await dynamicFormController.search();
      if (forms.error) return res.status(400).json({ error: forms.error });
      forms.sort(userController.compareByDate);
      return res.json({ data: forms });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//sort all forms by id as a lawyer
router.get(
  "/AllFormSortedByFormId/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // sort all forms by form id
    if (req.user.userType === "Lawyer" || req.user.userType === "Reviewer") {
      const forms = await dynamicFormController.search();
      if (forms.error) return res.status(400).json({ error: forms.error });
      forms.sort(userController.compareById);
      return res.json({ data: forms });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//sort by form creation date for a specific user
router.get(
  "/SpecificformsSortedByformDate",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    if (req.user.userType === "Lawyer") {
      var forms = await dynamicFormController.search("lawyerId", userid);
      if (forms.error) return res.status(400).json({ error: forms.error });
      forms.sort(userController.compareByDate);
      return res.json({ data: forms });
    } else if (req.user.userType === "Reviewer") {
      var forms = await dynamicFormController.search("reviewerId", userid);
      if (forms.error) return res.status(400).json({ error: forms.error });
      forms.sort(userController.compareByDate);
      return res.json({ data: forms });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//sort specific forms by id as a lawyer
router.get(
  "/SpecificFormSortedByFormId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    if (req.user.userType === "Lawyer") {
      var forms = await dynamicFormController.search("lawyerId", userid);
      if (forms.error) return res.status(400).json({ error: forms.error });
      forms.sort(userController.compareById);
      return res.json({ data: forms });
    } else if (req.user.userType === "Reviewer") {
      var forms = await dynamicFormController.search("reviewerId", userid);
      if (forms.error) return res.status(400).json({ error: forms.error });
      forms.sort(userController.compareById);
      return res.json({ data: forms });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//Get an investor's in Progress cases "Track my cases"
// Ammar's bar for progress !!!!!
router.get(
  "/getInvestorInProgressCases/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    if (req.user.userType === "Investor") {
      var forms = await dynamicFormController.search("investorId", userid);
      if (forms.error) return res.status(400).json({ error: forms.error });
      var inProgressForms = [];
      for (i = 0; i < forms.length; i++) {
        if (forms[i].status !== "Accepted") inProgressForms.push(forms[i]);
      }
      return res.json({ data: inProgressForms });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//Get an investor rejected case from lawyer "Lawyer added comments"
router.get(
  "/getInvestorLawyerRejectedCases",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    if (req.user.userType === "Investor") {
      var forms = await dynamicFormController.search("investorId", userid);
      if (forms.error) return res.status(400).json({ error: forms.error });
      var lawyerRejectedForms = [];
      for (i = 0; i < forms.length; i++) {
        if (forms[i].status === "Lawyer rejected")
          lawyerRejectedForms.push(forms[i]);
      }
      return res.json({ data: lawyerRejectedForms });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//Get Unassigned Cases for Lawyer to pick one from or the reviewer rejected (added comments) ones even if it wasn't his
router.get(
  "/getLawyerPossiblePicks",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    if (req.user.userType === "Lawyer") {
      var forms = await dynamicFormController.search();
      if (forms.error) return res.status(400).json({ error: forms.error });
      var lawyerPicks = [];
      for (i = 0; i < forms.length; i++) {
        if (
          forms[i].status === "Unassigned" ||
          form[i].status === "Reviewer rejected"
        )
          lawyerPicks.push(forms[i]);
      }
      return res.json({ data: lawyerPicks });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//The lawyer's in Progress Cases
router.get(
  "/getLawyerInProgressCases",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    if (req.user.userType === "Lawyer") {
      var forms = await dynamicFormController.search("lawyerId", userid);
      if (forms.error) return res.status(400).json({ error: forms.error });
      var lawyerInProgressForms = [];
      for (i = 0; i < forms.length; i++) {
        if (forms[i].status === "In progress Lawyer")
          lawyerInProgressForms.push(forms[i]);
      }
      return res.json({ data: lawyerInProgressForms });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//The Reviewer's possible picks "Lawyer Accepted"
router.get(
  "/getReviewerPossiblePicks",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    if (req.user.userType === "Reviewer") {
      var forms = await dynamicFormController.search();
      if (forms.error) return res.status(400).json({ error: forms.error });
      var reviewerPicks = [];
      for (i = 0; i < forms.length; i++) {
        if (forms[i].status === "Lawyer accepted") reviewerPicks.push(forms[i]);
      }
      return res.json({ data: reviewerPicks });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//The Reviewer's in Progress Cases
router.get(
  "/getReviewerInProgressCases",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    if (req.user.userType === "Reviewer") {
      var forms = await dynamicFormController.search("reviewerId", userid);
      if (forms.error) return res.status(400).json({ error: forms.error });
      var reviewerInProgressForms = [];
      for (i = 0; i < forms.length; i++) {
        if (forms[i].status === "In progress Reviewer")
          reviewerInProgressForms.push(forms[i]);
      }
      return res.json({ data: reviewerInProgressForms });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

router.post(
  "CreatingForm",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;

    if (req.user.userType === "Investor") {
      var newForm = await dynamicFormController.create(
        req.body,
        "Unassigned",
        userid,
        null
      );
      if (newForm.error) return res.status(400).json({ error: newForm.error });
      return res.json({ data: newForm });
    } else if (req.user.userType === "Lawyer") {
      var newForm = await dynamicFormController.create(
        req.body,
        "Lawyer accepted",
        null,
        userid
      );
      if (newForm.error) return res.status(400).json({ error: newForm.error });
      return res.json({ data: newForm });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//Calculating fees as a lawyer
router.put(
  "/CalculatingFees/:formId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (req.user.userType === "Lawyer") {
      var equation = await axios.get(
        "http://localhost:5000/routes/api/fakeServer/ReturningEquation"
      );
      //console.log(equation);
      const formid = req.params.formId;
      const form = await dynamicFormController.search("_id", formid);
      if (form.error) return res.status(400).json({ error: form.error });
      var capital = form.equityCapital;
      var calculatedFees =
        equation.data.data.m * capital + equation.data.data.c;
      const returnedFees = calculatedFees;
      const updatedForm = await dynamicFormController.update("_id", formid, {
        fees: returnedFees
      });
      if (updatedForm.error)
        return res.status(400).json({ error: updatedForm.error });
      var investor = await userController.search("_id", form.investorId);
      if (investor.error)
        return res.status(400).json({ error: investor.error });
      var notifyUser = await notifications.notifyUserForFormUpdates(
        investor,
        updatedForm
      );
      return res.json({
        msg: "Fees Calculated Successfully",
        data: updatedForm,
        notifications: notifyUser
      });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//Lawyer or Reviewer accepting form (Updating Financial balance of Investor in case of reviewer)

router.put(
  "/accept/:formId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (req.user.userType === "Lawyer") {
      const formid = req.params.formId;
      const form = await dynamicFormController.search("_id", formid);
      if (form.error) return res.status(400).json({ error: form.error });
      if (
        form.status === "In progress Laywer" &&
        form.lawyerId === req.user.id
      ) {
        form.status = "Lawyer accepted";
        const returnedForm = await dynamicFormController.update(
          "_id",
          formid,
          form
        );
        if (returnedForm.error)
          return res.status(400).json({ error: form.error });
        var investor = await userController.search("_id", form.investorId);
        if (investor.error)
          return res.status(400).json({ error: investor.error });
        var notifyUser = await notifications.notifyUserForFormUpdates(
          investor,
          returnedForm
        );
        return res.json({
          msg: "Form Accepted Successfully",
          data: returnedForm,
          notifications: notifyUser
        });
      } else {
        return res.status(400).json({ msg: "You can't accept this form :(" });
      }
    } else if (req.user.userType === "Reviewer") {
      const formid = req.params.formId;
      const form = await dynamicFormController.search("_id", formid);
      if (form.error) return res.status(400).json({ error: form.error });
      if (
        form.status === "In progress Reviewer" &&
        form.reviewerId === req.user.id
      ) {
        form.status = "Approved";
        const returnedForm = await dynamicFormController.update(
          "_id",
          formid,
          form
        );
        if (returnedForm.error)
          return res.status(400).json({ error: form.error });
        const investor = await userController.search("_id".form.investor_id);
        if (investor.error)
          return res.status(400).json({ error: investor.error });
        const updatedFinancialBalance = form.fees + investor.financialBalance;
        const returnedInvestor = await userController.update(
          "_id",
          investor._id,
          { financialBalance: updatedFinancialBalance }
        );
        if (returnedInvestor.error)
          return res.status(400).json({ error: returnedInvestor.error });
        var notifyUser = await notifications.notifyUserForFormUpdates(
          investor,
          returnedForm
        );
        var notify = await notifications.notifyExternalEntities(returnedForm);
        return res.json({
          msg: "Form accepted succesfully",
          data: returnedForm,
          notifications: notifyUser
        });
      } else {
        return res.status(400).json({ msg: "You can't accept this form :(" });
      }
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//Lawyer or Reviewer take a case , giving him the ability to accept or reject it
router.put(
  "/takingForm/:formId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (req.user.userType === "Lawyer") {
      const formid = req.params.formId;
      const form = await dynamicFormController.search("_id", formid);
      if (form.error) return res.status(400).json({ error: form.error });
      if (form.status === "Unassigned" || form.status === "Reviewer Rejected") {
        form.status = "In progress Lawyer";
        form.lawyerId = req.user.id;
        const returnedForm = await dynamicFormController.update(
          "_id",
          formid,
          form
        );
        if (returnedForm.error)
          return res.status(400).json({ error: returnedForm.error });
        var investor = await userController.search("_id", form.investorId);
        if (investor.error)
          return res.status(400).json({ error: investor.error });
        var notifyUser = await notifications.notifyUserForFormUpdates(
          investor,
          returnedForm
        );
        return res.json({
          msg: "Form picked Succesfully",
          data: returnedForm,
          notification: notifyUser
        });
      } else {
        return res.status(400).json({ msg: "You can not take it :)" });
      }
    } else if (req.user.userType === "Reviewer") {
      const formid = req.params.formId;
      const form = await dynamicFormController.search("_id", formid);
      if (form.error) return res.status(400).json({ error: form.error });
      if (form.status === "Lawyer Accepted") {
        form.status = "In progress Reviewer";
        form.reviewerId = req.user.id;
        const returnedForm = await dynamicFormController.update(
          "_id",
          formid,
          form
        );
        if (returnedForm.error)
          return res.status(400).json({ error: returnedForm.error });
        var investor = await userController.search("_id", form.investorId);
        if (investor.error)
          return res.status(400).json({ error: investor.error });
        var notifyUser = await notifications.notifyUserForFormUpdates(
          investor,
          returnedForm
        );
        return res.json({
          msg: "Form picked Succesfully",
          data: returnedForm,
          notification: notifyUser
        });
      } else {
        return res.status(400).json({ msg: "You can not take it :)" });
      }
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//Show an investors approved companies
router.get(
  "/getInvestorApprovedCompanies",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userid = req.user.id;
    if (req.user.userType === "Investor") {
      var forms = await dynamicFormController.search("investorId", userid);
      if (forms.error) return res.status(400).json({ error: forms.error });
      var acceptedForms = [];
      for (i = 0; i < forms.length; i++) {
        if (forms[i].status === "Accepted") acceptedForms.push(forms[i]);
      }
      res.json({ data: acceptedForms });
    } else {
      res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//As a lawyer I can add a comment
router.put(
  "/lawyerComments/:formId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (req.user.userType === "Lawyer") {
      const formid = req.params.formId;
      var form = await dynamicFormController.search("_id", formid);
      if (form.error) return res.status(400).json({ error: form.error });
      var comments = form.lawyerComments;
      for (i = 0; i < req.body.lawyerComments.length; i++) {
        comments.push(req.body.lawyerComments[i]);
      }
      form.lawyerComments = comments;
      var updatedForm = await dynamicFormController.update("_id", formid, form);
      var lawyer = await userController.search("_id", req.user.id);
      if (lawyer.error) return res.status(400).json({ error: lawyer.error });
      var notifyUser = await notifications.notifyUserForFormUpdates(
        lawyer,
        updatedForm
      );
      return res.json({ data: updatedForm, notifications: notifyUser });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

//As a Reviewer I can add a comment
router.put(
  "/reviewerComments/:formId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (req.user.userType === "Reviewer") {
      const formid = req.params.formId;
      var form = await dynamicFormController.search("_id", formid);
      if (form.error) return res.status(400).json({ error: form.error });
      var comments = form.reviewerComments;
      for (i = 0; i < req.body.reviewerComments.length; i++) {
        comments.push(req.body.reviewerComments[i]);
      }
      form.reviewerComments = comments;
      var updatedForm = await dynamicFormController.update("_id", formid, form);
      var reviewer = await userController.search("_id", req.user.id);
      if (reviewer.error)
        return res.status(400).json({ error: reviewer.error });
      var notifyUser = await notifications.notifyUserForFormUpdates(
        reviewer,
        updatedForm
      );
      return res.json({ data: updatedForm, notifications: notifyUser });
    } else {
      return res.status(401).json({ msg: "Non Authorized" });
    }
  }
);

module.exports = router;
