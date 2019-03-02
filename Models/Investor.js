const uuid = require('uuid')
//require form, company & lawyer module in mongo

class Investor {
    constructor(name,gender,nationality,identificationType,identificationNumber,birthDate,address,telephone,fax,email,password,currency,lawyer) {
        this.name = name;                                   //string
        this.investorId = uuid.v4();
        this.gender=gender;                                 //String
        this.type=[];                                       //array of types, initialization of Investor needs only a empty array
        this.nationality=nationality;                       //String
        this.identificationType=identificationType;         //String
        this.identificationNumber=identificationNumber;     //String
        this.birthDate=birthDate;                           //Date
        this.address=address;                               //String
        this.telephone=telephone;                           //String
        this.fax=fax;                                       //String
        this.email=email;                                   //email format
        this.password=password;                             //String    
        this.currency=currency;                             //String
        this.lawyer=lawyer;                                 //lawyer object
        this.forms=[];                                      //array of forms, same as type
        this.companies=[];                                  //array of companies, same as type
    };
};

module.exports = Investor