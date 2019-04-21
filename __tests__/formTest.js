/*
 * @jest-environment node
 */

var mongoose = require('mongoose')
const funcs = require('../funcs/formFuncs');
 const axios = require('axios');




 test('1+1 is 2', async () => {
  expect(1+1).toBe(2)
})
//Test Getting all forms
// test('Test getting all forms ', async () => {
//      try {
      
//       // creating one form
   
//      const form1 = await funcs.postForm('Qahira', 'New Qahira','eltagamo3','The best 3','euro',150000,'SPCForm','2010-07-08',mongoose.Types.ObjectId('5c9fa001237c771924d621d7'))
      
   
//       const res = await funcs.getForms()
//       //console.log(res.data.data)
//       expect(res.data).toBeDefined()
//       expect(res.status).toEqual(200)
//       //expect(res.data.data.length).toEqual(2);
//        expect(res.data.data[res.data.data.length-1].companyGovernorate).toBe('Qahira')
//        expect(res.data.data[res.data.data.length-1].companyCity).toBe('New Qahira')
//        expect(res.data.data[res.data.data.length-1].companyAddress).toBe('eltagamo3')
//        expect(res.data.data[res.data.data.length-1].companyName).toBe('The best 3')
//        expect(res.data.data[res.data.data.length-1].currency).toBe('euro')
//        expect(res.data.data[res.data.data.length-1].equityCapital).toBe(150000)
//        expect(res.data.data[res.data.data.length-1].type).toBe('SPCForm')
//        expect(res.data.data[res.data.data.length-1].creationDate).toBe('2010-07-08T00:00:00.000Z')
//        expect(res.data.data[res.data.data.length-1].userId).toBe('5c9fa001237c771924d621d7')
     
//      await funcs.deleteForm(res.data.data[res.data.data.length-1]._id) 
//      }
//      catch(error){
        
  

//       }
// }
// )
//testing getting specific form

// test('Test getting a certain form ', async () => {
//     try { 
//     //creating a form for testing 
//     await funcs.postForm('Portsaid', 'New Portsaid','Gomhorya','Best of the best 3','euro',150000,'SPCForm','2019-07-08T00:00:00.000Z',mongoose.Types.ObjectId('5c9fa001237c771924d621d7'))
//     const res = await funcs.getForms()
//     expect(res.data).toBeDefined()
//     expect(res.status).toEqual(200)
    
//     const res2 = await funcs.GetFormById(res.data.data[res.data.data.length-1]._id)
//     //console.log(res2.data)
  
//       expect(res2.data.data.companyGovernorate).toBe('Portsaid')
//        expect(res2.data.data.companyCity).toBe('New Portsaid')
//        expect(res2.data.data.companyAddress).toBe('Gomhorya')
//        expect(res2.data.data.companyName).toBe('Best of the best 3')
//        expect(res2.data.data.currency).toBe('euro')
//        expect(res2.data.data.equityCapital).toBe(150000)
//        expect(res2.data.data.type).toBe('SPCForm')
//        expect(res2.data.data.creationDate).toBe('2019-07-08T00:00:00.000Z')
//        expect(res2.data.data.userId).toBe('5c9fa001237c771924d621d7')
   
//        await funcs.deleteForm(res.data.data[res.data.data.length-1]._id) 
//     }
  
//     catch(error){
      
     
    
//     }
  
  
//   })
  
  
    

// //  test delete form
//   test('test delete a form', async () => {
//     try{
//     //getting the forms in db
//     const res1=await funcs.getForms();
//     //creating entity
//     await funcs.postForm('Alexandria', 'new Alexandria','Mahatet elraml','Best Company','euro',150000,'SPCForm','1998-10-8',mongoose.Types.ObjectId('5c9fb264da7a330017864fff'))
//     //await funcs.postForm('yarasbb','malse','noiiw','Pal',"LE",123456789,'SPCForm','1995-9-8',mongoose.Types.ObjectId('5c9fa10bba992229341f6345'))
//     //getting the forms and checking the status and length to be  2
//     const res2 = await funcs.getForms();
//     expect(res2).toBeDefined()
//     expect(res2.status).toEqual(200)
//     expect(res2.data.data).toHaveLength(res1.data.data.length+1)
//     //getting the length -1 which should be the length after the deletion
//     const lengthtobe = res2.data.data.length - 1
//     await funcs.deleteForm(res2.data.data[res2.data.data.length-1]._id) 
//    // await funcs.deleteForm(res2.data.data[res2.data.data.length-2]._id)
//     //getting the new external entities list
//     const res = await funcs.getForms();
//     //checking the status and defintion
//     expect(res).toBeDefined()
//     expect(res.status).toEqual(200)
//     //checking the new length of the array after the deletion
//     expect(res.data.data).toHaveLength(lengthtobe)
//     //Emptying the database
//     //await funcs.deleteForm(res.data.data[0]._id)
//     //await funcs.deleteForm(res.data.data[0]._id)
//     }catch(error){
       
