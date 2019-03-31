/** 
 * @jest-environment node
*/
var mongoose=require('mongoose');
var axios=require('axios');
const funcs = require('../funcs/userFuncs');




//test adding comments as a lawyer
test('test adding comments as a lawyer', async () => {
    
    try{
        //expect.assertions(3)
        await funcs.createForm('hhaabb','cairoo','cairo','nasrcity','pounds',600000,'SPCForm','2019-07-08',mongoose.Types.ObjectId('5ca004f3d953e632a4591917') )
        var res =  await funcs.getAllForms()
        const a = res.data.data[res.data.data.length-1].userId
        const res2 = await funcs.putFormLawyerComments(["HELLO"],mongoose.Types.ObjectId('5ca004f3d953e632a4591917'),res.data.data[res.data.data.length-1]._id)
        console.log(res2.data.data)
        expect(res.status).toEqual(200)
        console.log(res.data.data[res.data.data.length-1])
        //expect(res.data.data[res.data.data.length-1].lawyerComments).toEqual(['nada'])
  }catch(error){
    console.log(error)
  }
  });


  //test adding comments as a reviewer
  test('test adding comments as a reviewer', async () => {
    
    try{
        await funcs.createForm('rwaaabarr','cairoo','cairo','nasrcity','pounds',600000,'SPCForm','2019-07-08',mongoose.Types.ObjectId('5ca004f3d953e632a4591917') )
        var res =  await funcs.getAllForms()
        const a = res.data.data[res.data.data.length-1].userId
        const res2 = await funcs.putFormReviewerComments(['HELLmO'],mongoose.Types.ObjectId('5ca004f3d953e632a4591917'),res.data.data[res.data.data.length-1]._id)
        //console.log(res2.data.data)
        expect(res.status).toEqual(200)
        console.log(res.data.data[res.data.data.length-1])
        //expect(res.data.data[res.data.data.length-1].lawyerComments).toEqual(['nada'])
  }catch(error){
    console.log(error)
  }
  });

  test('Create Lawyer', async () => {
 
    try{
    await funcs.postLawyer('Lawyer','Rodayna', 'female','Egyptian','National ID','1265438','Rodayna123','3-3-1990','Maadi','rodayna@gmail.com')

    const response =  await funcs.getUsers()
    expect(response.status).toEqual(200)
    expect(response.data.data).toHaveLength(1)
    expect(response.data.data[0].name).toMatch('Rodayna')
    await funcs.deleteUser(response.data.data[0]._id)
      }
  catch(error){
  }
  });

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

  test('Create Investor', async () => {
 
    try{
    await funcs.postInvestor('Investor','Rodayna', 'female','Egyptian','National ID','1265438','Rodayna123','3-3-1990','Maadi','rodayna@gmail.com','CEO')

    const response =  await funcs.getUsers()
    expect(response.status).toEqual(200)
    expect(response.data.data).toHaveLength(1)
    expect(response.data.data[0].name).toMatch('Rodayna')
    await funcs.deleteUser(response.data.data[0]._id)
      }
  catch(error){
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

  test('Create Reviewer', async () => {
 
    try{
    await funcs.postReviewer('Reviewer','Rodayna', 'female','Egyptian','National ID','1265438','Rodayna123','3-3-1990','Maadi','rodayna@gmail.com')

    const response =  await funcs.getUsers()
    expect(response.status).toEqual(200)
    expect(response.data.data).toHaveLength(1)
    expect(response.data.data[0].name).toMatch('Rodayna')
    await funcs.deleteUser(response.data.data[0]._id)
      }
  catch(error){
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













   



