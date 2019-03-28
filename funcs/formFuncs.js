const axios = require('axios')
const mongoose = require('mongoose')
const Form = require('../Models/Form')

const functions = {
   getForm: async () => {
        const form = await axios.get('http://localhost:3000/api/forms/')
        return form
        }
    }
    