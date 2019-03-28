/**
 * @jest-environment node
 */

const funcs = require('../funcs/userFuncs');

test('3 users should be returned', async () => {
  
  expect.assertions(2)
  const res = await funcs.GetUsers()
  expect(res.status).toEqual(200)
  //expect(res.data).toBeInstanceOf('array')
  //console.log(res.data).toBeInstanceOf('array')
  expect(res.data.length).toEqual(3);
  
})


// test('Admins should be returned as an array', async () => {
//     expect.assertions(1)
//     const response =  await funcs.getAdmins()
//     expect(response.status).toEqual(200)
//     expect(response).toBeInstanceOf('array')
   //     expect(response).objectContaining(Admin)

//   });


//   test('it should GET a Admin by the given id', async () => {
//     expect.assertions(1)
//     const res =  await funcs.getAdmin()
//     expect(res.status).toEqual(200);
//     expect(res).toBeInstanceOf(Admin);
//     expect(res.data.name).toBeDefined();
//     expect(res.data.gender).toBeDefined();
//     expect(res.data.nationality).toBeDefined();
//     expect(res.data.identificationType).toBeDefined();
//     expect(res.data.identificationNumber).toBeDefined();
//     expect(res.data.password).toBeDefined();
//     expect(res.data.password.length).toBeGreaterThanOrEqual(8);
//     expect(res.data.birthdate).toBeDefined();
//     expect(res.data.address).toBeDefined();
//   });


