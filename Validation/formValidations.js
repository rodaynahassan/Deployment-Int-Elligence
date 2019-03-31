const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const User = require('../Models/User')


module.exports = {
    createValidationSSC: request => {
        const SSCFormSchema = {
            userId:Joi.objectId().required(),
            companyName: Joi.string().required().max(50),
            companyGovernorate: Joi.string().required().min(3).max(20),
            companyAddress: Joi.string().required().min(5).max(50),
            companyCity: Joi.string().required().min(3).max(20),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string().min(5).max(20),
            companyNameInEnglish: Joi.string().max(50),
            currency: Joi.string().required().min(2).max(10),
            equityCapital: Joi.number().required().min(50000),
            type: Joi.string().required(),
            SSCManagers: Joi.array().required(),
            status: Joi.string().valid('Rejected','In progress','Approved'),
            creationDate: Joi.date().required(),
            lawyerComments: Joi.array().items(Joi.string()),
            lawyerSeen: Joi.boolean(),
            lawyerApprove: Joi.boolean(),
            reviewerComments: Joi.array().items(Joi.string()),
            reviewerSeen: Joi.boolean(),
            reviewerApprove: Joi.boolean(),
            SSCManagers: Joi.array().required()}
     return Joi.validate(request, SSCFormSchema)
    },
    updateValidationSSC: request => {
        const updateSSCFormSchema = {
            companyName: Joi.string().max(50),
            companyGovernorate: Joi.string().min(3).max(20),
            companyAddress: Joi.string().min(5).max(50),
            companyCity: Joi.string().min(3).max(20),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string().min(5).max(20),
            companyNameInEnglish: Joi.string().max(50),
            currency: Joi.string().min(2).max(10),
            equityCapital: Joi.number().min(50000),
            SSCManagers: Joi.array(),
            status: Joi.string().valid('Rejected','In progress','Approved'),
            creationDate: Joi.date(),
            lawyerComments: Joi.array().items(Joi.string()), //must insert an object , syntax -> {} , it doesn't accept null
            lawyerSeen: Joi.boolean(),
            lawyerApprove: Joi.boolean(),
            reviewerComments: Joi.array().items(Joi.string()),
            reviewerSeen: Joi.boolean(),
            reviewerApprove: Joi.boolean(),
            userId: Joi.objectId()
        }

        return Joi.validate(request, updateSSCFormSchema)
    }, 
   
    createValidationSPC: request => {
        const SPCSchema ={
            userId:Joi.objectId().required(),
            companyName: Joi.string().required().max(50),
            companyGovernorate: Joi.string().required().min(3).max(20),
            companyAddress: Joi.string().required().min(5).max(50),
            companyCity: Joi.string().required().min(3).max(20),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string().min(5).max(20),
            companyNameInEnglish: Joi.string().max(50),
            currency: Joi.string().required().min(2).max(10),
            type: Joi.string().required(),
            status: Joi.string().valid('Rejected','In progress','Approved'),
            creationDate: Joi.date().required(),
            lawyerComments: Joi.array().items(Joi.string()),
            lawyerSeen: Joi.boolean(),
            lawyerApprove: Joi.boolean(),
            reviewerComments: Joi.array().items(Joi.string()),
            reviewerSeen: Joi.boolean(),
            reviewerApprove: Joi.boolean(),
        };
            const SpecificUser= User.findById(SPCSchema.userId);
            if (SpecificUser.nationality!=='Egyptian')
            SPCSchema.equityCapital= Joi.number().required().min(100000);
            else
            SPCSchema.equityCapital= Joi.number().required();

     return Joi.validate(request, SPCSchema)
    },
     
    updateValidationSPC: request => {
        const updateSPCFormSchema = {
            userId: Joi.objectId(),
            companyName: Joi.string().max(50),
            companyGovernorate: Joi.string().min(3).max(20),
            companyAddress: Joi.string().min(5).max(50),
            companyCity: Joi.string().min(3).max(20),
            companyTelephone: Joi.string().min(8).max(15),
            companyFax: Joi.string().min(5).max(20),
            companyNameInEnglish: Joi.string().max(50),
            currency: Joi.string().min(2).max(10),
            equityCapital: Joi.number(),
            status: Joi.string().valid('Rejected','In progress','Approved'),
            creationDate: Joi.date(),
            lawyerComments: Joi.array().items(Joi.string()), //must insert an object , syntax -> {} , it doesn't accept null
            lawyerSeen: Joi.boolean(),
            lawyerApprove: Joi.boolean(),
            reviewerComments: Joi.array().items(Joi.string()),
            reviewerSeen: Joi.boolean(),
            reviewerApprove: Joi.boolean(),
        };
        const SpecificUser= User.findById(updateSPCFormSchema.userId)
        if (SpecificUser.nationality!=='Egyptian')
        SPCSchema.equityCapital= Joi.number().required().min(100000)
        else
        SPCSchema.equityCapital= Joi.number().required()
        return Joi.validate(request, updateSPCFormSchema)
    },
        
    
    createValidationSSCManagers: request => {
        const SSCManagerSchema={
        name: Joi.string().min(3).max(50).required(),
        type: Joi.string().required(),
        gender: Joi.string().min(4).max(6).required(),
        nationality: Joi.string().max(50).required(),
        identificationType: Joi.string().required().min(8).max(20),
        identificationNumber: Joi.string().min(8).max(50).required(),
        birthdate: Joi.date().required(),
        address: Joi.string().required().min(5).max(50),
        typeOfManagers: Joi.string().required()
        }
        return Joi.validate(request, SSCManagerSchema)
    },

    updateValidationSSCManagers: request => {
        const updateSSCManagerSchema = {
            name: Joi.string().min(3).max(50),
            type: Joi.string(),
            gender: Joi.string().min(4).max(6),
            nationality: Joi.string().max(50),
            identificationType: Joi.string().min(8).max(20),
            identificationNumber: Joi.string(),
            birthdate: Joi.date(),
            address: Joi.string().min(5).max(50),
            typeOfManagers: Joi.string()

        }
        return Joi.validate(request, updateSSCManagerSchema)

}
}