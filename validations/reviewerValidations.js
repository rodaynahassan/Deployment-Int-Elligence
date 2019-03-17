const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
           
            name: Joi.string().min(3).required(),
            gender: Joi.string().required(),
            nationality: Joi.string().required(),
            identificationType:  Joi.string().required(),
            identificationNumber: Joi.string().max(14).required(),
            birthdate: Joi.date().required(),
            address: Joi.string().required(),
            telephone: Joi.string().min(8).max(15),
            fax: Joi.string(),
            cases: {type: [String], required: true }, // NO IDEA !
            email: Joi.string(),
            password: Joi.string().min(8).required()

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3),
            gender: Joi.string(),
            nationality: Joi.string(),
            identificationType:  Joi.string(),
            identificationNumber: Joi.string().max(14),
            birthdate: Joi.date(),
            address: Joi.string(),
            telephone: Joi.string().min(8).max(15),
            fax: Joi.string(),
            cases: {type: [String], required: true }, // NO IDEA !
            email: Joi.string(),
            password: Joi.string().min(8)
        }

        return Joi.validate(request, updateSchema)
    },


}

