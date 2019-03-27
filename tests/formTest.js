const funcs = require('./funcs/formFuncs')
const mongoose = require('mongoose')
const Form = require('../Models/Form')

//Testing SSCForm requirements
test('companyName is posted in SSCForm',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    expect(response.data.companyName).not.toBeNull()
    expect(response.data.companyName).toBeLessThanOrEqual(50)
})

test('companyGovernorate is posted in SSCForm',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    expect(response.data.companyGovernorate).not.toBeNull()
    expect(response.data.companyGovernorate).toBeGreaterThanOrEqual(3)
    expect(response.data.companyGovernorate).toBeLessThanOrEqual(20)
})

test('companyAddress is posted in SSCForm',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    expect(response.data.companyAddress).not.toBeNull()
    expect(response.data.companyAddress).toBeGreaterThanOrEqual(5)
    expect(response.data.companyAddress).toBeLessThanOrEqual(50)
})

test('companyCity is posted in SSCForm',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    expect(response.data.companyCity).not.toBeNull()
})

test('currency is posted in SSCForm',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    expect(response.data.currency).not.toBeNull()
})

test('equityCapital is posted in SSCForm',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    expect(response.data.equityCapital).not.toBeNull()
})

test('type is posted in SSCForm',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    expect(response.data.type).not.toBeNull()
})

test('SSCManagers is posted in SSCForm',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    if(response.data.type==='SSCForm')
    {
        expect(response.data.SSCManagers).not.toBeNull()
    }
    if(response.data.type==='SPCForm')
    {
        expect(response.data.SSCManagers).toBeNull()
    }
})

//Testing SSCManagers requirements
test('name is posted in SSCManagers',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    if(response.data.type==='SSCForm')
    {
        expect(response.data.name).not.toBeNull()
    }
    if(response.data.type==='SPCForm')
    {
        expect(response.data.name).toBeNull()
    }
})

test('managerType is posted in SSCManagers',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    if(response.data.type==='SSCForm')
    {
        expect(response.data.type).not.toBeNull()
    }
    if(response.data.type==='SPCForm')
    {
        expect(response.data.type).toBeNull()
    }
})

test('gender is posted in SSCManagers',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    if(response.data.type==='SSCForm')
    {
        expect(response.data.gender).not.toBeNull()
    }
    if(response.data.type==='SPCForm')
    {
        expect(response.data.gender).toBeNull()
    }
})

test('nationality is posted in SSCManagers',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    if(response.data.type==='SSCForm')
    {
        expect(response.data.nationality).not.toBeNull()
    }
    if(response.data.type==='SPCForm')
    {
        expect(response.data.nationality).toBeNull()
    }
})

test('identificationType is posted in SSCManagers',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    if(response.data.type==='SSCForm')
    {
        expect(response.data.identificationType).not.toBeNull()
    }
    if(response.data.type==='SPCForm')
    {
        expect(response.data.identificationType).toBeNull()
    }
})

test('identificationNumber is posted in SSCManagers',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    if(response.data.type==='SSCForm')
    {
        expect(response.data.identificationNumber).not.toBeNull()
    }
    if(response.data.type==='SPCForm')
    {
        expect(response.data.identificationNumber).toBeNull()
    }
})

test('birthdate is posted in SSCManagers',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    if(response.data.type==='SSCForm')
    {
        expect(response.data.birthdate).not.toBeNull()
    }
    if(response.data.type==='SPCForm')
    {
        expect(response.data.birthdate).toBeNull()
    }
})

test('address is posted in SSCManagers',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    if(response.data.type==='SSCForm')
    {
        expect(response.data.address).not.toBeNull()
    }
    if(response.data.type==='SPCForm')
    {
        expect(response.data.address).toBeNull()
    }
})

test('typeOfManagers is posted in SSCManagers',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    if(response.data.type==='SSCForm')
    {
        expect(response.data.typeOfManagers).not.toBeNull()
    }
    if(response.data.type==='SPCForm')
    {
        expect(response.data.typeOfManagers).toBeNull()
    }
})
