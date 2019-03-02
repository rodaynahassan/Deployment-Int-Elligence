const uuid=require('uuid')
//require the SSCManagers class in Mongo
class SSCForm {
    constructor(companyName,companyGovernate, companyCity, companyAddress,companyTelephone,companyFax,companyNameInEnglish,currency,equityCapital) {
        this.SSCFormID=uuid.v4();
        this.companyGovernate = companyGovernate;           //String
        this.companyCity = companyCity;                     //String
        this.companyAddress =companyAddress;                //String
        this.companyTelephone = companyTelephone;           //String
        this.companyFax=companyFax;                         //String
        this.companyName=companyName;                       //String
        this.companyNameInEnglish=companyNameInEnglish;     //String
        this.currency=currency;                             //String
        this.equityCapital=equityCapital;                   //String
        this.SSCManagers=[];                                //Array of SSCManagers , Initialization only needs an empty array
    };
}
module.exports=SSCForm
//export the SSCForm class in mongo