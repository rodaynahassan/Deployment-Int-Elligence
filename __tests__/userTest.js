/**
  * @jest-environment node
  */

 var mongoose = require('mongoose')
 const axios = require('axios');
 const funcs = require('../funcs/userFuncs');

 test('Get approved forms (Company) of Investor', async () => {
      try{
        await funcs.createInvestor('Investor','Youssr','Female','Egyptian','National ID','Asheke3837492','1998-04-02','Masr el gedida','yoy@hotmail.com','sjeirys22')
        var users =  await funcs.getAllUsers() 
        var id =  users.data.data[users.data.data.length-1]._id
        await funcs.postFormForUser('Cairo', 'Nasr City','Moez Eldawla Street','myCompany','Dollar',200000,'SPCForm','Approved','1998-09-08',id)
        const res = await funcs.getAllForms()
        expect(res.data).toBeDefined()
        expect(res.status).toEqual(200)
        const res2 =  await funcs.getCompanyOfAnInvestor(res.data.data[res.data.data.length-1].userId)
        expect(res2.data.data[res2.data.data.length-1].status).toMatch('Approved')
      }
      catch(err){
        console.log(err)
      }
    })
 
   test('Get in progress forms (Cases)', async () => {
     try{
        await funcs.createInvestor('Investor','Ahmed','Male','Egyptian','Passport','38304md5eie9k383','1997-12-15','Nasr City','tot@gmail.com','hahahahaha') 
        var users = await funcs.getAllUsers()
        var id = users.data.data[users.data.data.length-1]._id
        await funcs.postFormForUser('Cairo', 'Nasr City','Moez Eldawla Street','newCompany','Dollar',200000,'SPCForm','In progress','1998-09-08',id)
        const res = await funcs.getAllForms()
        expect(res.data).toBeDefined()
        expect(res.status).toEqual(200)
        const res2 =  await funcs.getInProgressCase(res.data.data[res.data.data.length-1].userId)
        expect(res2.data.data[res2.data.data.length-1].status).toMatch('In progress')
     }
     catch(err){
       console.log(err)
     }
      })