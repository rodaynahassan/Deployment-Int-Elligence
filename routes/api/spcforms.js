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
router.post('/joi', (req, res) => {
    const CompanyName = req.body.CompanyName
    const CompanyNameInEnglish = req.body.CompanyNameInEnglish
	const CompanyGovernorate = req.body.CompanyGovernorate
	const CompanyCity = req.body.CompanyCity
    const CompanyAddress = req.body.CompanyAddress
    const CompanyTelephone = req.body.CompanyTelephone
    const CompanyFax = req.body.CompanyFax
    const Currency = req.body.Currency
    const EquityCapital = req.body.EquityCapital

	const schema = {
        CompanyName: Joi.string().min(3).required(),
        CompanyNameInEnglish: Joi.string().min(3),
        CompanyGovernorate: Joi.string().required(),
        CompanyCity: Joi.string().required(),
        CompanyAddress: Joi.string().required(),
        CompanyTelephone: Joi.string(),
        CompanyFax: Joi.string(),
        Currency: Joi.string().required(),
        EquityCapital: Joi.string().required(),
	}

	const result = Joi.validate(req.body, schema);
    
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    
    const newSPCForm = {
        SPCFormID: uuid.v4(),
        CompanyName,
        CompanyNameInEnglish,
        CompanyGovernorate,
        CompanyCity,
        CompanyAddress,
        CompanyTelephone,
        CompanyFax,
        Currency,
        EquityCapital,
	};
    //return res.json({ data: newSPCForm });
    spcforms.push(newSPCForm)
    res.send(spcforms)
});
//module.exports = router;

//Read all SPCForms
router.get('/', (req, res) => res.json({ data: spcforms }));

//Read a Certain SPCForm
router.get('/:SPCFormID', (req, res) => {
    const spcformID = req.params.SPCFormID
    const spcformConst = spcforms.find(spcformConst => spcformConst.SPCFormID === spcformID)
    res.send(spcformConst)
})

//Update SPCForm
router.put('/:SPCFormID', (req, res) => {
    const spcformID = req.params.SPCFormID 
    const updatedCompanyName = req.body.CompanyName
    const updatedCompanyNameInEnglish = req.body.CompanyNameInEnglish
    const updatedCompanyGovernorate = req.body.CompanyGovernorate
    const updatedCompanyCity = req.body.CompanyCity
    const updatedCompanyAddress = req.body.CompanyAddress
    const updatedCompanyTelephone = req.body.CompanyTelephone
    const updatedCompanyFax = req.body.CompanyFax
    const updatedCurrency = req.body.Currency
    const updatedEquityCapital = req.body.EquityCapital
    const spcformConst = spcforms.find(spcformConst => spcformConst.SPCFormID === spcformID)
    if(updatedCompanyName){
        spcformConst.CompanyName = updatedCompanyName
    }
    if(updatedCompanyNameInEnglish){
        spcformConst.CompanyNameInEnglish = updatedCompanyNameInEnglish
    }
    if(updatedCompanyGovernorate){
        spcformConst.CompanyGovernorate = updatedCompanyGovernorate
    }
    if(updatedCompanyCity){
        spcformConst.CompanyCity = updatedCompanyCity
    }
    if(updatedCompanyAddress){
        spcformConst.CompanyAddress = updatedCompanyAddress
    }
    if(updatedCompanyTelephone){
        spcformConst.CompanyTelephone = updatedCompanyTelephone
    }
    if(updatedCompanyFax){
        spcformConst.CompanyFax = updatedCompanyFax
    }
    if(updatedCurrency){
        spcformConst.Currency = updatedCurrency
    }
    if(updatedEquityCapital){
        spcformConst.EquityCapital = updatedEquityCapital
    }
    res.send(spcforms)
})

//Delete SPCForm
router.delete('/:SPCFormID', (req, res) => {
    const spcformID = req.params.SPCFormID 
    const spcformConst = spcforms.find(spcformConst => spcformConst.SPCFormID === spcformID)
    const index = spcforms.indexOf(spcformConst)
    spcforms.splice(index,1)
    res.send(spcforms)
})
module.exports = router;