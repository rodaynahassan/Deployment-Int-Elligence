const Joi = require('joi')
const Form = require('../Models/Form').model
const validator = require('../Validation/formValidations') 

module.exports = {
    createValidation: request => {
        const createSchema = {
            creationDate: Joi.date().required(),
            companyName: Joi.string().required().max(50),
            lawyerComments: Joi.array().items(Joi.string()),
            lawyerSeen: Joi.boolean(),
            lawyerApprove: Joi.boolean(),
            reviewerComments: Joi.array().items(Joi.string()),
            reviewerSeen: Joi.boolean(),
            reviewerApprove: Joi.boolean(),
            form:Joi.object()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            creationDate: Joi.date(),
            companyName: Joi.string(),
            lawyerComments: Joi.array().items(Joi.string()), //must insert an object , syntax -> {} , it doesn't accept null
            lawyerSeen: Joi.boolean(),
            lawyerApprove: Joi.boolean(),
            reviewerComments: Joi.array().items(Joi.string()),
            reviewerSeen: Joi.boolean(),
            reviewerApprove: Joi.boolean(),
            UserId: Joi.ObjectId()
        }

        return Joi.validate(request, updateSchema)
    }, 
}