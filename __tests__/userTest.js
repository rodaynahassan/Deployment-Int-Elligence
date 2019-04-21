/**
 * @jest-environment node
 */
var mongoose = require("mongoose");
var axios = require("axios");
const funcs = require("../funcs/userFuncs");

test("1+1 is 2", async () => {
  expect(1 + 1).toBe(2);
});

// //test adding comments as a lawyer
// test('test adding comments as a lawyer', async () => {

//     try{
//         //expect.assertions(3)
//         await funcs.createInvestor('Investor','Youssr','Female','Egyptian','National ID','123456766890','1998-04-02','Masr el gedida','yoyy@hotmail.com','sjeirys22')
//     var users =  await funcs.getAllUsers()
//     var id =  users.data.data[users.data.data.length-1]._id
//         await funcs.createForm('hhaabb','cairoo','cairo','nasrcity','pounds',600000,'SPCForm','2019-07-08',id )
//         var res =  await funcs.getAllForms()
//         const a = res.data.data[res.data.data.length-1].userId
//         const res2 = await funcs.putFormLawyerComments(["HELLO"],id,res.data.data[res.data.data.length-1]._id)
//         expect(res.status).toEqual(200)
//         await funcs.deleteUser(res.data.data[res.data.data.length-1]._id)
//         //expect(res.data.data[res.data.data.length-1].lawyerComments).toEqual(['nada'])
//   }catch(error){

//   }
//   });

//   //test adding comments as a reviewer
//   test('test adding comments as a reviewer', async () => {

//     try{
//       await funcs.createInvestor('Investor','Youssr','Female','Egyptian','National ID','123456766890','1998-04-02','Masr el gedida','yoyy@hotmail.com','sjeirys22')
//     var users =  await funcs.getAllUsers()
//     var id =  users.data.data[users.data.data.length-1]._id
//         await funcs.createForm('rwaaabarr','cairoo','cairo','nasrcity','pounds',600000,'SPCForm','2019-07-08',id )
//         var res =  await funcs.getAllForms()
//         const a = res.data.data[res.data.data.length-1].userId
//         const res2 = await funcs.putFormReviewerComments(['HELLmO'],id,res.data.data[res.data.data.length-1]._id)
//         //console.log(res2.data.data)
//         expect(res.status).toEqual(200)
//         await funcs.deleteUser(res.data.data[res.data.data.length-1]._id)
//         //expect(res.data.data[res.data.data.length-1].lawyerComments).toEqual(['nada'])
//   }catch(error){

//   }
//   });

    // test('Login Lawyer', async () => {

    //   try{

    //   const response1 =  await funcs.geAlltUsers()
    //   const length = response1.data.data.length
    //   await funcs.createLawyerOrReviewer('Lawyer','Rodaynaa', 'female','Egyptian','National ID','13265438','3-3-1990','Maadi','rodayna@yahoo.com','Rodayna1234','12345678912')
    //   expect(response1.status).toEqual(200)
    //   expect(response1.data.data).toHaveLength(length+1)
    //   expect(response1.data.data[response1.data.data.length-1].name).toMatch('Rodaynaa')
    //   await funcs.loginLawyer(response1.data.data[response1.data.data.length-1].password,'rodayna@yahoo.com')
    //   // const response2 =  await funcs.getUsers()
    //   // expect(response2.status).toEqual(200)
    //   await funcs.deleteUser(response1.data.data[response1.data.data.length-1]._id)
    //   // await funcs.deleteUser(response2.data.data[response2.data.data.length-1]._id)

    //     }
    //   catch(error){

    //   }
    //   } )

//   test('Login Investor', async () => {

//     try{

//     const response1 =  await funcs.getAllUsers()
//     const length = response1.data.data.length
//     await funcs.createInvestor('Investor','Rodaynaa', 'female','Egyptian','National ID','13265438','3-3-1990','Maadi','rodayna@yahoo.com','Rodayna1234')

