const uuid = require('uuid')
//require the case class in  mong
class Reviewer {
  constructor(name, gender, nationality,identificationNumber,identificationType
    ,birthdate,address,telephone,fax,email,password) {
      this.id = uuid.v4();
      this.name = name;                                   //String
      this.gender =gender;                                //String
      this.nationality = nationality;                     //String  
      this.identificationType = identificationType;       //String
      this.identificationNumber = identificationNumber;   //String
      this.birthdate = birthdate;                         //Date
      this.address = address;                             //String
      this.telephone = telephone;                         //String
      this.fax = fax;                                     //String
      this.cases =[];                                     //Array of cases, Initialization needs only a empty array
      this.email = email;                                 //Email Format
      this.password=password;                             //String
  };
}
module.exports = Reviewer
