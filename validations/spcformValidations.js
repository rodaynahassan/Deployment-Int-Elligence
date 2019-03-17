const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            companyName: Joi.string().required(),
            companyNameInEnglish: Joi.string(),
            companyGovernorate: Joi.string().required(),
            companyCity: Joi.string().required(),
            companyAddress: Joi.string().required(),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string(),
            currency: Joi.string().required(),
            equityCapital: Joi.number().required()
        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            companyName: Joi.string(),
            companyNameInEnglish: Joi.string(),
            companyGovernorate: Joi.string(),
            companyCity: Joi.string(),
            companyAddress: Joi.string(),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string(),
            currency: Joi.string(),
            equityCapital: Joi.number()
        }

        return Joi.validate(request, updateSchema)
    }, 
}