//     expect(response1.status).toEqual(200)
//     expect(response1.data.data).toHaveLength(length+1)
//     expect(response1.data.data[response1.data.data.length-1].name).toMatch('Rodaynaa')
//     await funcs.loginInvestor(response1.data.data[response1.data.data.length-1].password,'rodayna@yahoo.com')
//     //   const response2 =  await funcs.getUsers()
//     // expect(response2.status).toEqual(200)
//     await funcs.deleteUser(response1.data.data[response1.data.data.length-1]._id)
//     //  await funcs.deleteUser(response2.data.data[response2.data.data.length-1]._id)

//       }
//     catch(error){

//     }
//     });

//   test('Login Reviewer', async () => {

//     try{

//     const response1 =  await funcs.getAllUsers()
//     const length = response1.data.data.length
//     await funcs.createLawyerOrReviewer('Reviewer','Rodaynaa', 'female','Egyptian','National ID','13265438','3-3-1990','Maadi','rodayna@yahoo.com','Rodayna1234','123456789123')

//     expect(response1.status).toEqual(200)
//     expect(response1.data.data).toHaveLength(length+1)
//     expect(response1.data.data[response1.data.data.length-1].name).toMatch('Rodaynaa')
//     await funcs.loginReviewer(response1.data.data[response1.data.data.length-1].password,'rodayna@yahoo.com')
//     //  const response2 =  await funcs.getUsers()
//     // expect(response2.status).toEqual(200)
//     await funcs.deleteUser(response1.data.data[response1.data.data.length-1]._id)
//     // await funcs.deleteUser(response2.data.data[response2.data.data.length-1]._id)

//       }
//     catch(error){

//     }
//     });

//    //Getting approved companies
//  test('Get approved forms (Company) of Investor', async () => {
//   try{
//     await funcs.createInvestor('Investor','Youssr','Female','Egyptian','National ID','123456766890','1998-04-02','Masr el gedida','yoyy@hotmail.com','sjeirys22')
//     var users =  await funcs.getAllUsers()
//     var id =  users.data.data[users.data.data.length-1]._id
//     await funcs.postFormForUser('Cairo', 'Nasr City','Moez Eldawla Street','Last Company','Dollar',200000,'SPCForm','Approved','1998-09-08',id)
//     const res = await funcs.getAllForms()
//     expect(res.data).toBeDefined()
//     expect(res.status).toEqual(200)
//     const res2 =  await funcs.getCompanyOfAnInvestor(res.data.data[res.data.data.length-1].userId)
//     expect(res2.data.data[res2.data.data.length-1].status).toMatch('Approved')
//     await funcs.deleteUser(res.data.data[res.data.data.length-1]._id)
//   }
//   catch(err){
//   }
// })

// //Getting in progress cases
// test('Get in progress forms (Cases)', async () => {
//  try{
//     await funcs.createInvestor('Investor','Ahmed','Male','Egyptian','Passport','0987654321111','1997-12-15','Nasr City','tott@gmail.com','hahahahaha')
//     var users = await funcs.getAllUsers()
//     var id = users.data.data[users.data.data.length-1]._id
//     await funcs.postFormForUser('Cairo', 'Nasr City','Moez Eldawla Street','Final Company','Dollar',200000,'SPCForm','In progress','1998-09-08',id)
//     const res = await funcs.getAllForms()
//     expect(res.data).toBeDefined()
//     expect(res.status).toEqual(200)
//     const res2 =  await funcs.getInProgressCase(res.data.data[res.data.data.length-1].userId)
//     expect(res2.data.data[res2.data.data.length-1].status).toMatch('In progress')
//     await funcs.deleteUser(res.data.data[res.data.data.length-1]._id)
//  }
//  catch(err){

//  }
//   })

// test('Test getting all users ', async () => {
// try {

// const r = await funcs.getAllUsers()
// const len = r.data.data.length

// // creating a lawyer and a reviwer for testing

// await funcs.CreateReviewerOrLawyer('Lawyer','Ali Ibrahim22','male','Egyptian','national id','A136700190453','1998-12-1','Maadi','alihh033@yahoo.com','123456788')

// const res = await funcs.getAllUsers()
// //console.log(res.data)
// expect(res.data.data.length).toBe(len + 1)
// expect(res.data).toBeDefined()
// expect(res.status).toEqual(200)

// await funcs.deleteUser(res.data.data[res.data.data.length-1]._id)

// }

// catch(error){

// }
// }
// )

