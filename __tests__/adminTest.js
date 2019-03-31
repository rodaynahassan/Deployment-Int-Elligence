/**
 * @jest-environment node
 */

const funcs = require('../funcs/adminFuncs');


test('Create admin', async () => {
 
    try{
    await funcs.postAdmin('Rodayna', 'female','Egyptian','National ID','1265438','Rodayna123','3-3-1990','Maadi','rodayna@gmail.com')

    const response =  await funcs.getAdmins()
    expect(response.status).toEqual(200)
    expect(response.data.data).toHaveLength(1)
    expect(response.data.data[0].name).toMatch('Rodayna')
    await funcs.deleteAdmin(response.data.data[0]._id)
      }
  catch(error){
  }
  });

  test('Login admin', async () => {
 
    try{
    await funcs.postAdmin('Rodaynaa', 'female','Egyptian','National ID','13265438','Rodayna1234','3-3-1990','Maadi','rodayna@yahoo.com')

    const response1 =  await funcs.getAdmins()
    expect(response1.status).toEqual(200)
    expect(response1.data.data).toHaveLength(1)
    expect(response1.data.data[1].name).toMatch('Rodaynaa')
    await funcs.loginAdmin(response1.data.data[0].password,'rodayna@yahoo.com')
    const response2 =  await funcs.getAdmins()
    expect(response2.status).toEqual(200)
    
      }
  catch(error){
    console.log(error)
  }
  });
  
