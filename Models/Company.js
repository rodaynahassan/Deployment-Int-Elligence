const uuid = require('uuid')
class Company {
    constructor(CompanyName, CompanyInfo,CompanyGovernorate,CompanyCity,CompanyAddress,CompanyTelephone,CompanyFax,CompanyNameEnglish,InvestorID) {
        this.CompanyName = CompanyName;
        this.CompanyInfo = CompanyInfo;
        this.CompanyID = uuid.v4();
        this.CompanyGovernorate = CompanyGovernorate;
        this.CompanyCity = CompanyCity;
        this.CompanyAddress = CompanyAddress;
        this.CompanyTelephone = CompanyTelephone;
        this.CompanyFax = CompanyFax;
        this.CompanyNameEnglish = CompanyNameEnglish;
        //this.InvestorID = InvestorID; //Foreign
   };
}
module.exports = Company