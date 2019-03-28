const axios = require('axios')
const mongoose = require('mongoose')
const Form = require('../Models/Form')

const functions = {
    createForm: async () => {
        const form = await axios.post('http://localhost:3000/api/forms/')
        return form
        }
    // createSPCForm: async () => {
    //     const form = await axios.post('http://localhost:3000/api/forms/')
    //     return form
    // }
}