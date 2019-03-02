const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


const Lawyer = require('../../Models/Lawyer')


const Lawyers = [                       //my database
	new Lawyer('Mohamed','Amr','male','Egyptian','NationalID','11111111111111','1998-8-26','Zahraa El Maadi','12345678','01002550047','+1 666 222-999','mohamed.shenif@gmail.com','pass'),
	new Lawyer('Abdelrahman','Adel','male','Egyptian','NationalID','22222222222222','1998-2-9','Maadi','12344567','01007776660','+2 333 444-555','abdlrahman@hotmail.com','pass')
];




router.get('/', (req, res) => res.json({ data: Lawyers }));   //view all lawyers




                                                            // view a certain lawyer
router.get('/:id', (req, res) => {
    const lawyerid=req.params.id
    const lawyer= Lawyers.find(Lawyer=> Lawyer.lawyerID===lawyerid)
    return res.json({ data: lawyer });
})



router.post('/', (req, res) => {                           //create a lawyer
	
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const gender=req.body.gender;
    const nationality=req.body.nationality;
    const identificationType=req.body.identificationType;
    const identificationNum=req.body.identificationNum;
    const birthDate=req.body.birthDate;
    const address=req.body.address;
    const telephone=req.body.telephone;
    const mobile=req.body.mobile;
    const fax=req.body.fax;
    const email=req.body.email;
    const password = req.body.password;



	const schema = {
		
        firstName: Joi.string().max(10).required(),
        lastName:  Joi.string().max(10).required(),
        gender:   Joi.string().max(6).required(),
        nationality: Joi.string().max(10).required(),
        identificationType:  Joi.string().max(10).required(), 
        identificationNum:   Joi.string().max(14).required(),
        birthDate:  Joi.date(),
        address: Joi.string().max(20).required(),
        telephone: Joi.string().max(8).required(),
        mobile:  Joi.string().max(11).required(),
        fax:  Joi.string().max(14).required(),
        email:  Joi.string().email().required(),
        password : Joi.string().required()
        


	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newLawyer = new Lawyer(

        firstName,
        lastName ,
        gender ,
        nationality ,
        identificationType ,
        identificationNum ,
        birthDate ,
        address ,
        telephone ,
        mobile ,
        fax ,
        email ,
        password 

    );
    Lawyers.push(newLawyer)
    return res.json({ data: Lawyers });

	
});







// Update Lawyer info
router.put('/:id', (req, res) => {

    
    const lawyerid=req.params.id
    const UpdatedFirstName = req.body.firstName
    const UpdatedLastName = req.body.lastName
    const UpdatedGender = req.body.gender
    const UpdatedNationality=req.body.nationality
    const UpdatedIdentificationType=req.body.identificationType
    const UpdatedIdentificationNum=req.body.identificationNum
    const UpdatedBirthDate=req.body.birthDate
    const UpdatedAddress=req.body.address
    const UpdatedTelephone=req.body.telephone
    const UpdatedMobile=req.body.mobile
    const UpdatedFax=req.body.fax
    const UpdatedEmail=req.body.email
    const UpdatedPassword = req.body.password
    const UpdatedCases = req.body.cases

    const lawyer= Lawyers.find(Lawyer=> Lawyer.lawyerID===lawyerid)


    if(UpdatedFirstName )
        lawyer.firstName=UpdatedFirstName

    if(UpdatedLastName )
        lawyer.lastName=UpdatedLastName
    
    if(UpdatedGender )
        lawyer.gender=UpdatedGender
    
    if(UpdatedNationality )
        lawyer.nationality=UpdatedNationality
    
    if(UpdatedIdentificationType )
        lawyer.identificationType=UpdatedIdentificationType  
     
    if(UpdatedIdentificationNum )
        lawyer.identificationNum=UpdatedIdentificationNum 
      
    if(UpdatedBirthDate )
        lawyer.birthDate=UpdatedBirthDate 
    
    if(UpdatedAddress )
        lawyer.address=UpdatedAddress
    
    if(UpdatedTelephone )
        lawyer.telephone=UpdatedTelephone

    if(UpdatedMobile )
        lawyer.mobile=UpdatedMobile   
     
    if(UpdatedFax )
        lawyer.fax=UpdatedFax    

    if(UpdatedEmail )
        lawyer.email=UpdatedEmail 
     

     if(UpdatedPassword)
        lawyer.password=UpdatedPassword   

    if(UpdatedCases)
        lawyer.cases.push(UpdatedCases)


    return res.json({ data: Lawyers });
})






// Delete a lawyer
router.delete('/:id', (req, res) => {
    const lawyerid=req.params.LawyerID 
    const lawyer= Lawyers.find(Lawyer=> Lawyer.lawyerID===lawyerid)
    const index = Lawyers.indexOf(lawyer)
    Lawyers.splice(index,1)
    return res.json({ data: Lawyers });
})




module.exports = router;









