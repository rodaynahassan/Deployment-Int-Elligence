const uuid = require('uuid')

class Reviewer {
  constructor(id, name, gender, nationality,identificationNumber,identificationType,
    birthdate,address,telephone,fax,cases,email,password) {
      this.id = uuid.v4();
      this.name = name;
      this.gender =gender;
      this.nationality = nationality;
      this.identificationType = identificationType;
      this.identificationNumber = identificationNumber;
      this.birthdate = birthdate;
      this.address = address;
      this.telephone = telephone;
      this.fax = fax;
      this.cases = cases;
      this.email = email;
      this.password = password;

  };
}
module.exports = Reviewer
