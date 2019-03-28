const funcs = require('./funcs/formFuncs')
const mongoose = require('mongoose')
const Form = require('../Models/Form')

//Testing SSCForm requirements
test('Creating an SSCForm',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    expect(response.data.companyName).not.toBeNull()
    expect(response.data.companyName).toBeLessThanOrEqual(50)
})


