const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().required(),
            gender: Joi.string().required(),
            nationality: Joi.string().required(),
            identificationType: Joi.string().required(),
            identificationNumber: Joi.string().max(14).required(),
            password: Joi.string().min(8).required(),
            birthdate: Joi.date().required(),
            address: Joi.string().required(),
            telephone: Joi.string().min(8).max(15),
            fax: Joi.string(),
            email: Joi.string().email()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string(),
            gender: Joi.string(),
            nationality: Joi.string(),
            identificationType: Joi.string(),
            identificationNumber: Joi.string().max(14),
            password: Joi.string().min(8),
            birthdate: Joi.date(),
            address: Joi.string(),
            telephone: Joi.string().min(8).max(15),
            fax: Joi.string(),
            email: Joi.string().email()
        }

        return Joi.validate(request, updateSchema)
    }, 
}