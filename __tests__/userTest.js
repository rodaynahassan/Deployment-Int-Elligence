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
  test('Login Lawyer', async () => {
 
    try{
    await funcs.postLawyer('Lawyer','Rodaynaa', 'female','Egyptian','National ID','13265438','Rodayna1234','3-3-1990','Maadi','rodayna@yahoo.com')

    const response1 =  await funcs.getUsers()
    expect(response1.status).toEqual(200)
    expect(response1.data.data).toHaveLength(1)
    expect(response1.data.data[1].name).toMatch('Rodaynaa')
    await funcs.loginLawyer(response1.data.data[0].password,'rodayna@yahoo.com')
    const response2 =  await funcs.getUsers()
    expect(response2.status).toEqual(200)
    await funcs.deleteUser(response1.data.data[0]._id)
    await funcs.deleteUser(response2.data.data[0]._id)
    
      }
  catch(error){
    console.log(error)
  }
  });

  test('Login Investor', async () => {
 
    try{
    await funcs.postInvestor('Investor','Rodaynaa', 'female','Egyptian','National ID','13265438','Rodayna1234','3-3-1990','Maadi','rodayna@yahoo.com','CEO')

    const response1 =  await funcs.getUsers()
    expect(response1.status).toEqual(200)
    expect(response1.data.data).toHaveLength(1)
    expect(response1.data.data[1].name).toMatch('Rodaynaa')
    await funcs.loginInvestor(response1.data.data[0].password,'rodayna@yahoo.com')
    const response2 =  await funcs.getUsers()
    expect(response2.status).toEqual(200)
    await funcs.deleteUser(response1.data.data[0]._id)
    await funcs.deleteUser(response2.data.data[0]._id)
    
      }
  catch(error){
    console.log(error)
  }
  });

  test('Login Reviewer', async () => {
 
    try{
    await funcs.postReviewer('Reviewer','Rodaynaa', 'female','Egyptian','National ID','13265438','Rodayna1234','3-3-1990','Maadi','rodayna@yahoo.com')

    const response1 =  await funcs.getUsers()
    expect(response1.status).toEqual(200)
    expect(response1.data.data).toHaveLength(1)
    expect(response1.data.data[1].name).toMatch('Rodaynaa')
    await funcs.loginReviewer(response1.data.data[0].password,'rodayna@yahoo.com')
    const response2 =  await funcs.getUsers()
    expect(response2.status).toEqual(200)
    await funcs.deleteUser(response1.data.data[0]._id)
    await funcs.deleteUser(response2.data.data[0]._id)
    
      }
  catch(error){
    console.log(error)
  }
  });

  
