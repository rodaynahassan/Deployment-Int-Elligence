/**
 * @jest-environment node
 */
var mongoose = require("mongoose");
var axios = require("axios");
const funcs = require("../funcs/userFuncs");

let beforeOldUsers;
let beforeOldLength;
let token;
let beforeNewUsers;
let beforeNewLength;
let loggedInUser;
beforeAll(async () => {
  beforeOldUsers = await funcs.getAllUsers();
  beforeOldLength = beforeOldUsers.data.data.length;
  await funcs.createInvestor('Investor','Mona','Female','Egyptian','National ID','870575020173','01-01-1980','Nasr City','hehe@gmail.com','password1234','Person')
  beforeNewUsers = await funcs.getAllUsers();
  beforeNewLength = beforeNewUsers.data.data.length
  loggedInUser = await funcs.loginUser("password1234","hehe@gmail.com")
  token = loggedInUser.data.token
});

afterAll(async () => {
  await funcs.deleteUser(token);
});

//Testing Creating a user
test("Creating a user", async () => {
  expect(beforeNewLength).toBe(beforeOldLength + 1);
  expect(beforeNewUsers.data.data[beforeNewUsers.data.data.length - 1].name).toMatch(
    "Mona"
  );
  expect(beforeNewUsers.data.data[beforeNewUsers.data.data.length - 1].email).toMatch(
    "hehe@gmail.com"
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
  expect(loggedInUser.config.data).toMatch('"password":"password1234","email":"hehe@gmail.com"');
});

//Testing login with a wrong password
test("Login admin with wrong password", async () => {
  const loginUser = await funcs.loginUser("Rodayna12", "hehe@gmail.com");
  expect(loginUser.error.response.data.password).toMatch('Wrong password')
});

//Testing login with a wrong email
test("Login admin with wrong email", async () => {
  const loginUser = await funcs.loginUser("password1234", "haha@yahoo.com")
  expect(loginUser.error.response.data.email).toMatch('This email is not registered yet')
});

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

test("Test getting the financial balance of a certain Investor ", async () => {
  try {
    //creating an Investor for testing
    await funcs.CreateInvestor(
      "Investor",
      "sebaaa3y",
      "male",
      "Egyptian",
      "national id",
      "A6123456777",
      "1998-12-10T00:00:00.000Z",
      "Maadi",
      "ali@yahoo.com",
      "123456789",
      "202"
    );

    const res = await funcs.getAllUsers(); // getting all users
    expect(res.data).toBeDefined();
    expect(res.status).toEqual(200);

    const res2 = await funcs.getUserById(
      res.data.data[res.data.data.length - 1]._id
    ); // getting a certain user

    expect(res2.data.data.financialBalance).toEqual(202); // checking his financial balance
  } catch (error) {}
});

test("Check the update of a certain user", async () => {
  try {
    const res = await funcs.getAllUsers(); // getting all users
    expect(res).toBeDefined();
    expect(res.status).toEqual(200);
    var len = res.data.data[res.data.data.length - 1];
    var lenid = res.data.data[res.data.data.length - 1]._id; // get the id of a certain user
    expect(res.data.data.length).toEqual(42); // check the length

    await funcs.UpdateUser(lenid); // update the user

    var x = await funcs.getUserById(lenid);

    expect(x.data.data.name).toBe("ALI EL SEBAIE2"); // checking
    expect(x.data.data.nationality).toBe("Masry"); // checking
    expect(res.data.data.length).toEqual(42); // check the length again to make sure that it is not changed after updating
  } catch (error) {}
});

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
