/**
 * @jest-environment node
 */
var mongoose = require('mongoose')
const funcs = require('../funcs/formFuncs');
const axios = require('axios');

// test('deletes ', async()=>{
//     const beforedeletion= await funcs.getForms()
//     const res2 = await funcs.getForms();
//    const deletion= await funcs.deleteForm(res2.data.data[0]._id)
//   const afterdeletion= await funcs.getForms()
//   expect(beforedeletion.data.data.length-1).toBe(afterdeletion.data.data.length)
// })

test('get Forms', async()=> {
    const forms= await funcs.getForms()
    expect(forms.data.data[0]._id).toBe("5c9fa5b204e168b3b0970714")
    expect(forms.data.data[0].companyGovernorate).toEqual("Giza")
    console.log(forms.data.data)

});

// test('1 form should be deleted and the length should be checked', async () => {
  
//   //expect.assertions(3)
//   //creating three forms 
//   const res1 = await funcs.getForms();
//   await funcs.postForm('yayaabe', 'Cairo','Rehab','NaaCom','euro',156789,'SPCForm','1990-6-3','5c9d304f24db101620efea70')
//   await funcs.postForm('SQY','Female','French','Passdaport','LE',123789,'SPCForm','1995-5-6','5c9d304f24db101620efea70')
//   //const c =await funcs.postForm('Omar','Male','Egyptian','National ID','29999383','123456789','5-12-1992','Maadi')
//   //REQUIRED:companyName ,companyGovernorate ,companyAddress ,companyCity ,currency , equity capital , type,creation date ,user id
//   //getting the forms and checking the status and length to be 3
//   //getting the admins and checking the status and length to be 3
//   const res2 = await funcs.getForms();
//    expect(res2).toBeDefined()
//    expect(res2.status).toEqual(200)
//   expect(res2.data.data).toHaveLength(res1.data.data.length+2)
//    //getting the length -1 which should be the length after the deletion
//    const lengthtobe = res2.data.data.length-1
//    await funcs.deleteForm(res2.data.data[0]._id) //getting the id of mohamed and deleting the record
//    //getting the new admins list
//    const res = await funcs.getForms();
//    //checking the status and defintion
//    expect(res).toBeDefined()
//    expect(res.status).toEqual(200)
//    //checking the new length of the array after the deletion
//    expect(res.data.data).toHaveLength(lengthtobe)
// //   //Emptying the database
// //   await funcs.deleteForm(res.data.data[1]._id)
// //   expect(res.data.data).toHaveLength(lengthtobe)
// //   //await funcs.deleteForm(res.data.data[0]._id)

  
// })

// test('GET all Forms returning all the forms', async () => {
//     // expect.assertions(1)
//     try{
//       const res = await funcs.getForms();
//       console.log(res.data)
//     const a = await funcs.postForm('Enn', 'Cairo','Rehab','NadzCom','euro','156789','yoo','3-3-1990','545')
//     //await funcs.postForm('Sara','Female','French','Passport','11112345','123456789','1-9-1995','Nasr City')
//     //await funcs.postForm('Omar','Male','Egyptian','National ID','29999383','123456789','5-12-1992','Maadi')
//     var response =  await funcs.getForm()
//     console.log(response.data)
//     expect(response.status).toEqual(200)
//     expect(response.data.data).toHaveLength(3)
//     await funcs.deleteForm(response.data.data[0]._id)
//   //  await funcs.deleteForm(response.data.data[1]._id)
//     //await funcs.deleteForm(response.data.data[2]._id)
//     response =  await funcs.getForms()
//     console.log(response.data)
//   }catch(error){
//   }
//   });


  // test('GET an Admin by the given id', async () => {
  //   //expect.assertions(1)

  //   const res =  await funcs.getAdmin()
  //   expect(res.status).toEqual(200);
  //   expect(res).toBeInstanceOf(Admin);
  //   expect(res.data.data.name).toBeDefined();
  //   expect(res.data.data.gender).toBeDefined();
  //   expect(res.data.data.nationality).toBeDefined();
  //   expect(res.data.data.identificationType).toBeDefined();
  //   expect(res.data.data.identificationNumber).toBeDefined();
  //   expect(res.data.data.password).toBeDefined();
  //   expect(res.data.data.password.length).toBeGreaterThanOrEqual(8);
  //   expect(res.data.data.birthdate).toBeDefined();
  //   expect(res.data.data.address).toBeDefined();
  



