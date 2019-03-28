<<<<<<< HEAD
const funcs = require('./fn');



test('it should GET all the forms', async()=>
{
    expect.assertions(1)
    expect(res.status.toEqual(200))
    const res=await funcs.getForm()
    expect(res.data).objectContaining(Form)
    expect(res.data).toBeInstanceOf('array')
  
})

//test a certain SSC form by ID
test('it should GET a certain SSC form by ID',async () =>
{
    expect.assertions(1)
    const res=await funcs.getSSCForm()
    expect(res.status.toEqual(200))
    expect(res.toBeInstanceOf(Function));
    expect(res.data.companyGovernorate).toBeDefined();
    expect(res.data.companyCity).toBeDefined();
    expect(res.data.companyAddress).toBeDefined();
    expect(res.data.companyTelephone).toBeDefined();
    expect(res.data.companyFax).toBeDefined();
    expect(res.data.companyName).toBeDefined();
    expect(res.data.companyNameInEnglish).toBeDefined();
    expect(res.data.currency).toBeDefined();
    expect(res.data.equityCapital).toBeDefined();
    expect(res.data.SSCManagers).toBe(Array);
    expect(res.data.type).toBeDefined();
    expect(res.data.status).toBeDefined();
    expect(res.data.caseId).toBeDefined();
    expect(res.data.name).toBeDefined();
    expect(res.data.gender).toBeDefined();
    expect(res.data.nationality).toBeDefined();
    expect(res.data.identificationType).toBeDefined();
    expect(res.data.identificationNumber).toBeDefined();
    expect(res.data.birthdate).toBeDefined();
    expect(res.data.address).toBeDefined();

    
});
//test a certain SPC by certain ID 
test('it should GET a certain SPC form by ID',async () =>
{
    expect.assertions(1)
    const res=await funcs.getSSCForm()
    expect(res.status.toEqual(200))
    expect(res.toBeInstanceOf(Function));
    expect(res.data.companyGovernorate).toBeDefined();
    expect(res.data.companyCity).toBeDefined();
    expect(res.data.companyAddress).toBeDefined();
    expect(res.data.companyTelephone).toBeDefined();
    expect(res.data.companyFax).toBeDefined();
    expect(res.data.companyName).toBeDefined();
    expect(res.data.companyNameInEnglish).toBeDefined();
    expect(res.data.currency).toBeDefined();
    expect(res.data.equityCapital).toBeDefined();
    expect(res.data.type).toBeDefined();
    expect(res.data.status).toBeDefined();
    expect(res.data.caseId).toBeDefined();
    expect(res.data.SSCManagers).toBeNull();
    
});

//delete a certain form
test('delete certain form by id', async () => {
    expect.assertions(1)
    const form =  await funcs.deleteForms()
    const formId = req.params.id  
    expect(form.status.toEqual(200));
    expect(form.toContainEqual(formId))
=======
const funcs = require('./funcs/formFuncs')
const mongoose = require('mongoose')
const Form = require('../Models/Form')

//Testing SSCForm requirements
test('Creating an SSCForm',async () =>{
    expect.assertions(1)
    const response = await funcs.createForm()
    expect(response.data.companyName).not.toBeNull()
    expect(response.data.companyName).toBeLessThanOrEqual(50)
>>>>>>> 4c9fa5b00547c30290cd86fad5df9801b6773c10
})


