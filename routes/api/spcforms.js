const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const SPCForm = require('../../Models/SPCForm');
const spcforms = [
	new SPCForm('Youssr It Keda','', 'Cairo', 'New Cairo', 'Fifth Settlement Behind Downtown', '01001234567','+1 555 444-3333', 'Egyptian Pound', '500000'),
    new SPCForm('Fashion Show','', 'Cairo', 'Nasr City', 'Moez Eldawla Street', '02 2745483','+1 929 676-0000', 'Dollars', '200000'),
    new SPCForm('Buildings Everywhere','', 'Portsaid', 'Portsaid', 'Portsaid Downtown', '066 3237461','+1 090 827-8346', 'Egyptian Pound', '2000000'),
    new SPCForm('Foodie Lovers','', 'Cairo', 'Heliopolis', 'Thawra Street', '01197465032','+1 938 774-8264', 'Egyptian Pound', '20000'),
];
//Create SPCForm
router.post('/', (req, res) => {
    const companyName = req.body.companyName
    const companyNameInEnglish = req.body.companyNameInEnglish
	const companyGovernorate = req.body.companyGovernorate
	const companyCity = req.body.companyCity
    const companyAddress = req.body.companyAddress
    const companyTelephone = req.body.companyTelephone
    const companyFax = req.body.companyFax
    const currency = req.body.currency
    const equityCapital = req.body.equityCapital

	const schema = {
        companyName: Joi.string().min(3).required(),
        companyNameInEnglish: Joi.string().min(3),
        companyGovernorate: Joi.string().required(),
        companyCity: Joi.string().required(),
        companyAddress: Joi.string().required(),
        companyTelephone: Joi.string(),
        companyFax: Joi.string(),
        currency: Joi.string().required(),
        equityCapital: Joi.string().required()
	}

	const result = Joi.validate(req.body, schema);
    
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    
    const newSPCForm = new SPCForm(
        companyName,
        companyNameInEnglish,
        companyGovernorate,
        companyCity,
        companyAddress,
        companyTelephone,
        companyFax,
        currency,
        equityCapital
    );
    spcforms.push(newSPCForm)
    return res.json({ data: spcforms });
});
//module.exports = router;

//Read all SPCForms
router.get('/', (req, res) => res.json({ data: spcforms }));

//Read a Certain SPCForm
router.get('/:id', (req, res) => {
    const spcformID = req.params.id
    const spcformConst = spcforms.find(spcformConst => spcformConst.SPCFormID === spcformID)
    return res.json({ data: spcformConst });
})

//Update SPCForm
router.put('/:id', (req, res) => {
    const spcformID = req.params.id 
    const updatedCompanyName = req.body.companyName
    const updatedCompanyNameInEnglish = req.body.companyNameInEnglish
    const updatedCompanyGovernorate = req.body.companyGovernorate
    const updatedCompanyCity = req.body.companyCity
    const updatedCompanyAddress = req.body.companyAddress
    const updatedCompanyTelephone = req.body.companyTelephone
    const updatedCompanyFax = req.body.companyFax
    const updatedCurrency = req.body.currency
    const updatedEquityCapital = req.body.equityCapital
    const spcformConst = spcforms.find(spcformConst => spcformConst.SPCFormID === spcformID)
    if(updatedCompanyName){
        spcformConst.companyName = updatedCompanyName
    }
    if(updatedCompanyNameInEnglish){
        spcformConst.companyNameInEnglish = updatedCompanyNameInEnglish
    }
    if(updatedCompanyGovernorate){
        spcformConst.companyGovernorate = updatedCompanyGovernorate
    }
    if(updatedCompanyCity){
        spcformConst.companyCity = updatedCompanyCity
    }
    if(updatedCompanyAddress){
        spcformConst.companyAddress = updatedCompanyAddress
    }
    if(updatedCompanyTelephone){
        spcformConst.companyTelephone = updatedCompanyTelephone
    }
    if(updatedCompanyFax){
        spcformConst.companyFax = updatedCompanyFax
    }
    if(updatedCurrency){
        spcformConst.currency = updatedCurrency
    }
    if(updatedEquityCapital){
        spcformConst.equityCapital = updatedEquityCapital
    }
    return res.json({ data: spcforms });
})

//Delete SPCForm
router.delete('/:SPCFormID', (req, res) => {
    const spcformID = req.params.SPCFormID 
    const spcformConst = spcforms.find(spcformConst => spcformConst.SPCFormID === spcformID)
    const index = spcforms.indexOf(spcformConst)
    spcforms.splice(index,1)
    return res.json({ data: spcforms });
})
module.exports = router;