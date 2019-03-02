const express = require('express')
const router = express.Router()
const Joi = require('joi');
const uuid = require('uuid');



const Company = require('../../Models/Company')
const companies = [
    new Company('Lenovo', 'New company', 'Cairo','New cairo', '64-b street','897943','+1 567 563-873',''),
    new Company('HP', 'Laptops','Giza' ,'Mohndseen','64-c street','671','+1 567 563-873',''),
    new Company('Dell', 'Hardware', 'Alexandria','Ma3moora','64-d street','1392','+1 567 563-873',''),
    new Company('Google', 'Search Engine','Sharkia','abo kbeer','64-e street', '349','+1 567 563-873','')
]
router.post('/', (req, res) => {
	const companyName = req.body.companyName
    const companyInfo = req.body.companyInfo
    const companyGovernorate = req.body.companyGovernorate
    const companyCity = req.body.companyCity
    const companyAddress = req.body.companyAddress
    const companyTelephone = req.body.companyTelephone
    const companyFax = req.body.companyFax
    const companyNameEnglishCompanyInfo = req.body.companyNameEnglish

    ///////Read a certain company
   
    /////// Read all companies
   
    //Create Company
	const schema = {
		companyName: Joi.string().min(4).required(),
        companyInfo: Joi.string().required(),
        companyGovernorate: Joi.string().required(),
        companyAddress: Joi.string().required(),
        companyCity: Joi.string().required(),
        companyTelephone: Joi.string(),
        companyFax: Joi.string(),
        companyNameEnglish: Joi.string(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newCompany = new Company(
		companyName,
        companyInfo,
        companyGovernorate,
        companyCity,
        companyAddress,
        companyTelephone,
        companyFax,
        companyNameEnglishCompanyInfo
    );
    companies.push(newCompany);
    return res.json({ data: companies });
    
});
router.get('/', (req, res) => {
    return res.json({ data: companies });
})



router.get('/:id', (req, res) => {
    const Id = req.params.id 
    const company = companies.find(company => company.companyID === Id)
    return res.json({ data: company });
})



////Update Company
router.put('/:id', (req, res) => {
    const Id = req.params.id 
    const updatedName = req.body.companyName
    const updatedInfo = req.body.companyInfo
    const updatedGovernorate = req.body.companyGovernorate
    const updatedAddress = req.body.companyAddress
    const updatedCity = req.body.companyCity
    const updatedTelephone = req.body.companyTelephone
    const updatedFax = req.body.companyFax
    const updatedNameEnglishCompanyInfo = req.body.companyNameEnglishCompanyInfo
    const Company = companies.find(Company => Company.companyID === Id)
    if(updatedName){
        Company.companyName = updatedName
    }
    if(updatedInfo ){
        Company.companyInfo = updatedInfo
    }
    if(updatedGovernorate){
        Company.companyGovernorate = updatedGovernorate
    }
    if(updatedAddress){
        Company.companyAddress = updatedName
    }
    if(updatedCity){
        Company.companyCity = updatedCity
    }

    if(updatedTelephone ){
        Company.companyTelephone = updatedTelephone
    }
    if(updatedFax){
        Company.companyFax = updatedFax
    }
    if(updatedNameEnglishCompanyInfo){
        Company.companyNameEnglishCompanyInfo = updatedNameEnglishCompanyInfo
    }
    
    return res.json({ data: companies });
})
/////Delete a book
router.delete('/:id', (req, res) => {
    const Id = req.params.id 
    const Company = companies.find(Company => Company.companyID === Id)
    const index = companies.indexOf(Company)
    companies.splice(index,1)
    return res.json({ data: companies });
})

module.exports = router;