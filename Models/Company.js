const uuid = require('uuid')
class Company {
    constructor(companyName, companyInfo,companyGovernorate,companyCity,companyAddress,companyTelephone,companyFax,companyNameEnglish) {
        this.companyName = companyName;                 //String
        this.companyInfo = companyInfo;                 //String
        this.companyID = uuid.v4();                    
        this.companyGovernorate = companyGovernorate;   //String
        this.companyCity = companyCity;                 //String
        this.companyAddress = companyAddress;           //String
        this.cmpanyTelephone = companyTelephone;       //String
        this.companyFax = companyFax;                   //String
        this.companyNameEnglish = companyNameEnglish;   //String
   };
}
module.exports = Company
//export company class in mongo