/**
 * @jest-environment node
 */
const mongoose = require('mongoose');
const funcs = require('../funcs/formFn');
const axios = require('axios');
//Testing Creating a form by a User 
test('Create form', async () => {
   var response =  await funcs.getForms()
   const length = response.data.data.length
   try{
     await funcs.postForm('Telal', 'Cech','3 masr st.','Batates','Euro',200000,'SPCForm','1998-09-08', mongoose.Types.ObjectId('5c9ff68965c44707647a620c'))
     //await funcs.postForm('Marassi', 'Marassi', '88 villa sg', 'Bab', 300000 , [{name:"Fares"},{type:"Person"},{gender:"female"},{nationality:"French"},{identificationType:"Passport"},{identificationNumber:"0999990999099"},{birthdate:"1899-09-09"},{address:"76 paris"},{typeOfManagers:"CPE"}],'SSCForm',mongoose.Types.ObjectId('5c9ff68965c44707647a620c'))
   }
   catch(err){
   console.log(err);}
   response =  await funcs.getForms()
   expect(response.status).toEqual(200)
   expect(response.data.data[length].companyName).toMatch("Batates")
   expect(response.data.data).toHaveLength(length+1)
   
    
  });
  
  test ('get reviewers Comments ', async()=>{
    try{
    await funcs.postFormComments('Cairo', 'Nasr City','Moez Eldawla Street','Nadine','Dollar',200000,'SPCForm','1998-09-06',['YaRab'], mongoose.Types.ObjectId('5ca004f3d953e632a4591917'))
    var response =  await funcs.getForms()
    const length = response.data.data.length
    expect(response.status).toEqual(200)
    console.log(response.data.data[length-1].companyName)
    expect(response.data.data[length].companyName).toMatch('Nadine')
    const res = await funcs.getReviewerComments()
    expect(res.data).toBeDefined()
    expect(res.status).toEqual(200)
    console.log(res.data.data[res.data.data.length-1].reviewerComments)
    const res2 =  await funcs.getReviewerComments(res.data.data[res.data.data.length-1].reviewerComments)
    expect(res2.data.data[res2.data.data.length-1].reviewerComments).toMatch(['YaRab'])
    }
    catch(err){
      console.log(err);}
  });


  test ('get Lawyer Comments ', async()=>{
    try{
      await funcs.postFormLawyerComments('Cairo', 'Heliopolis','33 33 Heliopolis','Fatima10','Euro',200000,'SPCForm','1998-09-06',['Laila3'], mongoose.Types.ObjectId('5c9fd73b81aeef2bf494e4ef'))
      var response =  await funcs.getForms()
      const length = response.data.data.length
      expect(response.status).toEqual(200)
      console.log(response.data.data[length-1].companyName)
      expect(response.data.data[length-1].companyName).toMatch('Fatima10')
      const res = await funcs.getLawyerComments()
      expect(res.data).toBeDefined()
      expect(res.status).toEqual(200)
      
      expect(res.data.data[length-1].lawyerComments).toMatch(['Laila3'])
      //const res2 =  await funcs.getLawyerComments(res.data.data[res.data.data.length-1].lawyerComments)
      //console.log(res.data.data[res.data.data.length-1].lawyerComments)
      
      }
      catch(err){
        console.log(err);}
  });
  
  //testing creating SSC form
  test ('create a SSC form', async ()=>{
    var response =  await funcs.getForms()
    const length = response.data.data.length
   try {
     await funcs.postSSCForm('Paris', 'Paris', '444 par', 'Abdo', 'Euro', 2000000,[{name:"Fares",type:"Person",gender:"female",nationality:"French",identificationType:"Passport",identificationNumber:"0999990999099",birthdate:"1899-09-09",address:"76 paris",typeOfManagers:"CPE"}], 'SSCForm','1977-09-07', mongoose.Types.ObjectId('5c9ff68965c44707647a620c'))
     response =  await funcs.getForms()
     expect(response.status).toEqual(200)
     console.log(response.data.data[length].companyName)
     expect(response.data.data[length].companyName).toMatch('Abdo')
     expect(response.data.data[length].type).toBe('SSCForm')
     expect(response.data.data).toHaveLength(length+1)
    }
   catch(err){
    console.log(err);
  }
   
    
  });