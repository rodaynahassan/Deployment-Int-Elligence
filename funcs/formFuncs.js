const axios = require('axios')
const mongoose = require('mongoose')
const Form = require('../Models/Form')

const functions = {
<<<<<<< HEAD
   getForm: async () => {
        const form = await axios.get('http://localhost:3000/api/forms/')
        return form
        }
    }
    
=======
    createForm: async () => {
        const form = await axios.post('http://localhost:3000/api/forms/')
        return form
        }
    // createSPCForm: async () => {
    //     const form = await axios.post('http://localhost:3000/api/forms/')
    //     return form
    // }
}
>>>>>>> 4c9fa5b00547c30290cd86fad5df9801b6773c10
