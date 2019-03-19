const Joi = require('joi')
const Form = require('../Models/form')

module.exports = {
    createValidation: request => {
        const createSchema = {
            creationDate: Joi.date().required(),
            companyName: Joi.string().required().max(50),
            form: Joi.array().items(Joi.object(Form)).required(), //must insert an object , syntax -> {} , it doesn't accept null
            lawyerComments: Joi.array().items(Joi.string()),
            lawyerSeen: Joi.boolean(),
            lawyerApprove: Joi.boolean(),
            reviewerComments: Joi.array().items(Joi.string()),
            reviewerSeen: Joi.boolean(),
            reviewerApprove: Joi.boolean(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            creationDate: Joi.date(),
            companyName: Joi.string(),
            form: Joi.array().items(Joi.object(Form)),
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