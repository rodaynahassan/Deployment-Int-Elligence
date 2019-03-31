/**
 * @jest-environment node
 */

const funcs = require('../funcs/adminFuncs');


test('Create admin', async () => {
 
    try{
    const response =  await funcs.getAdmins()
    const length = response.data.data.length
    await funcs.postAdmin('Rodayna', 'female','Egyptian','National ID','1265438','Rodayna123','3-3-1990','Maadi','rodayna@gmail.com')
    expect(response.status).toEqual(200)
    expect(response.data.data).toHaveLength(length+1)
    expect(response.data.data[response.data.data.length-1].name).toMatch('Rodayna')
    await funcs.deleteAdmin(response.data.data[response.data.data.length-1]._id)
      }
  catch(error){
  }
  });

  test('Login admin', async () => {
 
    try{

    const response1 =  await funcs.getAdmins()
    const length = response1.data.data.length
    await funcs.postAdmin('Rodaynaa', 'female','Egyptian','National ID','13265438','Rodayna1234','3-3-1990','Maadi','rodayna@yahoo.com')
    expect(response1.status).toEqual(200)
    expect(response1.data.data).toHaveLength(length+1)
    expect(response1.data.data[response.data.data.length-1].name).toMatch('Rodaynaa')
    await funcs.loginAdmin(response1.data.data[response.data.data.length-1].password,'rodayna@yahoo.com')
    // const response2 =  await funcs.getAdmins()
    // expect(response2.status).toEqual(200)
    await funcs.deleteAdmin(response1.data.data[response.data.data.length-1]._id)
      }
  catch(error){
    console.log(error)
  }
  });
  
