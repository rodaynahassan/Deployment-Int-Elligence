const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SPCFormSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    companyNameInEnglish: {
        type: String,
        required: false
    },
    companyGovernorate: {
        type: String,
        required: true
    },
    companyCity: {
        type: String,
        required: true
    },
    companyAddress: {
        type: String,
        required: true
    },
    companyTelephone: {
        type: String,
        required: false
    },
    companyFax: {
        type: String,
        required: false
    },
    currency: {
        type: String,
        required: true
    },
    equityCapital: {
        type: Number,
        required: true
    }
})
module.exports = SPCForm = mongoose.model('spcforms', SPCFormSchema)