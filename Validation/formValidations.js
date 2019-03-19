const Joi = require('joi')
module.exports = {
    createValidationSSC: request => {
        const SSCFormSchema = {
            companyName: Joi.string().required(),
            companyGovernorate: Joi.string().required(),
            companyAddress: Joi.string().required(),
            companyCity: Joi.string().required(),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string(),
            companyNameEnglish: Joi.string(),
            currency: Joi.string().required(),
            equityCapital: Joi.number().required(),
            SSCManager: Joi.array().items(Joi.object(SSCManager)).required()
        }

        return Joi.validate(request, SSCFormSchema)
    },
    updateValidationSSC: request => {
        const updateSSCFormSchema = {
            companyName: Joi.string(),
            companyInfo: Joi.string(),
            companyGovernorate: Joi.string(),
            companyAddress: Joi.string(),
            companyCity: Joi.string(),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string(),
            companyNameEnglish: Joi.string(),
            currency: Joi.string(),
            equityCapital: Joi.number(),
            SSCManager: Joi.array().items(Joi.object(SSCManager))
        }

        return Joi.validate(request, updateSSCFormSchema)
    }, 
    createValidationSPC: request => {
        const SPCSchema = {
            companyName: Joi.string().required(),
            companyGovernorate: Joi.string().required(),
            companyAddress: Joi.string().required(),
            companyCity: Joi.string().required(),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string(),
            companyNameEnglish: Joi.string(),
            currency: Joi.string().required(),
            equityCapital: Joi.number().required()
        }

        return Joi.validate(request, SPCSchema)
    },
    updateValidationSPC: request => {
        const updateSPCFormSchema = {
            companyName: Joi.string(),
            companyInfo: Joi.string(),
            companyGovernorate: Joi.string(),
            companyAddress: Joi.string(),
            companyCity: Joi.string(),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string(),
            companyNameEnglish: Joi.string(),
            currency: Joi.string(),
            equityCapital: Joi.number(),
        }

        return Joi.validate(request, updateSPCFormSchema)
    }, 
    createValidationSSCManagers: request => {
        const SSCManagerSchema={
        name: Joi.string().min(3).required(),
        type: Joi.string().required(),
        gender: Joi.string().min(4).max(6).required(),
        nationality: Joi.string().required(),
        nationalityType: Joi.string().required(),
        nationalityNumber: Joi.string().max(14).required(),
        birthdate: Joi.date().required(),
        address: Joi.string().required(),
        typeOfManager: Joi.string().required()
        }
        return Joi.validate(request, SSCManagerSchema)
    },

    updateValidationSSCManagers: request => {
        const updateSSCManagerSchema = {
            name: Joi.string().min(3).max(500),
            type: Joi.string().min(3).max(100),
            gender: Joi.string().min(4).max(6),
            nationality: Joi.string(),
            nationalityType: Joi.string(),
            nationalityNumber: Joi.string(),
            birthdate: Joi.date(),
            address: Joi.string(),
            typeOfManager: Joi.string()

        }
        return Joi.validate(request, updateSSCManagersSchema)

}
}