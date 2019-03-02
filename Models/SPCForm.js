const uuid = require('uuid')
class SPCForm {
    constructor(CompanyName, CompanyNameInEnglish, CompanyGovernorate, CompanyCity, CompanyAddress, CompanyTelephone, CompanyFax, Currency, EquityCapital) {
        this.SPCFormID = uuid.v4();
        this.CompanyName=CompanyName;
        this.CompanyNameInEnglish=CompanyNameInEnglish;
        this.CompanyGovernorate = CompanyGovernorate;
        this.CompanyCity = CompanyCity;
        this.CompanyAddress = CompanyAddress;
        this.CompanyTelephone=CompanyTelephone;
        this.CompanyFax=CompanyFax;
        this.Currency=Currency;
        this.EquityCapital=EquityCapital;
    };
}

module.exports = SPCForm