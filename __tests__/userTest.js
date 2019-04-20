/** 
 * @jest-environment node
*/
var mongoose=require('mongoose');
var axios=require('axios');
const funcs = require('../funcs/userFuncs');
const formFuncs = require('../funcs/formFuncs');

let beforeOldUsers;
let beforeOldLength;
let token;
let beforeNewUsers;
let beforeNewLength;
let loggedInUser;
beforeAll(async () => {
  beforeOldUsers = await funcs.getAllUsers();
  beforeOldLength = beforeOldUsers.data.data.length;
  await funcs.createInvestor('Investor','Mona','Female','Egyptian','National ID','770575020173','01-01-1980','Nasr City','hehe@gmail.com','password1234','Person')
  beforeNewUsers = await funcs.getAllUsers();
  beforeNewLength = beforeNewUsers.data.data.length
  loggedInUser = await funcs.loginUser("password1234","hehe@gmail.com")
  token = loggedInUser.data.token
});

afterAll(async () => {
  await funcs.deleteUser(token);
});


//Testing getting a certain User by id
test("Getting a certain User by id", async () => {
  const newUser2 = await funcs.getUserById(token);
  expect(newUser2.data.data._id).toMatch(beforeNewUsers.data.data[beforeNewUsers.data.data.length-  1]._id);
  expect(newUser2.data.data.name).toMatch(beforeNewUsers.data.data[beforeNewUsers.data.data.length-1].name);
  expect(newUser2.data.data.email).toMatch(beforeNewUsers.data.data[beforeNewUsers.data.data.length-1].email);
});
//test adding comments as a lawyer

// test('test adding comments as a lawyer', async () => {
  //   try{
  //       //expect.assertions(3) 
       
  //      var users =  await funcs.GetAllUsers() 
  //      var id =  users.data.data[users.data.data.length-1]._id
  //       await formFuncs.postFormForUser('hhaabb','cairoo','cairo','nasrcity','pounds',600000,'SPCForm','2019-07-08',id )
  //       var res =  await funcs.getAllForms()
  //       const a = res.data.data[res.data.data.length-1].userId
  //       const res2 = await funcs.putFormLawyerComments(["HELLO"],id,res.data.data[res.data.data.length-1]._id)
  //       expect(res.status).toEqual(200)
  //       expect(res.data.data[res.data.data.length-1].lawyerComments[0]).toMatch("HELLO")
  //       await funcs.DeleteUser(res.data.data[res.data.data.length-1]._id)
  // }catch(error){
  //    console.log(error)
  // }
  // });
  // test('test getting no comments on the form when none are added', async () => {
    
  //   try{
  //       await funcs.createInvestor('Investor','Youssr','Female','Egyptian','National ID','123456766890','1998-04-02','Masr el gedida','yoyy@hotmail.com','sjeirys22')
  //   var users =  await funcs.getAllUsers() 
  //   var id =  users.data.data[users.data.data.length-1]._id
  //       await funcs.createForm('hhaabb','cairoo','cairo','nasrcity','pounds',600000,'SPCForm','2019-07-08',id )
  //       var res =  await funcs.getAllForms()
  //       const a = res.data.data[res.data.data.length-1].userId
  //       expect(res.status).toEqual(200)
  //       expect(res.data.data[res.data.data.length-1].lawyerComments.length).toBe(0)
  //       await funcs.DeleteUser(res.data.data[res.data.data.length-1]._id)
  //       //expect(res.data.data[res.data.data.length-1].lawyerComments).toEqual(['nada'])
  // }catch(error){
     
  // }

 // })


  //test adding comments as a reviewer
  // test('test adding comments as a reviewer', async () => {
    
  //   try{
  //     await funcs.createInvestor('Investor','Youssr','Female','Egyptian','National ID','123456766890','1998-04-02','Masr el gedida','yoyy@hotmail.com','sjeirys22')
  //   var users =  await funcs.getAllUsers() 
  //   var id =  users.data.data[users.data.data.length-1]._id
  //       await funcs.createForm('rwaaabarr','cairoo','cairo','nasrcity','pounds',600000,'SPCForm','2019-07-08',id )
  //       var res =  await funcs.getAllForms()
  //       const a = res.data.data[res.data.data.length-1].userId
  //       const res2 = await funcs.putFormReviewerComments(['HELLmO'],id,res.data.data[res.data.data.length-1]._id)
  //       //console.log(res2.data.data)
  //       expect(res.status).toEqual(200)
  //       await funcs.DeleteUser(res.data.data[res.data.data.length-1]._id)
  //       //expect(res.data.data[res.data.data.length-1].lawyerComments).toEqual(['nada'])
  // }catch(error){
     
  // }
  // });


   //Getting approved companies
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
//     await funcs.DeleteUser(res.data.data[res.data.data.length-1]._id)
//   }
//   catch(err){
//   }
// })

//Getting in progress cases
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
//     await funcs.DeleteUser(res.data.data[res.data.data.length-1]._id)
//  }
//  catch(err){
  
//  }
//   })


test('Check if the correct user is deleted and removed from the database',async()=>{
  let loggedUser = beforeNewUsers.data.data[beforeNewUsers.data.data.length-1]
  let deleted = await funcs.deleteUser(token);
  expect(deleted).toBeDefined()
  expect(deleted.status).toEqual(200)
  expect(deleted.data.data._id).toMatch(loggedUser._id);
  expect(deleted.data.data.name).toMatch(loggedUser.name);
  expect(deleted.data.data.email).toMatch(loggedUser.email);
  let newlist = await funcs.getAllUsers();
  expect(newlist.data.data).toHaveLength(beforeNewUsers.data.data.length-1)

  await funcs.createInvestor('Investor','Mona','Female','Egyptian','National ID','770575020173','01-01-1980','Nasr City','hehe@gmail.com','password1234','Person')
  beforeNewUsers = await funcs.getAllUsers();
  beforeNewLength = beforeNewUsers.data.data.length
  loggedInUser = await funcs.loginUser("password1234","hehe@gmail.com")
  token = loggedInUser.data.token

})
//Testing deleting an admin by a wrong id
test("Deleting an user with a wrong id", async () => {
  const wrongdelete = await funcs.deleteUser("Wrong token");
  const newUsers = await funcs.getAllUsers();
  expect(newUsers.status).toEqual(200);
  expect(wrongdelete).not.toEqual(200);
  expect(newUsers.data.data.length).toBe(beforeNewLength);
});







test('Test getting the financial balance of a certain Investor ', async () => {
  let loggedUser = beforeNewUsers.data.data[beforeNewUsers.data.data.length-1]
  //checking the financial balance is defined although not entered and value is zero(default)
  expect(loggedUser.financialBalance).toBeDefined
  expect(loggedUser.financialBalance).toEqual(0)
})




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