test('check if a user is deleted from database',async()=>{
  const user1=await funcs.createLawyerOrReviewer('Lawyer','Nadinez','Female','Egyptian','National ID','212893943672','1998-5-5','Maadi','NadineOOOmar@gmail.com','13632366777','123445')
  console.log(user1)
  // const user2=await funcs.createLawyerOrReviewer('Reviewer','Mohanad','Male','Egyptian','National ID','24411113672','1998-5-5','Maadi','mohanad.ahmed@gmail.com','116626727')
  // const user3=await funcs.createLawyerOrReviewer('Lawyer','misho','Male','Egyptian','National ID','2441fvv26672','1998-4-2','Masr el gedida','alxi.ahmed@gmail.com','66v6626727')
//console.log(user1.data.data)
const OldUsers=await funcs.GetAllUsers()
console.log(OldUsers.data.data[OldUsers.data.data.length-1])
const oldLength=OldUsers.data.data.length
expect(OldUsers).toBeDefined()
expect(OldUsers.status).toEqual(200)
expect(OldUsers.data.data).toHaveLength(oldLength)
await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)    //delete an existing user
const newUsers = await funcs.GetAllUsers()
expect(newUsers).toBeDefined()
expect(newUsers.status).toEqual(200)
expect(newUsers.data.data.length).toBe(oldLength - 1);               //check if length will decrease by 1

//  await funcs.deleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
//  await funcs.deleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id) 
})

// //Testing get by ID
// test('Test getting a certain user ', async () => {
// //creating a lawyer for testing
// await funcs.createLawyerOrReviewer('Lawyer','Nadoo el seba3y','male','Egyptian','national id','01688340078','1998-12-10T00:00:00.000Z','Maadi','Al@yahoo.com','1288456788')
// const res = await funcs.getAllUsers()   // getting all users
// expect(res.data).toBeDefined()
// expect(res.status).toEqual(200)
// const res2 = await funcs.getUserById(res.data.data[res.data.data.length-1]._id)  // getting a certain user
// // checking the requirements of the created user:-
// expect(res2.data.data.userType).toBe('Lawyer')
// expect(res2.data.data.name).toBe('Nadoo el seba3y')
// expect(res2.data.data.address).toBe('Maadi')
// expect(res2.data.data.email).toBe('Al@yahoo.com')
// await funcs.deleteUser(res.data.data[res.data.data.length-1]._id)
//  })

// test('check if delete a user that is not in the database will be deleted or not',async()=>{

// try{

//    //expect.assertions(6)
//   // const user1=await funcs.createLawyerOrReviewer('Lawyer','hesham','Male','Egyptian','National ID','245470443672','1998-5-1','Maadi','hesham.gp@7gmail.com','123462366777')
//   //  const user2=await funcs.createLawyerOrReviewer('Reviewer','Mohanad','Male','Egyptian','National ID','24411113672','1998-5-5','Maadi','mohanad.ahmed@gmail.com','116626727')
//    // const user3=await funcs.createLawyerOrReviewer('Lawyer','misho','Male','Egyptian','National ID','2441fvv26672','1998-4-2','Masr el gedida','alxi.ahmed@gmail.com','66v6626727')

// const OldUsers=await funcs.getAllUsers()
// const oldLength=OldUsers.data.data.length

// expect(OldUsers).toBeDefined()
// expect(OldUsers.status).toEqual(200)
// expect(OldUsers.data.data).toHaveLength(oldLength)

// await funcs.deleteUser(mongoose.Types.ObjectId('5c9fb264da7a330017864111'))         //try to delete non existing user

// const newUsers = await funcs.getAllUsers()

// expect(newUsers).toBeDefined()
// expect(newUsers.status).toEqual(200)
// expect(newUsers.data.data).not.toHaveLength(oldLength-1)       //check if length will change

// //  await funcs.deleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
// //  await funcs.deleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)

// }
// catch(error){

// }

// })

// test('Test getting the financial balance of a certain Investor ', async () => {
// try {

// //creating an Investor for testing
// await funcs.CreateInvestor('Investor','sebaaa3y','male','Egyptian','national id','A6123456777','1998-12-10T00:00:00.000Z','Maadi','ali@yahoo.com','123456789','202')

