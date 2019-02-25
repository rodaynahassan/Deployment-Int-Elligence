const uuid=require('uuid')
class SSCForm {
    constructor(CompanyName,CompanyGovernate, CompanyCity, CompanyAddress,CompanyTelephone,CompanyFax,CompanyNameInEnglish,Currency,EquityCapital,SSCManagers) {
        this.SSCFormID=uuid.v4();
        this.CompanyGovernate = CompanyGovernate;
        this.CompanyCity = CompanyCity;
        this.CompanyAddress =CompanyAddress;
        this.CompanyTelephone = CompanyTelephone;
        this.CompanyFax=CompanyFax;
        this.CompanyName=CompanyName;
        this.CompanyNameInEnglish=CompanyNameInEnglish;
        this.Currency=Currency;
        this.EquityCapital=EquityCapital;
        this.SSCManagers=SSCManagers;



        

    };
}
module.exports=SSCForm