
/**
 * @jest-environment node
*/
var mongoose=require('mongoose');
var axios=require('axios');
const funcs = require('../funcs/userFuncs');

let beforeOldUsers;
let beforeOldLength;
let token;
let token2;
let token3;
let token4;
let beforeNewUsers;
let beforeNewLength;
let loggedInUser;
let beforeOldForms;
let beforeOldFormLength;
let beforeNewForms;
let beforeNewFormLength;
let loggedInAdmin;
let loggedInLawyer;
let loggedInReviewer;
let form1;
let form2;
let form3;
//let beforeAdmins;
beforeAll(async () => {
  await funcs.postAdmin("Mariam","Female","Egyptian","National ID","65630746622","password1234","1990-3-3","Maadi","marii@gmail.com","Admin");
  loggedInAdmin = await funcs.loginAdmin('password1234','marii@gmail.com')
  //console.log(loggedInAdmin)
  token2 = loggedInAdmin.data.data
  await funcs.createLawyer(token2,'Lawyer','Ahmed','Male','Egyptian','National ID','570575620174','01-01-1980','Nasr City','ahmed999@gmail.com','12345678')
  loggedInLawyer = await funcs.loginUser('12345678','ahmed999@gmail.com')
  token3 = loggedInLawyer.data.token
  await funcs.createReviewer(token2,'Reviewer','Alaa','Male','Egyptian','National ID','570575644371','01-01-1980','Nasr City','alaa999@gmail.com','12345678')
  loggedInReviewer = await funcs.loginUser('12345678','alaa999@gmail.com')
  //console.log(loggedInReviewer)
  token4 = loggedInReviewer.data.token
  beforeOldUsers = await funcs.getAllUsers();
  beforeOldLength = beforeOldUsers.data.data.length;
  //console.log(beforeOldLength)
  await funcs.createInvestor('Investor','Mona','Female','Egyptian','National ID','990575020173','01-01-1980','Nasr City','monzzzz@gmail.com','password1234','Person')
  beforeNewUsers = await funcs.getAllUsers();
  beforeNewLength = beforeNewUsers.data.data.length
  //console.log(beforeNewLength)
  loggedInUser = await funcs.loginUser("password1234","monzzzz@gmail.com")
  token = loggedInUser.data.token
  beforeOldForms = await funcs.getAllForms()
  beforeOldFormLength = beforeOldForms.data.data.length
  // form1 = await funcs.postFormForUser(token,'SPCForm','الشركة00','The Company00','Cairo','New Cairo','Fifth Settlement','02752277577','a-2417457642','Dollars','Egyptian',100000)
  // console.log(form1)
  // form2 = await funcs.postFormForUser(token,'SPCForm','الشركة01','The Company01','Cairo','New Cairo','Fifth Settlement','015722772081','u-417757743','Dollars','Egyptian',100000)
  // form3 = await funcs.postFormForUser(token,'SPCForm','الشركة02','The Company02','Cairo','New Cairo','Fifth Settlement','011472777667','k-317772942','Dollars','Egyptian',100000)
  // beforeNewForms = await funcs.getAllForms()
  // beforeNewFormLength = beforeNewForms.data.data.length
});

afterAll(async () => {
  await funcs.deleteUser(token);
  await funcs.deleteUser(token3);
  await funcs.deleteUser(token4);
  // await funcs.deleteForm(form1.data.data._id)
  // await funcs.deleteForm(form2.data.data._id)
  // await funcs.deleteForm(form3.data.data._id)
});

//Testing Creating a user
test.only("Creating a user", async () => {
  expect(beforeNewUsers.data.data).toHaveLength(beforeOldUsers.data.data.length+1);
  expect(beforeNewUsers.data.data[beforeNewUsers.data.data.length - 1].name).toMatch(
    "Mona"
  );
  expect(beforeNewUsers.data.data[beforeNewUsers.data.data.length - 1].email).toMatch(
    "monzzzz@gmail.com"
  );
});

//Testing creating a new user with identification number less than 8 and expecting an error
test("Creating a user with wrong identification number", async () => {
  const postingUser = await funcs.createInvestor('Investor','Hala','Female','Egyptian','National ID','770','01-01-1980','Nasr City','hala@gmail.com','password1234','Person')
  const Users = await funcs.getAllUsers()
  expect(postingUser.error.response.data.error).toEqual('"identificationNumber" length must be at least 8 characters long');
  expect(Users.data.data.length).toBe(beforeNewLength);
});

//Testing creating a new user with a wrong email syntax
test("Creating a user with wrong email", async () => {
  const postingUser = await funcs.createInvestor('Investor','Hala','Female','Egyptian','National ID','728399402710','01-01-1980','Nasr City','hala','password1234','Person')
  const Users = await funcs.getAllUsers()
  expect(postingUser.error.response.data.error).toEqual('"email" must be a valid email');
  expect(Users.data.data.length).toBe(beforeNewLength);
});

