const express = require('express')
const router = express.Router()
const Joi = require('joi')

const SSCForm = require('../../Models/SSCForm')


const sscforms= [
    new SSCForm('ElSebaie','Cairo', 'New Cairo', 'Rehab City Gate 6','010015','88-12-55','','Euro','15000'),
    new SSCForm('Abou-Youssif','Alexandria', 'Montaza','Street 9' ,'010012', '14-22-33','','LE','8000'),
    new SSCForm('Elaasy','Portsaid', 'New Portsaid','Gomhoria Street Building 10','010014','99-77-99','', 'Dollar', '925000'),
    new SSCForm('Koraa','Luxor', 'Luxor', 'Beside Cataract Hotel','01801','22-87-36','','DHS','1000000'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             )
    
];
// GET ALL SSC FORMS
router.get('/', (req, res) => res.json({ data: sscforms }))

// GET SSC FORM BY ID
router.get('/:id', (req, res) => {
    const SSCFormID= req.params.id
    const SSCForm= sscforms.find(SSCForm=> SSCForm.SSCFormID === SSCFormID)
    res.json({ data: SSCForm })
})
// Create a new SSCForm

router.post('/', (req, res) => {
        const companyName=req.body.companyName;
        const companyGovernate = req.body.companyGovernate;
        const companyCity = req.body.companyCity;
        const companyAddress =req.body.companyAddress;
        const companyTelephone = req.body.companyTelephone;
        const companyFax=req.body.companyFax;
        const companyNameInEnglish=req.body.companyNameInEnglish;
        const currency=req.body.currency;
        const equityCapital=req.body.equityCapital;

	const schema = {
        companyName: Joi.string().required(),
		companyGovernate: Joi.string().required(),
        companyCity: Joi.string().required(),
        companyAddress: Joi.string().required(),
        companyTelephone: Joi.string(),
        companyFax: Joi.string(),
        companyNameInEnglish: Joi.string(),
        currency: Joi.string().required(),
        equityCapital: Joi.string().required(),
        
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newSSCForm = new SSCForm(
        companyName,
        companyGovernate,
        companyCity,
        companyAddress,
        companyTelephone,
        companyFax,
        companyNameInEnglish,
        currency,
        equityCapital
		
    )
    sscforms.push(newSSCForm)
    return res.json({ data: sscforms });
    
});
//UPDATE SSC FORM 
router.put('/:id', (req, res) => {
    const  SSCFormID=req.params.id
    const  UpdatedCompanyName=req.body.companyName
    const UpdatedCompanyGovernate = req.body.companyGovernate 
    const UpdatedCompanyCity = req.body.companyCity
    const UpdatedCompanyAddress=req.body.companyAddress
    const UpdatedCompanyTelephone=req.body.companyTelephone
    const UpdatedCompanyFax=req.body.companyFax
    const UpdatedCompanyNameInEnglish=req.body.companyNameInEnglish
    const  UpdatedCurrency=req.body.currency
    const UpdatedEquityCapital=req.body.equityCapital
    const UpdatedSSCManagers=req.body.SSCManagers

    const SSCForm = sscforms.find(SSCForm => SSCForm.SSCFormID === SSCFormID)
    if(UpdatedCompanyName )
    {
        SSCForm.companyName=UpdatedCompanyName
    }
    if(UpdatedCompanyGovernate )
    {
        SSCForm.companyGovernate=UpdatedCompanyGovernate
    }
    if(UpdatedCompanyCity )
    {
        SSCForm.companyCity=UpdatedCompanyCity
    }
    if(UpdatedCompanyAddress )
    {
        SSCForm.companyAddress=UpdatedCompanyAddress
    }
    if(UpdatedCompanyTelephone)
    {
        SSCForm.companyTelephone=UpdatedCompanyTelephone
    }
    if(UpdatedCompanyFax )
    {
        SSCForm.companyFax=UpdatedCompanyFax
    }
    if(UpdatedCompanyNameInEnglish )
    {
        SSCForm.companyNameInEnglish=UpdatedCompanyNameInEnglish
    }
    if(UpdatedCurrency )
    {
        SSCForm.currency=UpdatedCurrency
    }
    if(UpdatedEquityCapital)
    {
        SSCForm.equityCapital=UpdatedEquityCapital
    }
    if(UpdatedSSCManagers)
    {
        SSCForm.SSCManagers.push(UpdatedSSCManagers)
    }
    
    res.json({ data: sscforms })
})
// DELETE SSC FORM 
router.delete('/:id', (req, res) => {
    const SSCFormID = req.params.id
    const SSCForm= sscforms.find(SSCForm => SSCForm.SSCFormID === SSCFormID)
    const index = sscforms.indexOf(SSCForm)
    sscforms.splice(index,1)
    res.json({ data: sscforms })
})

module.exports = router;

