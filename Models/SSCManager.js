const uuid = require('uuid')
class SSCManager {
    constructor( name, type, gender , nationality , identificationType , identificationNumber ,birthdate ,address , typeOfManagers) {
        this.ID = uuid.v4();
        this.name = name;                                   //String
        this.type = type;                                   //String
        this.gender = gender;                               //String
        this.nationality = nationality;                     //String
        this.identificationType = identificationType;       //String
        this.identificationNumber = identificationNumber;   //String
        this.birthdate = birthdate;                         //Date
        this.address = address ;                            //String
        this.typeOfManagers = typeOfManagers;               //String
    };
}

module.exports = SSCManager
//Export the SSCManager class in mongo