const express = require("express");
const router = express.Router();
const formTypeController = require("../../controllers/formTypeController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/keys_dev").secretOrKey;
const passport = require("passport");
require("../../config/passport")(passport);

router.get("/" , passport.authenticate('jwt', { session: false }), async (req, res) => {
    const FormTypes = await formTypeController.search();
    return res.json({ data: FormTypes});
  });


  router.get('/getAllFormTypes', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const forms = await formTypeController.search()
    console.log(forms)
    const types=[];
    for (i=0;i<forms.length;i++){
        if(forms[i].toJSON().formType){
        types.push(forms[i].toJSON().formType)
        }
    }
    return res.json({ data:types});
})
router.get('/getAllFormTypeArrays', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const forms = await formTypeController.search()
  //console.log(forms)
  const types=[];
  for (i=0;i<forms.length;i++){
      if(forms[i].toJSON().formTypeArray){
        //console.log(forms[i])
      types.push(forms[i].toJSON().formTypeArray)
      }
  }
  return res.json({ data:types});
})

router.get('/getByFormType/:formType', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const formType2 = req.params.formType
  const certainForm = await formTypeController.search('formType',formType2)
  return res.json({ data:certainForm});
})
router.get('/getByFormTypeArray/:formTypeArray', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const formType2 = req.params.formTypeArray
  const certainForm = await formTypeController.search('formTypeArray',formType2).then(res=>{return res}).catch(err=> {return err})
 console.log(certainForm)
  return res.json({ data:certainForm});
})
module.exports = router;
