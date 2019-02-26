const express = require('express')
const router = express.Router()
const Joi = require('joi');
const uuid = require('uuid');



const Company = require('../../Models/Company')
const companies = [
    new Company('Lenovo', 'New company', 'Cairo','New cairo', '64-b street',897943,'+1 567 563-873',null),
    new Company('HP', 'Laptops','Giza' ,'Mohndseen','64-c street',671,'+1 567 563-873',null),
    new Company('Dell', 'Hardware', 'Alexandria','Ma3moora','64-d street',1392,'+1 567 563-873',null),
    new Company('Google', 'Search Engine','Sharkia','abo kbeer','64-e street', 349,'+1 567 563-873',null)
]
router.post('/joi', (req, res) => {
	const CompanyName = req.body.CompanyName
    const CompanyInfo = req.body.CompanyInfo
    const CompanyGovernorate = req.body.CompanyGovernorate
    const CompanyCity = req.body.CompanyCity
    const CompanyAddress = req.body.CompanyAddress
    const CompanyTelephone = req.body.CompanyTelephone
    const CompanyFax = req.body.CompanyFax
    const CompanyNameEnglishCompanyInfo = req.body.CompanyNameEnglish
    const InvestorID = req.body.InvestorID

    ///////Read a certain company
   
    /////// Read all companies
   
    //Create Company
	const schema = {
		CompanyName: Joi.string().min(4).required(),
        CompanyInfo: Joi.string().required(),
        CompanyGovernorate: Joi.string().required(),
        CompanyAddress: Joi.string().required(),
        CompanyCity: Joi.string().required(),
        CompanyTelephone: Joi.string(),
        CompanyFax: Joi.string(),
        CompanyNameEnglishCompanyInfo: Joi.string().min(4),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newCompany = {
		CompanyName,
        CompanyInfo,
        CompanyGovernorate,
        CompanyAddress,
        CompanyCity,
        CompanyTelephone,
        CompanyFax,
        CompanyNameEnglishCompanyInfo,
		CompanyID: uuid.v4(),
    };
    companies.push(newCompany);
    return res.json({ data: companies });
    
});
router.get('/', (req, res) => {
    res.send(companies)
})



router.get('/:CompanyID', (req, res) => {
    const Id = req.params.CompanyID 
    const company = companies.find(company => company.CompanyID === Id)
    res.send(company)
})



////Update Company
router.put('/:CompanyID', (req, res) => {
    const Id = req.params.CompanyID 
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
        Company.CompanyName = updatedName
    }
    if(updatedInfo ){
        Company.CompanyInfo = updatedInfo
    }
    if(updatedGovernorate){
        Company.CompanyGovernorate = updatedGovernorate
    }
    if(updatedAddress){
        Company.CompanyAddress = updatedName
    }
    if(updatedCity){
        Company.CompanyCity = updatedCity
    }
    if(updatedTelephone ){
        Company.CompanyTelephone = updatedTelephone
    }
    if(updatedFax){
        Company.CompanyFax = updatedFax
    }
    if(updatedNameEnglishCompanyInfo){
        Company.CompanyNameEnglishCompanyInfo = updatedNameEnglishCompanyInfo
    }
    
    res.send(companies)
})
/////Delete a book
router.delete('/:CompanyID', (req, res) => {
    const Id = req.params.CompanyID  
    const Company = companies.find(Company => Company.CompanyID === Id)
    const index = companies.indexOf(Company)
    companies.splice(index,1)
    res.send(companies)
})


module.exports = router;