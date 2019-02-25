const express = require('express')
const router = express.Router()

// We will be connecting using database 
const SSCForm = require('../../Models/SSCForm')

// temporary data created as if it was pulled out of the database ...
const sscforms= [
    new SSCForm('ElSebaie','Cairo', 'New Cairo', 'Rehab City Gate 6','010015','88-12-55','Euro','15000',[]),
    new SSCForm('Abou-Youssif','Alexandria', 'Montaza','Street 9' ,'010012', '14-22-33','LE','8000',[]),
    new SSCForm('Elaasy','Portsaid', 'New Portsaid','Gomhoria Street Building 10','010014','99-77-99', 'Dollar', '925000',[]),
    new SSCForm('Koraa','Luxor', 'Luxor', 'Beside Cataract Hotel','01801','22-87-36','DHS','1000000',[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              )
    
];
// GET ALL SSC FORMS
router.get('/', (req, res) => res.json({ data: sscforms }))

// GET SSC FORM BY ID
router.get('/:SSCFormID', (req, res) => {
    const SSCFormID= req.params.SSCFormID
    const SSCForm= sscforms.find(SSCForm=> SSCForm.SSCFormID === SSCFormID)
    res.send(SSCForm)
})
// Create a new SSCForm

router.post('/joi', (req, res) => {
        const CompanyName=req.body.CompanyName;
        const CompanyGovernate = req.body.CompanyGovernate;
        const CompanyCity = req.body.CompanyCity;
        const CompanyAddress =req.body.CompanyAddress;
        const CompanyTelephone = req.body.CompanyTelephone;
        const CompanyFax=req.body.CompanyFax;
        const CompanyNameInEnglish=req.body.CompanyNameInEnglish;
        const Currency=req.body.Currency;
        const EquityCapital=req.body.EquityCapital;
        const SSCManagers=req.body.SSCManagers;

	const schema = {
        CompanyName: Joi.string().required(),
		CompanyGovernate: Joi.string().required(),
        CompanyCity: Joi.number().required(),
        CompanyAddress: Joi.string().required(),
        CompanyTelephone: Joi.string(),
        CompanyFax: Joi.string(),
        CompanyNameInEnglish: Joi.string(),
        Currency: Joi.string().required(),
        EquityCapital: Joi.string().required(),
        SSCManagers: Joi.Array().required()
        
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newSSCForm = {
        SSCFormID: uuid.v4(),
        CompanyName,
        CompanyGovernate,
         CompanyCity,
         CompanyAddress,
         CompanyTelephone,
         CompanyFax,
         CompanyNameInEnglish,
         Currency,
         EquityCapital,
         SSCManagers
		
	};
    return res.json({ data: newSSCForm });
    sscforms.push(newSSCForm)
});
//UPDATE SSC FORM 
router.put('/:SSCFormID', (req, res) => {
    const  SSCFormID=req.params.SSCFormID
    const  UpdatedCompanyName=req.body.CompanyName
    const UpdatedCompanyGovernate = req.body.CompanyGovernate 
    const UpdatedCompanyCity = req.body.CompanyCity
    const UpdatedCompanyAddress=req.body.CompanyAddress
    const UpdatedCompanyTelephone=req.body.CompanyTelephone
    const UpdatedCompanyFax=req.body.CompanyFax
    const UpdatedCompanyNameInEnglish=req.body.CompanyNameInEnglish
    const  UpdatedCurrency=req.body.Currency
    const UpdatedEquityCapital=req.body.EquityCapital
    const UpdatedSSCManagers=req.body.SSCManagers

    const SSCForm = sscforms.find(SSCForm => SSCForm.SSCFormID === SSCFormID)
    if(UpdatedCompanyName )
    {
        SSCForm.CompanyName=UpdatedCompanyName
    }
    if(UpdatedCompanyGovernate )
    {
        SSCForm.CompanyGovernate=UpdatedCompanyGovernate
    }
    if(UpdatedCompanyCity )
    {
        SSCForm.CompanyCity=UpdatedCompanyCity
    }
    if(UpdatedCompanyAddress )
    {
        SSCForm.CompanyAddress=UpdatedCompanyAddress
    }
    if(UpdatedCompanyTelephone)
    {
        SSCForm.CompanyTelephone=UpdatedCompanyTelephone
    }
    if(UpdatedCompanyFax )
    {
        SSCForm.CompanyFax=UpdatedCompanyFax
    }
    if(UpdatedCompanyNameInEnglish )
    {
        SSCForm.CompanyNameInEnglish=UpdatedCompanyNameInEnglish
    }
    if(UpdatedCurrency )
    {
        SSCForm.Currency=UpdatedCurrency
    }
    if(UpdatedEquityCapital)
    {
        SSCForm.EquityCapital=UpdatedEquityCapital
    }
    if(UpdatedSSCManagers)
    {
        SSCForm.SSCManagers.push(UpdatedSSCManagers)
    }
    
    res.send(sscforms)
})
// DELETE SSC FORM 
router.delete('/:SSCFormID', (req, res) => {
    const SSCFormID = req.params.SSCFormID
    const SSCForm= sscforms.find(SSCForm => SSCForm.SSCFormID === SSCFormID)
    const index = sscforms.indexOf(SSCForm)
    sscforms.splice(index,1)
    res.send(sscforms)
})
// FOR TESTING 
//const port = process.env.PORT | 3000
//app.listen(port, () => console.log(`Server up and running on port ${port}`))
module.exports = router;

