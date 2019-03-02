const uuid = require('uuid')
class SPCForm {
    constructor(companyName, companyNameInEnglish, companyGovernorate, companyCity, companyAddress, companyTelephone, companyFax, currency, equityCapital) {
        this.SPCFormID = uuid.v4();
        this.companyName=companyName;                           //String
        this.companyNameInEnglish=companyNameInEnglish;         //String
        this.companyGovernorate = companyGovernorate;           //String
        this.companyCity = companyCity;                         //String
        this.companyAddress = companyAddress;                   //String
        this.companyTelephone=companyTelephone;                 //String
        this.companyFax=companyFax;                             //String
        this.currency=currency;                                 //String
        this.equityCapital=equityCapital;                       //String
    };
}

module.exports = SPCForm
//export the SPCForm class in mongo