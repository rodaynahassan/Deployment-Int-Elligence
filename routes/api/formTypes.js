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


  router.get('/getByFormType', passport.authenticate('jwt', { session: false }), async (req, res) => {
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
module.exports = router;