//     }


//   })

//   //Testing Creating a form by a User 
// test('Create form', async () => {
//   var response =  await funcs.getForms()
//   const length = response.data.data.length
//   try{
//     await funcs.postFormForUser('Telal', 'Cech','3 masr st.','Batates','Euro',200000,'SPCForm','1998-09-08', mongoose.Types.ObjectId('5c9ff68965c44707647a620c'))
    
//     response =  await funcs.getForms()
//     expect(response.status).toEqual(200)
//     expect(response.data.data[length].companyName).toMatch("Batates")
//     expect(response.data.data).toHaveLength(length+1)
    
// }
// catch(err){
// }
   
//  });
 
//  test ('get reviewers Comments ', async()=>{
//    try{
//    await funcs.postFormComments('Cairo', 'Nasr City','Moez Eldawla Street','Nadine','Dollar',200000,'SPCForm','1998-09-06',['YaRab'], mongoose.Types.ObjectId('5ca004f3d953e632a4591917'))
//    var response =  await funcs.getForms()
//    const length = response.data.data.length
//    expect(response.status).toEqual(200)
//  //  console.log(response.data.data[length-1].companyName)
//    expect(response.data.data[length].companyName).toMatch('Nadine')
//    const res = await funcs.getReviewerComments()
//    expect(res.data).toBeDefined()
//    expect(res.status).toEqual(200)
//   // console.log(res.data.data[res.data.data.length-1].reviewerComments)
//    const res2 =  await funcs.getReviewerComments(res.data.data[res.data.data.length-1].reviewerComments)
//    expect(res2.data.data[res2.data.data.length-1].reviewerComments).toMatch(['YaRab'])
//    }
//    catch(err){
//      }
//  });


//  test ('get Lawyer Comments ', async()=>{
//    try{
//      await funcs.postFormLawyerComments('Cairo', 'Heliopolis','33 33 Heliopolis','Fatima10','Euro',200000,'SPCForm','1998-09-06',['Laila3'], mongoose.Types.ObjectId('5c9fd73b81aeef2bf494e4ef'))
//      var response =  await funcs.getForms()
//      const length = response.data.data.length
//      expect(response.status).toEqual(200)
//     // console.log(response.data.data[length-1].companyName)
//      expect(response.data.data[length-1].companyName).toMatch('Fatima10')
//      const res = await funcs.getLawyerComments()
//      expect(res.data).toBeDefined()
//      expect(res.status).toEqual(200)
     
//      expect(res.data.data[length-1].lawyerComments).toMatch(['Laila3'])
//      //const res2 =  await funcs.getLawyerComments(res.data.data[res.data.data.length-1].lawyerComments)
//      //console.log(res.data.data[res.data.data.length-1].lawyerComments)
     
//      }
//      catch(err){
//        }
//  });
 
//  //testing creating SSC form
//  test ('create a SSC form', async ()=>{
//    var response =  await funcs.getForms()
//    const length = response.data.data.length
//   try {
//     await funcs.postSSCForm('Paris', 'Paris', '444 par', 'Abdo', 'Euro', 2000000,[{name:"Fares",type:"Person",gender:"female",nationality:"French",identificationType:"Passport",identificationNumber:"0999990999099",birthdate:"1899-09-09",address:"76 paris",typeOfManagers:"CPE"}], 'SSCForm','1977-09-07', mongoose.Types.ObjectId('5c9ff68965c44707647a620c'))
//     response =  await funcs.getForms()
//     expect(response.status).toEqual(200)
//    // console.log(response.data.data[length].companyName)
//     expect(response.data.data[length].companyName).toMatch('Abdo')
//     expect(response.data.data[length].type).toBe('SSCForm')
//     expect(response.data.data).toHaveLength(length+1)
//    }
//   catch(err){
  
//  }
//  })