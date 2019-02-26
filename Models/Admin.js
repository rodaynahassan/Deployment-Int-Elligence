const uuid = require('uuid')

// The User Model
class Admin {
    constructor(name, gender, nationality, identificationType, identificationNumber, password, birthdate, address, telephone, fax, email) {
        this.name = name;
        this.gender = gender;
        this.nationality = nationality;
        this.identificationType = identificationType;
        this.identificationNumber = identificationNumber;
        this.password = password;
        this.birthdate = birthdate;
        this.address = address;
        this.telephone = telephone;
        this.fax = fax;
        this.email = email;

        this.id = uuid.v4();
    };
};
module.exports=Admin

