const Joi = require('joi')

module.exports = {
    createValidationL: request => {                         // create for lawyer
        const createSchema = {
        userType: Joi.string().required(),    
        name: Joi.string().required().min(3).max(50),
        gender:   Joi.string().required().min(4).max(6),
        nationality: Joi.string().required().max(50),
        identificationType: Joi.string().required().min(8).max(20), 
        identificationNum: Joi.string().required().min(8).max(50),
        birthDate:  Joi.date().required(),
        address: Joi.string().required().min(5).max(50),
        telephone: Joi.string().min(4).max(15),
        fax:  Joi.string().min(5).max(20),
        email:  Joi.string().email().min(3).max(254),
        password : Joi.string().required().min(8).max(16),
        cases: Joi.array.items(Joi.object()).required(),                //not sure yet
        
        }

        return Joi.validate(request, createSchema)
    },



    createValidationI: request => {                                 // create for investor
        const createSchema = {
        userType: Joi.string().required(),    
        name: Joi.string().required().min(3).max(50),
        gender:   Joi.string().required().min(4).max(6),
        nationality: Joi.string().required().max(50),
        identificationType: Joi.string().required().min(8).max(20), 
        identificationNum: Joi.string().required().min(8).max(50),
        birthDate:  Joi.date().required(),
        address: Joi.string().required().min(5).max(50),
        telephone: Joi.string().min(4).max(15),
        fax:  Joi.string().min(5).max(20),
        email:  Joi.string().email().min(3).max(254),
        password : Joi.string().required().min(8).max(16),
        forms: Joi.array.items(Joi.object()).required(),                //not sure yet
        companies: Joi.array.items(Joi.object()).required(),            //not sure yet
        lawyer: Joi.object().required(),                                //not sure yet
        investorType: Joi.string().required()

        }


        return Joi.validate(request, createSchema)
    },



    createValidationR: request => {                             // create for reviewer
        const createSchema = {
        userType: Joi.string().required(),    
        name: Joi.string().required().min(3).max(50),
        gender:   Joi.string().required().min(4).max(6),
        nationality: Joi.string().required().max(50),
        identificationType: Joi.string().required().min(8).max(20), 
        identificationNum: Joi.string().required().min(8).max(50),
        birthDate:  Joi.date().required(),
        address: Joi.string().required().min(5).max(50),
        telephone: Joi.string().min(4).max(15),
        fax:  Joi.string().min(5).max(20),
        email:  Joi.string().email().min(3).max(254),
        password : Joi.string().required().min(8).max(16),
        cases: Joi.array.items(Joi.object()).required(),                //not sure yet

    
        

        }


        return Joi.validate(request, createSchema)
    },


    updateValidationL: request => {                                     //update for lawyer
        const updateSchema = {
            name: Joi.string().required().max(50).min(3),
            gender:   Joi.string().required().max(6).min(4),
            nationality: Joi.string().required().max(50),
            identificationType: Joi.string().required().max(20).min(8), 
            identificationNum: Joi.string().required().max(50).min(8),
            birthDate:  Joi.date().required(),
            address: Joi.string().required().max(50).min(5),
            telephone: Joi.string().max(15).min(4),
            fax:  Joi.string().min(5).max(20),
            email:  Joi.string().email().max(254).min(3),
            password : Joi.string().required().min(8).max(16),
            cases: Joi.array.items(Joi.object()).required(),                //not sure yet
        }

        return Joi.validate(request, updateSchema)
    }, 




    updateValidationI: request => {                                     //update for investor
        const updateSchema = {
            name: Joi.string().required().max(50).min(3),
            gender:   Joi.string().required().max(6).min(4),
            nationality: Joi.string().required().max(50),
            identificationType: Joi.string().required().max(20).min(8), 
            identificationNum: Joi.string().required().max(50).min(8),
            birthDate:  Joi.date().required(),
            address: Joi.string().required().max(50).min(5),
            telephone: Joi.string().max(15).min(4),
            fax:  Joi.string().min(5).max(20),
            email:  Joi.string().email().max(254).min(3),
            password : Joi.string().required().min(8).max(16),
            forms: Joi.array.items(Joi.object()).required(),                //not sure yet
            companies: Joi.array.items(Joi.object()).required(),            //not sure yet
            lawyer: Joi.object().required(),                                //not sure yet
            investorType: Joi.string().required()
    
        }

        return Joi.validate(request, updateSchema)
    }, 





    updateValidationR: request => {                                             //update for reviewer
        const updateSchema = {
        name: Joi.string().required().max(50).min(3),
        gender:   Joi.string().required().max(6).min(4),
        nationality: Joi.string().required().max(50),
        identificationType: Joi.string().required().max(20).min(8), 
        identificationNum: Joi.string().required().max(50).min(8),
        birthDate:  Joi.date().required(),
        address: Joi.string().required().max(50).min(5),
        telephone: Joi.string().max(15).min(4),
        fax:  Joi.string().min(5).max(20),
        email:  Joi.string().email().max(254).min(3),
        password : Joi.string().required().min(8).max(16),
        forms: Joi.array.items(Joi.object()).required(),                //not sure yet
        companies: Joi.array.items(Joi.object()).required(),            //not sure yet
        lawyer: Joi.object().required(),                                //not sure yet
        investorType: Joi.string().required()

        }

        return Joi.validate(request, updateSchema)
    }, 



}










