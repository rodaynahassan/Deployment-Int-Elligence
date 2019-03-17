const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            		name: Joi.string().min(3).required(),
                    gender: Joi.string().required(),
                    nationality: Joi.string().required(),
                    identificationType: Joi.string().required(),
                    identificationNumber: Joi.string().required(),
                    birthDate: Joi.date().required(),
                    address: Joi.string().required(),
                    telephone: Joi.string(),
                    fax: Joi.string(),
                    email: Joi.string().email(),
                    password: Joi.string().min(8).max(15).required(),
                    currency: Joi.string().required(),
            	}

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
                		name: Joi.string().min(3),
                        gender: Joi.string(),
                        nationality: Joi.string(),
                        identificationType: Joi.string(),
                        identificationNumber: Joi.string(),
                        birthDate: Joi.date(),
                        address: Joi.string(),
                        telephone: Joi.string(),
                        fax: Joi.string(),
                        email: Joi.string().email(),
                        password: Joi.string(),
                        currency: Joi.string(),
                	}

        return Joi.validate(request, updateSchema)
    }, 
}