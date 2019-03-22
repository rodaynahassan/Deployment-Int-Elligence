const Joi = require('joi')
const Form = require('../Models/Form').model
const validator = require('../Validation/formValidations') 

module.exports = {
    createValidation: request => {
        const createSchema = Joi.object({
            creationDate: Joi.date().required(),
            companyName: Joi.string().required().max(50),
            form: Joi.object().type(Form), //must insert an object , syntax -> {} , it doesn't accept null
            lawyerComments: Joi.array().items(Joi.string()),
            lawyerSeen: Joi.boolean(),
            lawyerApprove: Joi.boolean(),
            reviewerComments: Joi.array().items(Joi.string()),
            reviewerSeen: Joi.boolean(),
            reviewerApprove: Joi.boolean(),
        })

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            creationDate: Joi.date(),
            companyName: Joi.string(),
            form: Form,
            lawyerComments: Joi.array().items(Joi.string()), //must insert an object , syntax -> {} , it doesn't accept null
            lawyerSeen: Joi.boolean(),
            lawyerApprove: Joi.boolean(),
            reviewerComments: Joi.array().items(Joi.string()),
            reviewerSeen: Joi.boolean(),
            reviewerApprove: Joi.boolean()
        }

        return Joi.validate(request, updateSchema)
    }, 
}