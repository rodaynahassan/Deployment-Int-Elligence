
const uuid = require('uuid')
class SSCManager {
    constructor( name, type, gender , nationality , identificationType , identificationNumber ,
    birthdate ,address , typeOfManagers) {
        this.ID = uuid.v4();
        this.name = name;
        this.type = type;
        this.gender = gender;
        this.nationality = nationality;
        this.identificationType = identificationType;
        this.identificationNumber = identificationNumber;
        this.birthdate = birthdate;
        this.address = address ;
        this.typeOfManagers = typeOfManagers;
    };
}

module.exports = SSCManager