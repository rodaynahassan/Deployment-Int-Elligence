const Joi = require('joi')

module.exports = {
    createValidationL: request => {                         // create for lawyer
        const createSchema = {
        userType: Joi.string().required(),    
        name: Joi.string().required().min(3).max(50),
        gender:   Joi.string().required().min(4).max(6),
        nationality: Joi.string().required().max(50),
        identificationType: Joi.string().required().min(8).max(20), 
        identificationNumber: Joi.string().required().min(8).max(50),
<<<<<<< HEAD
        birthDate:  Joi.date().required(),
=======
        birthdate:  Joi.date().required(),
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
        address: Joi.string().required().min(5).max(50),
        telephone: Joi.string().min(4).max(15),
        fax:  Joi.string().min(5).max(20),
        email:  Joi.string().email().min(3).max(254),
        password : Joi.string().required().min(8).max(16),
<<<<<<< HEAD
        cases: Joi.Array()                
=======
        cases: Joi.array(),                //not sure yet
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
        
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
        identificationNumber: Joi.string().required().min(8).max(50),
<<<<<<< HEAD
        birthDate:  Joi.date().required(),
=======
        birthdate:  Joi.date().required(),
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
        address: Joi.string().required().min(5).max(50),
        telephone: Joi.string().min(4).max(15),
        fax:  Joi.string().min(5).max(20),
        email:  Joi.string().email().min(3).max(254),
        password : Joi.string().required().min(8).max(16),
<<<<<<< HEAD
        investorType: Joi.string().required(),
        financialBalance:Joi.number().required()
=======
        investorType: Joi.string().required()
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
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
        identificationNumber: Joi.string().required().min(8).max(50),
<<<<<<< HEAD
        birthDate:  Joi.date().required(),
=======
        birthdate:  Joi.date().required(),
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
        address: Joi.string().required().min(5).max(50),
        telephone: Joi.string().min(4).max(15),
        fax:  Joi.string().min(5).max(20),
        email:  Joi.string().email().min(3).max(254),
        password : Joi.string().required().min(8).max(16),
<<<<<<< HEAD
        cases: Joi.array()
=======
        cases: Joi.array(),                //not sure yet

>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
    
        

        }


        return Joi.validate(request, createSchema)
    },


    updateValidationL: request => {                                     //update for lawyer
        const updateSchema = {
            name: Joi.string().required().max(50).min(3),
            gender:   Joi.string().required().max(6).min(4),
            nationality: Joi.string().required().max(50),
            identificationType: Joi.string().required().max(20).min(8), 
            identificationNumber: Joi.string().required().max(50).min(8),
<<<<<<< HEAD
            birthDate:  Joi.date().required(),
=======
            birthdate:  Joi.date().required(),
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
            address: Joi.string().required().max(50).min(5),
            telephone: Joi.string().max(15).min(4),
            fax:  Joi.string().min(5).max(20),
            email:  Joi.string().email().max(254).min(3),
            password : Joi.string().required().min(8).max(16),
<<<<<<< HEAD
            cases: Joi.array()                //not sure yet
=======
            cases: Joi.array(),                //not sure yet
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
        }

        return Joi.validate(request, updateSchema)
    }, 




    updateValidationI: request => {                                     //update for investor
        const updateSchema = {
            name: Joi.string().required().max(50).min(3),
            gender:   Joi.string().required().max(6).min(4),
            nationality: Joi.string().required().max(50),
            identificationType: Joi.string().required().max(20).min(8), 
            identificationNumber: Joi.string().required().max(50).min(8),
<<<<<<< HEAD
            birthDate:  Joi.date().required(),
=======
            birthdate:  Joi.date().required(),
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
            address: Joi.string().required().max(50).min(5),
            telephone: Joi.string().max(15).min(4),
            fax:  Joi.string().min(5).max(20),
            email:  Joi.string().email().max(254).min(3),
<<<<<<< HEAD
            password : Joi.string().required().min(8).max(16),
                          
=======
            password : Joi.string().required().min(8).max(16),            
            investorType: Joi.string().required()
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
    
        }

        return Joi.validate(request, updateSchema)
    }, 





    updateValidationR: request => {                                             //update for reviewer
        const updateSchema = {
        name: Joi.string().required().max(50).min(3),
        gender:   Joi.string().required().max(6).min(4),
        nationality: Joi.string().required().max(50),
        identificationType: Joi.string().required().max(20).min(8), 
        identificationNumber: Joi.string().required().max(50).min(8),
<<<<<<< HEAD
        birthDate:  Joi.date().required(),
=======
        birthdate:  Joi.date().required(),
>>>>>>> 1c2bea08ad53fea6a1fc9888fc5986c5e58cba55
        address: Joi.string().required().max(50).min(5),
        telephone: Joi.string().max(15).min(4),
        fax:  Joi.string().min(5).max(20),
        email:  Joi.string().email().max(254).min(3),
        password : Joi.string().required().min(8).max(16),
        investorType: Joi.string().required()

        }

        return Joi.validate(request, updateSchema)
    }, 



}