//Testing creating a new user without a name which is required
test("Creating a user without a name", async () => {
  const postingUser = await funcs.createInvestor('Investor','','Female','Egyptian','National ID','728399402710','01-01-1980','Nasr City','hala@gmail.com','password1234','Person')
  const Users = await funcs.getAllUsers()
  expect(postingUser.error.response.data.error).toEqual('"name" is not allowed to be empty');
  expect(Users.data.data.length).toBe(beforeNewLength);
});

//Testing Getting all users
test("Test getting all users ", async () => {
  expect(beforeNewLength).toBe(beforeOldLength + 1);
});

//Testing updating an user by id
test("Updating a user by id", async () => {
  const specificUser = await funcs.getUserById(token);
  await funcs.updateUser(
    token,
    "Hala",
    specificUser.data.data.gender,
    specificUser.data.data.nationality,
    specificUser.data.data.identificationType,
    specificUser.data.data.identificationNumber,
    specificUser.data.data.birthdate,
    specificUser.data.data.address,
    specificUser.data.data.email,
    "pass6637294",
    specificUser.data.data.investorType
  );
  const updatedUser = await funcs.getUserById(token);
  expect(updatedUser.data.data.name).toMatch("Hala");
});

//Testing updating a user by id with a password less than 8
test("Updating a user by id with wrong password", async () => {
  const specificUser = await funcs.getUserById(token);
  const updatedUser = await funcs.updateUser(
    token,
    specificUser.data.data.name,
    specificUser.data.data.gender,
    specificUser.data.data.nationality,
    specificUser.data.data.identificationType,
    specificUser.data.data.identificationNumber,
    specificUser.data.data.birthdate,
    specificUser.data.data.address,
    specificUser.data.data.email,
    "pa",
    specificUser.data.data.investorType
  );
  expect(updatedUser.error.response.data.error).toEqual('"password" length must be at least 8 characters long');
});

//Testing login User
test("Login User", async () => {
  expect(loggedInUser.config.data).toMatch('"password":"password1234","email":"monzzzz@gmail.com"');
});

//Testing login with a wrong password
test("Login admin with wrong password", async () => {
  const loginUser = await funcs.loginUser("Rodayna12", "monzzzz@gmail.com");
  expect(loginUser.error.response.data.password).toMatch('Wrong password')
});

//Testing login with a wrong email
test("Login admin with wrong email", async () => {
  const loginUser = await funcs.loginUser("password1234", "haha@yahoo.com")
  expect(loginUser.error.response.data.email).toMatch('This email is not registered yet')
});

//Testing all forms sorted by id
test("All forms Sorted by ID", async () =>{
  const forms = await funcs.sortFormsByID(token3)
  expect(forms.data.data[forms.data.data.length-3]._id).toMatch(form1.data.data._id)
  expect(forms.data.data[forms.data.data.length-2]._id).toMatch(form2.data.data._id)
  expect(forms.data.data[forms.data.data.length-1]._id).toMatch(form3.data.data._id)
   
})

//Testing all forms sorted by id
test("All forms Sorted by Creation Date", async () =>{
  const forms = await funcs.sortFormsByDate(token3)
  expect(forms.data.data[forms.data.data.length-3]._id).toMatch(form1.data.data._id)
  expect(forms.data.data[forms.data.data.length-2]._id).toMatch(form2.data.data._id)
  expect(forms.data.data[forms.data.data.length-1]._id).toMatch(form3.data.data._id)
   
})

//Testing getting in progress cases (anything rather than 'Approved') as an investor
test('In progress cases of an investor', async () =>{
  const forms = await funcs.getInvestorInProgressCases(token)
  expect(forms.data.data[forms.data.data.length-1].status).not.toBe('Approved')
})

//Testing getting in 
// //test adding comments as a lawyer
// test("test adding comments as a lawyer", async () => {
//   try {
//     //expect.assertions(3)
//     await funcs.createInvestor(
//       "Investor",
//       "Youssr",
//       "Female",
//       "Egyptian",
//       "National ID",
//       "123456766890",
//       "1998-04-02",
//       "Masr el gedida",
//       "yoyy@hotmail.com",
//       "sjeirys22"
//     );
//     var users = await funcs.getAllUsers();
//     var id = users.data.data[users.data.data.length - 1]._id;
//     await funcs.createForm(
//       "hhaabb",
//       "cairoo",
//       "cairo",
//       "nasrcity",
//       "pounds",
//       600000,
//       "SPCForm",
//       "2019-07-08",
//       id
//     );
//     var res = await funcs.getAllForms();
//     const a = res.data.data[res.data.data.length - 1].userId;
//     const res2 = await funcs.putFormLawyerComments(
//       ["HELLO"],
//       id,
//       res.data.data[res.data.data.length - 1]._id
//     );
//     expect(res.status).toEqual(200);
//     await funcs.deleteUser(res.data.data[res.data.data.length - 1]._id);
//     //expect(res.data.data[res.data.data.length-1].lawyerComments).toEqual(['nada'])
//   } catch (error) {}
// });