// const res = await funcs.getAllUsers()  // getting all users
// expect(res.data).toBeDefined()
// expect(res.status).toEqual(200)

// const res2 = await funcs.getUserById(res.data.data[res.data.data.length-1]._id) // getting a certain user

// expect(res2.data.data.financialBalance).toEqual(202)   // checking his financial balance

// }

// catch(error){

// }

// })

// test('check if Investor is created',async()=>{

// try{

// // expect.assertions(5)
// var OldUsers=await funcs.getAllUsers()

// var oldLength=OldUsers.data.data.length
// expect(OldUsers).toBeDefined()
// expect(OldUsers.status).toEqual(200)

// await funcs.createInvestor('Investor','misho','male','Egyptian','National ID','24rrcf4wgwchrddn2','1998-04-02','Masr el gedida','besdddddrr@gmail.com','oppdnnwd44c0cle')

// var newUsers = await funcs.getAllUsers()

// expect(newUsers).toBeDefined()
// expect(newUsers.status).toEqual(200)

// expect(newUsers.data.data).toHaveLength(oldLength+1)

// await funcs.deleteUser(newUsers.data.data[newUsers.data.data.length-1]._id)
// //await funcs.deleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)

// }
// catch(error){

// }

// })

// test('Check the update of a certain user', async () => {

// try{

// const res =  await funcs.getAllUsers()       // getting all users
// expect(res).toBeDefined()
// expect(res.status).toEqual(200)
// var len = res.data.data[res.data.data.length-1]
// var lenid = res.data.data[res.data.data.length-1]._id   // get the id of a certain user
// expect(res.data.data.length).toEqual(42)   // check the length

// await funcs.UpdateUser(lenid)    // update the user

// var x = await funcs.getUserById(lenid)

// expect(x.data.data.name).toBe('ALI EL SEBAIE2')   // checking
// expect(x.data.data.nationality).toBe('Masry')    // checking
// expect(res.data.data.length).toEqual(42)   // check the length again to make sure that it is not changed after updating

// }catch(error){

// }
// });

// test('Check the update of a form in a certain user', async () => {

// try{

// const res =  await funcs.getAllUsers()    // getting all users
// const res2 = await funcs.getAllForms()    // getting all forms
// expect(res).toBeDefined()
// expect(res.status).toEqual(200)
// var lenid = res.data.data[res.data.data.length-1]._id     // get the id of a certain user
// var formid = res2.data.data[res2.data.data.length-1]._id  // get the id of a certain form

// await funcs.UpdateFormInUser(lenid,formid)    // update the form of the user

// var x = await funcs.getFormById(formid)

// expect(x.data.data.companyName).toBe('sebaie200 company')   // checking
// expect(x.data.data.companyNameInEnglish).toBe('Irish comp')    // checking

// }catch(error){

// }
// });

// test('Check the get of a certain form', async () => {   // get a certain form

// try{

// const res = await funcs.getAllForms()   // getting all Forms
//   expect(res.data).toBeDefined()
//   expect(res.status).toEqual(200)

//   const res2 = await funcs.getFormById(res.data.data[res.data.data.length-1]._id)  // getting a certain form

// expect(res2.data.data.companyName).toBe('rwaaaarr')   // checking
// expect(res2.data.data.type).toBe('SPCForm')    // checking

// }catch(error){

// }
// });

// test('check if Lawyer or Reviewer is created',async()=>{

// try{

// //expect.assertions(5)
// var OldUsers=await funcs.getAllUsers()

// var oldLength=OldUsers.data.data.length
// expect(OldUsers).toBeDefined()
// expect(OldUsers.status).toEqual(200)

// await funcs.createLawyerOrReviewer('Lawyer','momo','male','Egyptian','National ID','2444ff4wgwchrddn2','1998-04-02','Masr el gedida','w4dffuyyyyy@gmail.com','oppdwwfn44cccle','35666266662')

// var newUsers = await funcs.getAllUsers()

// expect(newUsers).toBeDefined()
// expect(newUsers.status).toEqual(200)

// expect(newUsers.data.data).toHaveLength(oldLength+1)

// await funcs.deleteUser(newUsers.data.data[newUsers.data.data.length-1]._id)

// }
// catch(error){

// }
//   });
