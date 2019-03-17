const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema={
        name: Joi.string().min(3).required(),
        type: Joi.string().required(),
        gender: Joi.string().min(4).max(6).required(),
        nationality: Joi.string().required(),
        nationalityType: Joi.string().required(),
        nationalityNumber: Joi.string().max(14).required(),
        birthdate: Joi.date().required(),
        address: Joi.string().required(),
        typeOfManager: Joi.string().required(),
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            type: Joi.string().min(3).max(100),
            gender: Joi.string().min(4).max(6),
            nationality: Joi.string(),
            nationalityType: Joi.string(),
            nationalityNumber: Joi.string(),
            birthdate: Joi.date(),
            address: Joi.string(),
            typeOfManager: Joi.string(),

        }

        return Joi.validate(request, updateSchema)
    }, 
}