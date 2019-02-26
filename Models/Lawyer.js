const uuid = require('uuid')

class Lawyer{

constructor(FirstName,LastName,Gender,Nationality,IdentificationType,IdentificationNum,BirthDate,Address,Telephone,Mobile,Fax,Email,Case){

    this.LawyerID = uuid.v4();
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.Gender=Gender;
    this.Nationality=Nationality;
    this.IdentificationType=IdentificationType;
    this.IdentificationNum=IdentificationNum;
    this.BirthDate=BirthDate;
    this.Address=Address;
    this.Telephone=Telephone;
    this.Mobile=Mobile;
    this.Fax=Fax;
    this.Email=Email;
    this.Case=Case;



    }
}

module.exports=Lawyer