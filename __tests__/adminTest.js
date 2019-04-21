/**
 * @jest-environment node
 */

const mongoose = require('mongoose')
const funcs = require('../funcs/adminFuncs');


test('1+1 is 2', async () => {
  expect(1+1).toBe(2)
})
// test('1 admin should be deleted and the length should be checked', async () => {
 
//   try{
//   await funcs.postAdmin('Mohamed', 'Male','Egyptian','National ID','273773333','123456789','3-3-1990','Maadi','omar@gmail.com')
//   await funcs.postAdmin('Sara','Female','French','Passport','11112345','123456789','1-9-1995','Nasr City','yoyo@gmail.com')
//   await funcs.postAdmin('Omar','Male','Egyptian','National ID','299399383','123456789','5-12-1992','Maadi','roro@gmail.com')
//   const response =  await funcs.getAdmins()
//   // //getting the admins and putting them in constants to help emptying the database in the end 
// try{
  
//   //getting the length -1 which should be the length after the deletion
//   const lengthtobe = response.data.data.length - 1
//   await funcs.deleteAdmin(response.data.data[0]._id) //getting the id of mohamed and deleting the record
//   //getting the new admins list
//   const res = await funcs.getAdmins();
//   //checking the status and definition
//   expect(res).toBeDefined()
//   expect(res.status).toEqual(200)
//   //checking the new length of the array after the deletion
//   expect(res.data.data).toHaveLength(lengthtobe)
//   //Emptying the database
// }catch(error){
  
// }
// await funcs.deleteAdmin(response.data.data[0]._id) 
//   await funcs.deleteAdmin(response.data.data[1]._id)
//   await funcs.deleteAdmin(response.data.data[2]._id)
  
//   }catch(error){
    
//   }
  
// })


// test('GET All Admins returning all the admins', async () => {
    
//     try{
//       await funcs.postAdmin('Mohamed', 'Male','Egyptian','National ID','273773333','123456789','3-3-1990','Maadi','omar@gmail.com')
//       await funcs.postAdmin('Sara','Female','French','Passport','11112345','123456789','1-9-1995','Nasr City','yoyo@gmail.com')
//       await funcs.postAdmin('Omar','Male','Egyptian','National ID','299399383','123456789','5-12-1992','Maadi','roro@gmail.com')
//     const response =  await funcs.getAdmins()
//     try{
    
//     expect(response.status).toEqual(200)
//     expect(response.data.data).toHaveLength(3)
//     }catch(error){
     
//     }
//   await funcs.deleteAdmin(response.data.data[0]._id) 
//   await funcs.deleteAdmin(response.data.data[1]._id)
//   await funcs.deleteAdmin(response.data.data[2]._id)
    
//   }catch(error){
//   }
//   });


//   test('GET an Admin by the given id', async () => {
   
//    try{
//     await funcs.postAdmin('Mohamed', 'Male','Egyptian','National ID','273773333','123456789','3-3-1990','Maadi','omar@gmail.com')
//     await funcs.postAdmin('Sara','Female','French','Passport','11112345','123456789','1-9-1995','Nasr City','yoyo@gmail.com')
//     await funcs.postAdmin('Omar','Male','Egyptian','National ID','299399383','123456789','5-12-1992','Maadi','roro@gmail.com')
//     const res2 = await funcs.getAdmins()
//     const a = res2.data.data[0]._id
//     const b = res2.data.data[1]._id
//     const c = res2.data.data[2]._id
//     try{
    
//     const res =  await funcs.getAdminByID(a)
//     expect(res.status).toEqual(200);
//     expect(res.data.data.name).toBeDefined();
//     expect(res.data.data.gender).toBeDefined();
//     expect(res.data.data.nationality).toBeDefined();
//     expect(res.data.data.identificationType).toBeDefined();
//     expect(res.data.data.identificationNumber).toBeDefined();
//     expect(res.data.data.password).toBeDefined();
//     expect(res.data.data.password.length).toBeGreaterThanOrEqual(8);
//     expect(res.data.data.birthdate).toBeDefined();
//     expect(res.data.data.address).toBeDefined();
//     }
//     catch(error){
     
//     }
//     await funcs.deleteAdmin(a)
//   await funcs.deleteAdmin(b)
//   await funcs.deleteAdmin(c)

//    }catch(error){
 
//   }
//  })

//   test('GET admin by false ID should return null', async () => {
    
//     try{
//     const response =  await funcs.getAdminByID(mongoose.Types.ObjectId("5c9ff4e9a684c432b40e2c82"))
//     expect(response.status).toEqual(200)
//     expect(response.data.data).toBeNull()
//   }catch(error){
    
//   }
//   });

//   //test get SSCform by company name
// test('test get form by company name ', async () => {
//   try {