// //test adding comments as a reviewer
// test("test adding comments as a reviewer", async () => {
//   try {
//     await funcs.createInvestor(
//       "Investor",
//       "Youssr",
//       "Female",
//       "Egyptian",
//       "National ID",
//       "123456766890",
//       "1998-04-02",
//       "Masr el gedida",
//       "yoyy@hotmail.com",
//       "sjeirys22"
//     );
//     var users = await funcs.getAllUsers();
//     var id = users.data.data[users.data.data.length - 1]._id;
//     await funcs.createForm(
//       "rwaaabarr",
//       "cairoo",
//       "cairo",
//       "nasrcity",
//       "pounds",
//       600000,
//       "SPCForm",
//       "2019-07-08",
//       id
//     );
//     var res = await funcs.getAllForms();
//     const a = res.data.data[res.data.data.length - 1].userId;
//     const res2 = await funcs.putFormReviewerComments(
//       ["HELLmO"],
//       id,
//       res.data.data[res.data.data.length - 1]._id
//     );
//     //console.log(res2.data.data)
//     expect(res.status).toEqual(200);
//     await funcs.deleteUser(res.data.data[res.data.data.length - 1]._id);
//     //expect(res.data.data[res.data.data.length-1].lawyerComments).toEqual(['nada'])
//   } catch (error) {}
// });

// //Getting approved companies
// test("Get approved forms (Company) of Investor", async () => {
//   try {
//     await funcs.createInvestor(
//       "Investor",
//       "Youssr",
//       "Female",
//       "Egyptian",
//       "National ID",
//       "123456766890",
//       "1998-04-02",
//       "Masr el gedida",
//       "yoyy@hotmail.com",
//       "sjeirys22"
//     );
//     var users = await funcs.getAllUsers();
//     var id = users.data.data[users.data.data.length - 1]._id;
//     await funcs.postFormForUser(
//       "Cairo",
//       "Nasr City",
//       "Moez Eldawla Street",
//       "Last Company",
//       "Dollar",
//       200000,
//       "SPCForm",
//       "Approved",
//       "1998-09-08",
//       id
//     );
//     const res = await funcs.getAllForms();
//     expect(res.data).toBeDefined();
//     expect(res.status).toEqual(200);
//     const res2 = await funcs.getCompanyOfAnInvestor(
//       res.data.data[res.data.data.length - 1].userId
//     );
//     expect(res2.data.data[res2.data.data.length - 1].status).toMatch(
//       "Approved"
//     );
//     await funcs.deleteUser(res.data.data[res.data.data.length - 1]._id);
//   } catch (err) {}
// });

// //Getting in progress cases
// test("Get in progress forms (Cases)", async () => {
//   try {
//     await funcs.createInvestor(
//       "Investor",
//       "Ahmed",
//       "Male",
//       "Egyptian",
//       "Passport",
//       "0987654321111",
//       "1997-12-15",
//       "Nasr City",
//       "tott@gmail.com",
//       "hahahahaha"
//     );
//     var users = await funcs.getAllUsers();
//     var id = users.data.data[users.data.data.length - 1]._id;
//     await funcs.postFormForUser(
//       "Cairo",
//       "Nasr City",
//       "Moez Eldawla Street",
//       "Final Company",
//       "Dollar",
//       200000,
//       "SPCForm",
//       "In progress",
//       "1998-09-08",
//       id
//     );
//     const res = await funcs.getAllForms();
//     expect(res.data).toBeDefined();
//     expect(res.status).toEqual(200);
//     const res2 = await funcs.getInProgressCase(
//       res.data.data[res.data.data.length - 1].userId
//     );
//     expect(res2.data.data[res2.data.data.length - 1].status).toMatch(
//       "In progress"
//     );
//     await funcs.deleteUser(res.data.data[res.data.data.length - 1]._id);
//   } catch (err) {}
// });

// test("check if a user is deleted from database", async () => {
//   try {
//     //expect.assertions(6)
//     const user1 = await funcs.createLawyerOrReviewer(
//       "Lawyer",
//       "ammar",
//       "Male",
//       "Egyptian",
//       "National ID",
//       "245330443672",
//       "1998-5-1",
//       "Maadi",
//       "ammar.gp@7gmail.com",
//       "133462366777"
//     );
//     // const user2=await funcs.createLawyerOrReviewer('Reviewer','Mohanad','Male','Egyptian','National ID','24411113672','1998-5-5','Maadi','mohanad.ahmed@gmail.com','116626727')
//     // const user3=await funcs.createLawyerOrReviewer('Lawyer','misho','Male','Egyptian','National ID','2441fvv26672','1998-4-2','Masr el gedida','alxi.ahmed@gmail.com','66v6626727')

