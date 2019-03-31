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

  //test get SSCform by company name
test('test get form by company name ', async () => {
  try {

  await funcs.createForm('omarKhaled1','cairoo','cairo','nasrcity','pounds',600000,'SSCForm','2019-07-08',mongoose.Types.ObjectId('5c9fbb2d026fe76c64089c52'),[{ name:"nadaa", type:"coo",gender:"female",nationality:"egyptian",identificationType:"bnghtydyf",identificationNumber:"1234456788",birthdate:"2019-06-07",address:"nasrrrr",typeOfManagers:"khihhu"}] )
  const res = await funcs.getAllForms()
  expect(res.data).toBeDefined()
  expect(res.status).toEqual(200)
  const res2 = await funcs.GetFormByCompanyName(res.data.data[res.data.data.length-1].companyName)
  expect(res2.data.data[res2.data.data.length-1].companyName).toBe('omarKhaled1')
  expect(res2.data.data[res2.data.data.length-1].companyGovernorate).toBe('cairoo')
  expect(res2.data.data[res2.data.data.length-1].companyCity).toBe('cairo')
  expect(res2.data.data[res2.data.data.length-1].companyAddress).toBe('nasrcity')
  expect(res2.data.data[res2.data.data.length-1].currency).toBe('pounds')
  expect(res2.data.data[res2.data.data.length-1].equityCapital).toBe(600000)
  expect(res2.data.data[res2.data.data.length-1].type).toBe('SSCForm')
  expect(res2.data.data[res2.data.data.length-1].creationDate).toBe('2019-07-08T00:00:00.000Z')
  expect(res2.data.data[res2.data.data.length-1].userId).toBe('5c9fbb2d026fe76c64089c52')
  expect(res2.data.data[res2.data.data.length-1].SSCManagers).toEqual([{ name:"nadaa", type:"coo",gender:"female",nationality:"egyptian",identificationType:"bnghtydyf",identificationNumber:"1234456788",birthdate:"2019-06-07",address:"nasrrrr",typeOfManagers:"khihhu"}] )

  }
  catch(error){
    console.log(error)
  }
})

//test get SPCForm by company name
test('test get SPCForm by company name', async () => {
  try {

  await funcs.createForm('comanyunique','cairoo','cairo','nasrcity','pounds',600000,'SSCForm','2019-07-08',mongoose.Types.ObjectId('5c9fbb2d026fe76c64089c52') )
  const res = await funcs.getAllForms()
  expect(res.data).toBeDefined()
  expect(res.status).toEqual(200)
  const res2 = await funcs.GetFormByCompanyName(res.data.data[res.data.data.length-1].companyName)
  expect(res2.data.data[res2.data.data.length-1].companyName).toBe('comanyunique')
  expect(res2.data.data[res2.data.data.length-1].companyGovernorate).toBe('cairoo')
  expect(res2.data.data[res2.data.data.length-1].companyCity).toBe('cairo')
  expect(res2.data.data[res2.data.data.length-1].companyAddress).toBe('nasrcity')
  expect(res2.data.data[res2.data.data.length-1].currency).toBe('pounds')
  expect(res2.data.data[res2.data.data.length-1].equityCapital).toBe(600000)
  expect(res2.data.data[res2.data.data.length-1].type).toBe('SSCForm')
  expect(res2.data.data[res2.data.data.length-1].creationDate).toBe('2019-07-08T00:00:00.000Z')
  expect(res2.data.data[res2.data.data.length-1].userId).toBe('5c9fbb2d026fe76c64089c52')
  

  }
  catch(error){
    
    console.log(error)
  
  }

})
  
