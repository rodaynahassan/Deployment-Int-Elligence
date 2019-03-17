const Joi = require('joi')
module.exports = {
    createValidation: request => {
        const createSchema = {
            companyName: Joi.string().required(),
            companyInfo: Joi.string().required(),
            companyGovernorate: Joi.string().required(),
            companyAddress: Joi.string().required(),
            companyCity: Joi.string().required(),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string(),
            companyNameEnglish: Joi.string(),
        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            companyName: Joi.string(),
            companyInfo: Joi.string(),
            companyGovernorate: Joi.string(),
            companyAddress: Joi.string(),
            companyCity: Joi.string(),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string(),
            companyNameEnglish: Joi.string(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}



