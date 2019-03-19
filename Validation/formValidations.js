const Joi = require('joi')
module.exports = {
    createValidationSSC: request => {
        const SSCFormSchema = {
            companyName: Joi.string().required().max(50),
            companyGovernorate: Joi.string().required().min(3).max(20),
            companyAddress: Joi.string().required().min(5).max(50),
            companyCity: Joi.string().required().min(3).max(20),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string().min(5).max(20),
            companyNameEnglish: Joi.string().max(50),
            currency: Joi.string().required().min(2).max(10),
            equityCapital: Joi.number().required()
        }

        return Joi.validate(request, SSCFormSchema)
    },
    updateValidationSSC: request => {
        const updateSSCFormSchema = {
            companyName: Joi.string().max(50),
            companyGovernorate: Joi.string().min(3).max(20),
            companyAddress: Joi.string().min(5).max(20),
            companyCity: Joi.string().min(3).max(20),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string().min(5).max(20),
            companyNameEnglish: Joi.string().unique().max(50),
            currency: Joi.string().min(2).max(10),
            equityCapital: Joi.number(),
            SSCManager: Joi.array().items(Joi.object(SSCManager))
        }

        return Joi.validate(request, updateSSCFormSchema)
    }, 
    createValidationSPC: request => {
        const SPCSchema = {
            companyName: Joi.string().required().unique().max(50),
            companyGovernorate: Joi.string().required().min(3).max(20),
            companyAddress: Joi.string().required().min(5).max(50),
            companyCity: Joi.string().required().min(3).max(20),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string().min(5).max(20),
            companyNameEnglish: Joi.string().unique().max(50),
            currency: Joi.string().required().min(2).max(10),
            equityCapital: Joi.number().required()
        }

        return Joi.validate(request, SPCSchema)
    },
    updateValidationSPC: request => {
        const updateSPCFormSchema = {
            companyName: Joi.string().max(50),
            companyGovernorate: Joi.string().min(3).max(20),
            companyAddress: Joi.string().min(5).max(20),
            companyCity: Joi.string().min(3).max(20),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string().min(5).max(20),
            companyNameEnglish: Joi.string().unique().max(50),
            currency: Joi.string().min(2).max(10),
            equityCapital: Joi.number()
        }

        return Joi.validate(request, updateSPCFormSchema)
    },
        
    
    createValidationSSCManagers: request => {
        const SSCManagerSchema={
        name: Joi.string().min(3).max(50).required(),
        type: Joi.string().required(),
        gender: Joi.string().min(4).max(6).required(),
        nationality: Joi.string().max(50).required(),
        nationalityType: Joi.string().required().min(8).max(20),
        nationalityNumber: Joi.string().min(8).max(50).required(),
        birthdate: Joi.date().required(),
        address: Joi.string().required().min(5).max(50),
        typeOfManager: Joi.string().required()
        }
        return Joi.validate(request, SSCManagerSchema)
    },

    updateValidationSSCManagers: request => {
        const updateSSCManagerSchema = {
            name: Joi.string().min(3).max(50),
            type: Joi.string(),
            gender: Joi.string().min(4).max(6),
            nationality: Joi.string().max(50),
            nationalityType: Joi.string().min(8).max(20),
            nationalityNumber: Joi.string(),
            birthdate: Joi.date(),
            address: Joi.string().min(5).max(50),
            typeOfManager: Joi.string()

        }
        return Joi.validate(request, updateSSCManagersSchema)

}
}