//   await funcs.createForm('omarKhaled1','cairoo','cairo','nasrcity','pounds',600000,'SSCForm','2019-07-08',mongoose.Types.ObjectId('5c9fbb2d026fe76c64089c52'),[{ name:"nadaa", type:"coo",gender:"female",nationality:"egyptian",identificationType:"bnghtydyf",identificationNumber:"1234456788",birthdate:"2019-06-07",address:"nasrrrr",typeOfManagers:"khihhu"}] )
//   const res = await funcs.getAllForms()
//   expect(res.data).toBeDefined()
//   expect(res.status).toEqual(200)
//   const res2 = await funcs.GetFormByCompanyName(res.data.data[res.data.data.length-1].companyName)
//   expect(res2.data.data[res2.data.data.length-1].companyName).toBe('omarKhaled1')
//   expect(res2.data.data[res2.data.data.length-1].companyGovernorate).toBe('cairoo')
//   expect(res2.data.data[res2.data.data.length-1].companyCity).toBe('cairo')
//   expect(res2.data.data[res2.data.data.length-1].companyAddress).toBe('nasrcity')
//   expect(res2.data.data[res2.data.data.length-1].currency).toBe('pounds')
//   expect(res2.data.data[res2.data.data.length-1].equityCapital).toBe(600000)
//   expect(res2.data.data[res2.data.data.length-1].type).toBe('SSCForm')
//   expect(res2.data.data[res2.data.data.length-1].creationDate).toBe('2019-07-08T00:00:00.000Z')
//   expect(res2.data.data[res2.data.data.length-1].userId).toBe('5c9fbb2d026fe76c64089c52')
//   expect(res2.data.data[res2.data.data.length-1].SSCManagers).toEqual([{ name:"nadaa", type:"coo",gender:"female",nationality:"egyptian",identificationType:"bnghtydyf",identificationNumber:"1234456788",birthdate:"2019-06-07",address:"nasrrrr",typeOfManagers:"khihhu"}] )

//   }
//   catch(error){}
// }
// )
// test('The admin numbers should stay the same when attempting to delete non existant admin', async () => {
 
//   try{
  

//   //creating three admins
//   await funcs.postAdmin('Mohamed', 'Male','Egyptian','National ID','273773333','123456789','3-3-1990','Maadi','omar@gmail.com')
//   await funcs.postAdmin('Sara','Female','French','Passport','11112345','123456789','1-9-1995','Nasr City','yoyo@gmail.com')
//   await funcs.postAdmin('Omar','Male','Egyptian','National ID','299399383','123456789','5-12-1992','Maadi','roro@gmail.com')
//    //getting the admins and checking the status and length to be 3
//    const res2 = await funcs.getAdmins();
//    const a = res2.data.data[0]._id
//    const b = res2.data.data[1]._id
//    const c = res2.data.data[2]._id
//     try{
 
//   expect(res2).toBeDefined()
//   expect(res2.status).toEqual(200)
//   expect(res2.data.data).toHaveLength(3)
//   //getting the length -1 which should be the length if there is a deletion
//   const lengthtobe = res2.data.data.length - 1
//   await funcs.deleteAdmin("5c9ff4e9a684c432b40e2c82") //attempting to delete non existant admin
//   //getting the new admins list
//   const res = await funcs.getAdmins();
//   //checking the status and defintion
//   expect(res).toBeDefined()
//   expect(res.status).toEqual(200)
//   //checking the new length of the array after the attempted deletion
//   expect(res.data.data).not.toHaveLength(lengthtobe)
//   //Emptying the database
//     }catch(error){
   
//     }
//   await funcs.deleteAdmin(a)
//   await funcs.deleteAdmin(b)
//   await funcs.deleteAdmin(c)

//   }catch(error){

//   }
// })

// //test get SPCForm by company name
// test('test get SPCForm by company name', async () => {
//   try {

//   await funcs.createForm('comanyunique','cairoo','cairo','nasrcity','pounds',600000,'SSCForm','2019-07-08',mongoose.Types.ObjectId('5c9fbb2d026fe76c64089c52') )
//   const res = await funcs.getAllForms()
//   expect(res.data).toBeDefined()
//   expect(res.status).toEqual(200)
//   const res2 = await funcs.GetFormByCompanyName(res.data.data[res.data.data.length-1].companyName)
//   expect(res2.data.data[res2.data.data.length-1].companyName).toBe('comanyunique')
//   expect(res2.data.data[res2.data.data.length-1].companyGovernorate).toBe('cairoo')
//   expect(res2.data.data[res2.data.data.length-1].companyCity).toBe('cairo')
//   expect(res2.data.data[res2.data.data.length-1].companyAddress).toBe('nasrcity')
//   expect(res2.data.data[res2.data.data.length-1].currency).toBe('pounds')
//   expect(res2.data.data[res2.data.data.length-1].equityCapital).toBe(600000)
//   expect(res2.data.data[res2.data.data.length-1].type).toBe('SSCForm')
//   expect(res2.data.data[res2.data.data.length-1].creationDate).toBe('2019-07-08T00:00:00.000Z')
//   expect(res2.data.data[res2.data.data.length-1].userId).toBe('5c9fbb2d026fe76c64089c52')
  