/**
 * @jest-environment node
 */

// const funcs = require('../funcs/formFuncs');

// test('1 form should be deleted and the length should be checked', async () => {
//   try{
//   //expect.assertions(3)

//   //creating three admins
//   const a = await funcs.postForm('Mohamed', 'Male','Egyptian','National ID','27377333','123456789','3-3-1990','Maadi')
//   const b =await funcs.postForm('Sara','Female','French','Passport','11112345','123456789','1-9-1995','Nasr City')
//   const c =await funcs.postForm('Omar','Male','Egyptian','National ID','29999383','123456789','5-12-1992','Maadi')
  
//   //getting the forms and checking the status and length to be 3
//   const res2 = await funcs.getForms();
//   expect(res2).toBeDefined()
//   expect(res2.status).toEqual(200)
//   expect(res2.data.data).toHaveLength(3)
//   //getting the length -1 which should be the length after the deletion
//   const lengthtobe = res2.data.data.length - 1
//   await funcs.deleteForm(a_id) //getting the id of mohamed and deleting the record
//   //getting the new admins list
//   const res = await funcs.getForms();
//   //checking the status and defintion
//   expect(res).toBeDefined()
//   expect(res.status).toEqual(200)
//   //checking the new length of the array after the deletion
//   expect(res.data.data).toHaveLength(lengthtobe)
//   await funcs.deleteForm(b._id)
//   await funcs.deleteForm(c._id)
//   }catch(error){

//   }
// })


// test('GET All Admins returning all the admins', async () => {
//     // expect.assertions(1)
//     try{
//       const res = await funcs.getAdmins();
//       console.log(res.data)
//     const a = await funcs.postAdmin('Mohamed', 'Male','Egyptian','National ID','27377333','123456789','3-3-1990','Maadi')
//     await funcs.postAdmin('Sara','Female','French','Passport','11112345','123456789','1-9-1995','Nasr City')
//     await funcs.postAdmin('Omar','Male','Egyptian','National ID','29999383','123456789','5-12-1992','Maadi')
    

//     var response =  await funcs.getAdmins()
//     console.log(response.data)
//     expect(response.status).toEqual(200)
//     expect(response.data.data).toHaveLength(3)
//     await funcs.deleteAdmin(response.data.data[0]._id)
//     await funcs.deleteAdmin(response.data.data[1]._id)
//     await funcs.deleteAdmin(response.data.data[2]._id)
//     response =  await funcs.getAdmins()
//     console.log(response.data)
//   }catch(error){
//   }
//   });


  // test('GET an Admin by the given id', async () => {
  //   //expect.assertions(1)

  //   const res =  await funcs.getAdmin()
  //   expect(res.status).toEqual(200);
  //   expect(res).toBeInstanceOf(Admin);
  //   expect(res.data.data.name).toBeDefined();
  //   expect(res.data.data.gender).toBeDefined();
  //   expect(res.data.data.nationality).toBeDefined();
  //   expect(res.data.data.identificationType).toBeDefined();
  //   expect(res.data.data.identificationNumber).toBeDefined();
  //   expect(res.data.data.password).toBeDefined();
  //   expect(res.data.data.password.length).toBeGreaterThanOrEqual(8);
  //   expect(res.data.data.birthdate).toBeDefined();
  //   expect(res.data.data.address).toBeDefined();
  



