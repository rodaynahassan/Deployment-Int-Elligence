const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


const Lawyer = require('../../Models/Lawyer')


const Lawyers = [                       //my database
	new Lawyer('Mohamed','Amr','male','Egyptian','NationalID',11111111111111,'1998-8-26','Zahraa El Maadi',12345678,01002550047,'+1 666 222-999','mohamed.shenif@gmail.com',[]),
	new Lawyer('Abdelrahman','Adel','male','Egyptian','NationalID',22222222222222,'1998-2-9','Maadi',12344567,01007776660,'+2 333 444-555','abdlrahman@hotmail.com',[])
];




router.get('/', (req, res) => res.json({ data: Lawyers }));   //view all lawyers




                                                            // view a certain lawyer
router.get('/:LawyerID', (req, res) => {
    const lawyerid=req.params.LawyerID
    const lawyer= Lawyers.find(Lawyer=> Lawyer.LawyerID===lawyerid)
    res.send(lawyer)
})



router.post('/joi', (req, res) => {                           //create a lawyer
	
    const FirstName=req.body.FirstName;
    const LastName=req.body.LastName;
    const Gender=req.body.Gender;
    const Nationality=req.body.Nationality;
    const IdentificationType=req.body.IdentificationType;
    const IdentificationNum=req.body.IdentificationNum;
    const BirthDate=req.body.BirthDate;
    const Address=req.body.Address;
    const Telephone=req.body.Telephone;
    const Mobile=req.body.Mobile;
    const Fax=req.body.Fax;
    const Email=req.body.Email;
    const Case=req.body.Case;


	//const schema = {
		
        // FirstName: Joi.string().max(10).required(),
        // LastName:  Joi.string().max(10).required(),
        // Gender:   Joi.string().max(6).required(),
        // Nationality: Joi.string().max(10).required(),
        // IdentificationType:  Joi.string().max(10).required(), 
        // IdentificationNum:   Joi.number().max(14).required(),
        // BirthDate:  Joi.date().iso(),
        // Address: Joi.string().max(20).required(),
        // Telephone: Joi.number().max(8).required(),
        // Mobile:  Joi.number().max(11).required(),
        // Fax:  Joi.string().max(14).required(),
        // Email:  Joi.string().email().required(),
        // Case:   Joi.array()
        


//	}

	//const result = Joi.validate(req.body, schema);

//	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newLawyer = {

        LawyerID : uuid.v4(),
        FirstName,
        LastName ,
        Gender ,
        Nationality ,
        IdentificationType ,
        IdentificationNum ,
        BirthDate ,
        Address ,
        Telephone ,
        Mobile ,
        Fax ,
        Email ,
        Case ,

    };
    Lawyers.push(newLawyer)
    res.send(Lawyers)

	//return res.json({ data: newLawyer });
});







// Update Lawyer info
router.put('/:LawyerID', (req, res) => {

    
    const lawyerid=req.params.LawyerID
    const UpdatedFirstName = req.body.FirstName
    const UpdatedLastName = req.body.LastName
    const UpdatedGender = req.body.Gender
    const UpdatedNationality=req.body.Nationality
    const UpdatedIdentificationType=req.body.IdentificationType
    const UpdatedIdentificationNum=req.body.IdentificationNum
    const UpdatedBirthDate=req.body.BirthDate
    const UpdatedAddress=req.body.Address
    const UpdatedTelephone=req.body.Telephone
    const UpdatedMobile=req.body.Fax
    const UpdatedFax=req.body.Fax
    const UpdatedEmail=req.body.Email
    //const UpdatedCase=Case.find(book => book.CaseID === bookId)

    const lawyer= Lawyers.find(Lawyer=> Lawyer.LawyerID===lawyerid)


    if(UpdatedFirstName )
        lawyer.FirstName=UpdatedFirstName

    if(UpdatedLastName )
        lawyer.LastName=UpdatedLastName
    
    if(UpdatedGender )
        lawyer.Gender=UpdatedGender
    
    if(UpdatedNationality )
        lawyer.Nationality=UpdatedNationality
    
    if(UpdatedIdentificationType )
        lawyer.IdentificationType=UpdatedIdentificationType  
     
    if(UpdatedIdentificationNum )
        lawyer.IdentificationNum=UpdatedIdentificationNum 
      
    if(UpdatedBirthDate )
        lawyer.BirthDate=UpdatedBirthDate 
    
    if(UpdatedAddress )
        lawyer.Address=UpdatedAddress
    
    if(UpdatedTelephone )
        lawyer.Telephone=UpdatedTelephone

    if(UpdatedMobile )
        lawyer.Mobile=UpdatedMobile   
     
    if(UpdatedFax )
        lawyer.Fax=UpdatedFax    

    if(UpdatedEmail )
        lawyer.Email=UpdatedEmail 



    res.send(Lawyers)
})






// Delete a lawyer
router.delete('/:LawyerID', (req, res) => {
    const lawyerid=req.params.LawyerID 
    const lawyer= Lawyers.find(Lawyer=> Lawyer.LawyerID===lawyerid)
    const index = Lawyers.indexOf(lawyer)
    Lawyers.splice(index,1)
    res.send(Lawyers)
})




module.exports = router;