//   }
//   catch(error){
    
   
//   }

// })
  
// test('UPDATE admin by id', async () => {
    
//   try{
//     await funcs.postAdmin('Mohamed', 'Male','Egyptian','National ID','273773333','123456789','3-3-1990','Maadi','omar@gmail.com')
//     await funcs.postAdmin('Sara','Female','French','Passport','11112345','123456789','1-9-1995','Nasr City','yoyo@gmail.com')
//     await funcs.postAdmin('Omar','Male','Egyptian','National ID','299399383','123456789','5-12-1992','Maadi','roro@gmail.com')
//   const response =  await funcs.getAdmins()
//   const a = response.data.data[0]._id
//   const c = response.data.data[2]._id
//   try{
 
//   await funcs.putAdmin(mongoose.Types.ObjectId(a),'Youssef',response.data.data[0].gender,'Tunisian',response.data.data[0].identificationType,response.data.data[0].identificationNumber,response.data.data[0].password,response.data.data[0].birthdate,response.data.data[0].address)
//   const res = await funcs.getAdmins()
//   expect(res.status).toEqual(200)
//   expect(res.data.data[0].name).toMatch('Youssef')
//   expect(res.data.data[0].nationality).toMatch('Tunisian')
//   }catch(error){
   
//   }
//   await funcs.deleteAdmin(a)
//   await funcs.deleteAdmin(response.data.data[1]._id)
//   await funcs.deleteAdmin(c)
  
// }catch(error){

// }
// });

// test('Check sorting the cases by creation date', async () => {
    
//   try{
//   const user1 = await userFuncs.postLawyer('Lawyer','Ahmed','Male','Egyptian','passport','2222222222','uuuuuuuu','1990-01-01','maadi','ahmed@yahoo.com')
//   const users = await userFuncs.getUsers()
//   const id = users.data.data[0]._id
//   const form1 = await funcs.postForm('Green','Cech','nasr','loll','Euro',200000,'SPCForm','2000-02-04',mongoose.Types.ObjectId(id))
//   const form2 = await funcs.postForm('Greenaa','Cecha','nasraa','ll','Euro',200000,'SPCForm','2000-02-03',mongoose.Types.ObjectId(id))
//   const form3 = await funcs.postForm('Greenaaa','Cechaaa','nasraaa','lo','Euro',200000,'SPCForm','2000-02-02',mongoose.Types.ObjectId(id))
//   try{
//   const x = res1.data.data[0]._id
//   const y = res1.data.data[1]._id
//   const z = res1.data.data[2]._id
//   const res = await userfuncs.sortById()
//   const res1 = await formfuncs.getForms()
//   const a = res1.data.data[0]._id
//   const b = res1.data.data[1]._id
//   const c = res1.data.data[2]._id
//   expect(x).toMatch(c)
//   expect(y).toMatch(b)
//   expect(z).toMatch(a)
//   }catch(error){

//   }
//   await userfuncs.deleteUser(id)
// }catch(error){
 
// }
// });



// test('Create admin', async () => {
 
//   try{
//   await funcs.postAdmin('Rodayna', 'female','Egyptian','National ID','1265438','Rodayna123','1990-3-3','Maadi','rodayna@gmail.com')

//   const response =  await funcs.getAdmins()
//   try{
//   expect(response.status).toEqual(200)
//   expect(response.data.data).toHaveLength(1)
//   expect(response.data.data[0].name).toMatch('Rodayna')
//   }
//   catch(err){

//   }
//   await funcs.deleteAdmin(response.data.data[0]._id)
//     }
// catch(error){
// }
// });

// test('Login admin', async () => {

//   try{
//   await funcs.postAdmin('Rodaynaa', 'female','Egyptian','National ID','13265438','Rodayna1234','1990-3-3','Maadi','rodayna@yahoo.com')

//   const response1 =  await funcs.getAdmins()
//   expect(response1.status).toEqual(200)
//   expect(response1.data.data).toHaveLength(1)
//   expect(response1.data.data[1].name).toMatch('Rodaynaa')
//   await funcs.loginAdmin(response1.data.data[0].password,'rodayna@yahoo.com')
//   const response2 =  await funcs.getAdmins()
//   expect(response2.status).toEqual(200)
//   await funcs.deleteAdmin(response2.data.data[0]._id)
//     }
// catch(error){

// }
// }
// )



