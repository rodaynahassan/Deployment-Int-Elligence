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
	const companyName = req.body.CompanyName
    const companyInfo = req.body.CompanyInfo
    const companyGovernorate = req.body.CompanyGovernorate
    const companyCity = req.body.CompanyCity
    const companyAddress = req.body.CompanyAddress
    const companyTelephone = req.body.CompanyTelephone
    const companyFax = req.body.CompanyFax
    const companyNameEnglishCompanyInfo = req.body.CompanyNameEnglish

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
        companyNameEnglishCompanyInfo: Joi.string().min(4),
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
    const company = companies.find(company => company.CompanyID === Id)
    return res.json({ data: company });
})



////Update Company
router.put('/:id', (req, res) => {
    const Id = req.params.id 
    const updatedName = req.body.CompanyName
    const updatedInfo = req.body.CompanyInfo
    const updatedGovernorate = req.body.CompanyGovernorate
    const updatedAddress = req.body.CompanyAddress
    const updatedCity = req.body.CompanyCity
    const updatedTelephone = req.body.CompanyTelephone
    const updatedFax = req.body.CompanyFax
    const updatedNameEnglishCompanyInfo = req.body.CompanyNameEnglishCompanyInfo
    const Company = companies.find(Company => Company.CompanyID === Id)
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
    const Company = companies.find(Company => Company.CompanyID === Id)
    const index = companies.indexOf(Company)
    companies.splice(index,1)
    return res.json({ data: companies });
})

module.exports = router;