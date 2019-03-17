const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompanySchema= new Schema({
        companyName:{
                    type:string,
                    required: true
        },
        companyInfo:{
                    type:string,
                    required:true
        },
        companyGovernorate:{
                    type: string,
                    required:true
        },
        companyAddress:{
                    type: string,
                    required:true
        },
        companyCity:{
                    type: string,
                    required:true
        },
        companyTelephone:{
                    type: string,
                    required:false
        },
        companyFax:{
                    type: string,
                    required:true
        },
        companyNameEnglish:{
                    type: string,
                    required:true
        }
})
module.exports = Company = mongoose.model('companies', CompanySchema)