//     const OldUsers = await funcs.getAllUsers();
//     const oldLength = OldUsers.data.data.length;

//     expect(OldUsers).toBeDefined();
//     expect(OldUsers.status).toEqual(200);
//     expect(OldUsers.data.data).toHaveLength(oldLength);

//     await funcs.deleteUser(
//       OldUsers.data.data[OldUsers.data.data.length - 1]._id
//     ); //delete an existing user

//     const newUsers = await funcs.getAllUsers();
//     const newLength = oldLength - 1;

//     expect(newUsers).toBeDefined();
//     expect(newUsers.status).toEqual(200);
//     expect(newUsers.data.data).toHaveLength(newLength); //check if length will be less by 1

//     //  await funcs.deleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
//     //  await funcs.deleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
//   } catch (error) {}
// });


// test("check if delete a user that is not in the database will be deleted or not", async () => {
//   try {
//     //expect.assertions(6)
//     // const user1=await funcs.createLawyerOrReviewer('Lawyer','hesham','Male','Egyptian','National ID','245470443672','1998-5-1','Maadi','hesham.gp@7gmail.com','123462366777')
//     //  const user2=await funcs.createLawyerOrReviewer('Reviewer','Mohanad','Male','Egyptian','National ID','24411113672','1998-5-5','Maadi','mohanad.ahmed@gmail.com','116626727')
//     // const user3=await funcs.createLawyerOrReviewer('Lawyer','misho','Male','Egyptian','National ID','2441fvv26672','1998-4-2','Masr el gedida','alxi.ahmed@gmail.com','66v6626727')

//     const OldUsers = await funcs.getAllUsers();
//     const oldLength = OldUsers.data.data.length;

//     expect(OldUsers).toBeDefined();
//     expect(OldUsers.status).toEqual(200);
//     expect(OldUsers.data.data).toHaveLength(oldLength);

//     await funcs.deleteUser(mongoose.Types.ObjectId("5c9fb264da7a330017864111")); //try to delete non existing user

//     const newUsers = await funcs.getAllUsers();

//     expect(newUsers).toBeDefined();
//     expect(newUsers.status).toEqual(200);
//     expect(newUsers.data.data).not.toHaveLength(oldLength - 1); //check if length will change

//     //  await funcs.deleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
//     //  await funcs.deleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
//   } catch (error) {}
// });

// test("Test getting the financial balance of a certain Investor ", async () => {
//   try {
//     //creating an Investor for testing
//     await funcs.CreateInvestor(
//       "Investor",
//       "sebaaa3y",
//       "male",
//       "Egyptian",
//       "national id",
//       "A6123456777",
//       "1998-12-10T00:00:00.000Z",
//       "Maadi",
//       "ali@yahoo.com",
//       "123456789",
//       "202"
//     );

//     const res = await funcs.getAllUsers(); // getting all users
//     expect(res.data).toBeDefined();
//     expect(res.status).toEqual(200);

//     const res2 = await funcs.getUserById(
//       res.data.data[res.data.data.length - 1]._id
//     ); // getting a certain user

//     expect(res2.data.data.financialBalance).toEqual(202); // checking his financial balance
//   } catch (error) {}
// });

// test("Check the update of a form in a certain user", async () => {
//   try {
//     const res = await funcs.getAllUsers(); // getting all users
//     const res2 = await funcs.getAllForms(); // getting all forms
//     expect(res).toBeDefined();
//     expect(res.status).toEqual(200);
//     var lenid = res.data.data[res.data.data.length - 1]._id; // get the id of a certain user
//     var formid = res2.data.data[res2.data.data.length - 1]._id; // get the id of a certain form

//     await funcs.UpdateFormInUser(lenid, formid); // update the form of the user

//     var x = await funcs.getFormById(formid);

//     expect(x.data.data.companyName).toBe("sebaie200 company"); // checking
//     expect(x.data.data.companyNameInEnglish).toBe("Irish comp"); // checking
//   } catch (error) {}
// });

// test("Check the get of a certain form", async () => {
//   // get a certain form

//   try {
//     const res = await funcs.getAllForms(); // getting all Forms
//     expect(res.data).toBeDefined();
//     expect(res.status).toEqual(200);

//     const res2 = await funcs.getFormById(
//       res.data.data[res.data.data.length - 1]._id
//     ); // getting a certain form

//     expect(res2.data.data.companyName).toBe("rwaaaarr"); // checking
//     expect(res2.data.data.type).toBe("SPCForm"); // checking
//   } catch (error) {}
// });
