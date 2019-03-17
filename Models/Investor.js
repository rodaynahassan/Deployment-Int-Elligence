const mongoose = rquire('mongoose')
const Schema = mongoose.Schema
//const Form = require('../../models/Book')
const Company = require('../../models/Company')
const Lawyer = require('../../models/Lawyer')


const InvestorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    type: {
        type: [String],
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    identificationType: {
        type: String,
        required: true
    },
    identificationNumber: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: false
    },
    fax: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    currency: {
        type:String,
        required: true
    },
    lawyer: {
        type: Lawyer,
        required: true
    },
    forms: {
        type: [Object],
        required: true
    },
    companies: {
        type: Company,
        required: true
    }
})

module.exports = Investor = mongoose.model('investors', InvestorSchema)