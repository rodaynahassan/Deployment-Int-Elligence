const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            companyName: Joi.string().required(),
            companyGovernate: Joi.string().required(),
            companyCity: Joi.string().required(),
            companyAddress: Joi.string().required(),
            companyTelephone:Joi.string().min(8).max(15),
            companyFax:Joi.string(),
            companyNameInEnglish:Joi.string(),
            currency:Joi.string().required(),
            equityCapital:Joi.number.required()
            //Array of SSC Managers                  
        }

        return Joi.validate(request, createSchema)
    },
//(companyName,companyGovernate, companyCity, companyAddress,companyTelephone,companyFax,companyNameInEnglish,currency,equityCapital
    updateValidation: request => {
        const updateSchema = {
            companyName: Joi.string(),
            companyGovernate: Joi.string(),
            companyCity: Joi.string(),
            companyAddress: Joi.string(),
            companyTelephone:Joi.string().min(8).max(15),
            companyFax:Joi.string(),
            companyNameInEnglish:Joi.string(),
            currency:Joi.string(),
            equityCapital:Joi.number
            //Array of SSC Managers
        }

        return Joi.validate(request, updateSchema)
    }, 
}