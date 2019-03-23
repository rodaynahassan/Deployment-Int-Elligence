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
<<<<<<< HEAD
            UserId: Joi.ObjectId().required()
        })
=======
            form:Joi.object()
        }
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55

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