const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
        firstName: Joi.string().required().max(50),
        lastName:  Joi.string().required().max(50),
        gender:   Joi.string().required().max(6),
        nationality: Joi.string().required().max(50),
        identificationType:  Joi.string().required().max(50), 
        identificationNum:   Joi.string().required().max(50),
        birthDate:  Joi.date().required().max(50),
        address: Joi.string().required().max(50),
        telephone: Joi.string().max(20),
        fax:  Joi.string().max(20),
        email:  Joi.string().email().max(20),
        password : Joi.string().required().min(8).max(50)
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            firstName: Joi.string().max(50),
            lastName:  Joi.string().max(50),
            gender:   Joi.string().max(6),
            nationality: Joi.string().max(50),
            identificationType:  Joi.string().max(50), 
            identificationNum:   Joi.string().max(50),
            birthDate:  Joi.date().max(50),
            address: Joi.string().max(50),
            telephone: Joi.string().max(20),
            fax:  Joi.string().max(20),
            email:  Joi.string().email().max(20),
            password : Joi.string().min(8).max(50)
        }

        return Joi.validate(request, updateSchema)
    }, 
}










