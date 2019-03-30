const Joi = require('joi')
//const Form = require('../Validations/formValidations')
//require('mongoose-type-url');


module.exports = {
    createValidation: request => {
        const createSchema = {
          //  Name: Joi.string().required().valid('GAFI', 'Notary Public', 'Commercial Register'),
            Name: Joi.string().required(),
            Equation: Joi.string().required(),
            Api: Joi.string().required(),
            Email:Joi.string().email().required()
           // EquityCapital:Form.equityCapital.required()
           
        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema=   {
        Name: Joi.string(),
        Equation: Joi.string(),
       // Api: Joi.string().uri()
        Api: Joi.string(),
        Email:Joi.string().email()
        //EquityCapital:Form.equityCapital
       
    }
    return Joi.validate(request, updateSchema)


}
}