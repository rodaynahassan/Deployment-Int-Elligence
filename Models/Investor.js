const uuid = require('uuid')


class Investor {
    constructor(name,type,gender,nationality,identificationType,identificationNumber,birthDate,address,telephone,fax,email,currency,lawyerID,companyNames) {
        this.name = name;
        this.investorId = uuid.v4();
        this.gender=gender;
        this.type=type; //array
        this.nationality=nationality;
        this.identificationType=identificationType;
        this.identificationNumber=identificationNumber;
        this.birthDate=birthDate;
        this.address=address;
        this.telephone=telephone;
        this.fax=fax;
        this.email=email;
        this.currency=currency;
        this.lawyerID=lawyerID;
        this.companyNames=companyNames; //array
    };
};

module.exports = Investor