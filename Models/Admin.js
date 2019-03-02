const uuid = require('uuid')


class Admin {
    constructor(name, gender, nationality, identificationType, identificationNumber, password, birthdate, address, telephone, fax, email) {
        this.name = name;                                       //String
        this.gender = gender;                                   //String
        this.nationality = nationality;                         //String
        this.identificationType = identificationType;           //String
        this.identificationNumber = identificationNumber;       //String
        this.password = password;                               //String
        this.birthdate = birthdate;                             //Date
        this.address = address;                                 //String
        this.telephone = telephone;                             //String
        this.fax = fax;                                         //String
        this.email = email;                                     //email format

        this.id = uuid.v4();
    };
};
module.exports=Admin

