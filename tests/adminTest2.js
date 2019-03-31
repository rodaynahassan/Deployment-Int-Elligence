const funcs = require('../funcs/adminFn');

test('1 admin should be deleted and 3 left in the array', async () => {
  expect.assertions(1)
  const res = await funcs.deleteAdmin()
  expect(res.status).toEqual(200)
  expect(res).toBeInstanceOf('array')
  expect(res).to.have.length(3);
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




