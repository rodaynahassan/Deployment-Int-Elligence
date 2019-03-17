const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            creationDate: Joi.date().required(),
            form: Joi.object().required() //must insert an object , syntax -> {} , it doesn't accept null
            //reviewer comments
            //lawyer comments 
            //booleans
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            creationDate: Joi.date(),
            form: Joi.object(), //must insert an object , syntax -> {} , it doesn't accept null
            lawyerSeen: Joi.boolean(),
            lawyerApprove: Joi.boolean(),
            reviewerSeen: Joi.boolean(),
            reviewerApprove: Joi.boolean()
        }

        return Joi.validate(request, updateSchema)
    }, 
}