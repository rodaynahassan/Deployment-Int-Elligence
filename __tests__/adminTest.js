/**
 * @jest-environment node
 */

// test('1+1 is 2', async () => {
//   expect(1+1).toBe(2)
// })
const mongoose = require("mongoose");
const funcs = require("../funcs/adminFuncs");

let beforeOldAdmins;
let beforeOldLength;
let token;
let beforeNewAdmins;
let beforeNewLength;
let loggedInAdmin;
let beforeAdmin;
//let tokenUser;
beforeAll(async () => {
  beforeOldAdmins = await funcs.getAdmins();
  beforeOldLength = beforeOldAdmins.data.data.length;
  console.log(beforeOldLength)
  //beforeAdmin = await funcs.postAdmin("Mariam","Female","Egyptian","National ID","65630746622","password1234","1990-3-3","Maadi","marii@gmail.com","Admin");
  //console.log(beforeAdmin)
  beforeNewAdmins = await funcs.getAdmins();
  beforeNewLength = beforeNewAdmins.data.data.length
  console.log(beforeNewLength)
  loggedInAdmin = await funcs.loginAdmin("password1234","marii@gmail.com")
  token = loggedInAdmin.data.data
  //console.log(token)
  // await funcs.createInvestor('Investor','Mahmoud','Male','Egyptian','National ID','104575020173','01-01-1980','Nasr City','hodd@gmail.com','password1234','Person')
  // const loggedInUser = await funcs.loginInvestor('password1234','hodd@gmail.com')
  // tokenUser = loggedInUser.data.token
});

afterAll(async () => {
  //const allAdmins = await funcs.getAdmins()
  await funcs.deleteAdmin(beforeAdmin.data.data._id);
  // await funcs.deleteInvestor(tokenUser)
});

//Testing creating a new admin
test("Creating an admin", async () => {
  expect(beforeNewLength).toBe(beforeOldLength + 1);
  expect(beforeNewAdmins.data.data[beforeNewAdmins.data.data.length - 1].name).toMatch(
    "Mariam"
  );
  expect(beforeNewAdmins.data.data[beforeNewAdmins.data.data.length - 1].email).toMatch(
    "marii@gmail.com"
  );
});

//Testing creating a new admin with identification number less than 8 and expecting an error
test("Creating an admin with wrong identification number", async () => {
  const postingAdmin = await funcs.postAdmin(
    "Ayman",
    "Male",
    "Egyptian",
    "National ID",
    "1123",
    "password1234",
    "1990-3-3",
    "Maadi",
    "ayman@gmail.com",
    "Admin"
  );
  // console.log(postingAdmin)
  const Admins = await funcs.getAdmins()
  expect(postingAdmin.data.data.error).toEqual('"identificationNumber" length must be at least 8 characters long');
  expect(Admins.data.data.length).toBe(beforeNewLength);
});

//Testing creating a new admin with a wrong email syntax
test("Creating an admin with wrong email", async () => {
  const postingAdmin = await funcs.postAdmin(
    "Ayman",
    "Male",
    "Egyptian",
    "National ID",
    "1169970423",
    "password1234",
    "1990-3-3",
    "Maadi",
    "ayman",
    "Admin"
  );
  const Admins = await funcs.getAdmins()
  expect(postingAdmin.data.data.error).toEqual('"email" must be a valid email');
  expect(Admins.data.data.length).toBe(beforeNewLength);
});

//Testing creating a new admin without a name which is required
test("Creating an admin without a name", async () => {
  const postingAdmin = await funcs.postAdmin(
    "",
    "Male",
    "Egyptian",
    "National ID",
    "1169970423",
    "password1234",
    "1990-3-3",
    "Maadi",
    "ayman",
    "Admin"
  );
  const Admins = await funcs.getAdmins()
  expect(postingAdmin.data.data.error).toEqual('"name" is not allowed to be empty');
  expect(Admins.data.data.length).toBe(beforeNewLength);
});

//Testing getting all admins
test("Getting all admins", async () => {
  expect(beforeNewLength).toBe(beforeOldLength + 1);
});

//Testing getting a certain admin by id
test("Getting a certain admin by id", async () => {
  const newAdmin = await funcs.getAdminByID(token);
  expect(newAdmin.data.data._id).toMatch(beforeNewAdmins.data.data[beforeNewAdmins.data.data.length-1]._id);
  expect(newAdmin.data.data.name).toMatch(beforeNewAdmins.data.data[beforeNewAdmins.data.data.length-1].name);
  expect(newAdmin.data.data.email).toMatch(beforeNewAdmins.data.data[beforeNewAdmins.data.data.length-1].email);
});

//Testing deleting an admin by id and the length should be minus 1
test("Deleting an admin", async () => {
  await funcs.postAdmin(
    "Mohamed",
    "Male",
    "Egyptian",
    "National ID",
    "273773333",
    "123456789",
    "3-3-1990",
    "Maadi",
    "mo@gmail.com",
    "Admin"
  );
  const oldAdmins = await funcs.getAdmins();
  const oldLength = oldAdmins.data.data.length;
  await funcs.deleteAdmin(
    oldAdmins.data.data[oldAdmins.data.data.length - 1]._id
  );
  const newAdmins = await funcs.getAdmins();
  expect(newAdmins.status).toEqual(200);
  expect(newAdmins.data.data.length).toBe(oldLength - 1);
});

//Testing deleting an admin by a wrong id
test("Deleting an admin with a wrong id", async () => {
  await funcs.deleteAdmin(mongoose.Types.ObjectId("5c9ff4e9a684c432b40e2c82"));
  const newAdmins = await funcs.getAdmins();
  expect(newAdmins.status).toEqual(200);
  expect(newAdmins.data.data.length).toBe(beforeNewLength);
});

//Testing updating an admin by id
test("Updating an admin by id", async () => {
  const specificAdmin = await funcs.getAdminByID(token);
  await funcs.putAdmin(
    token,
    "Youssr",
    specificAdmin.data.data.gender,
    specificAdmin.data.data.nationality,
    specificAdmin.data.data.identificationType,
    specificAdmin.data.data.identificationNumber,
    "pass6637294",
    specificAdmin.data.data.birthdate,
    specificAdmin.data.data.address,
    specificAdmin.data.data.email
  );
  const updatedAdmin = await funcs.getAdminByID(token);
  expect(updatedAdmin.data.data.name).toMatch("Youssr");
});

//Testing updating an admin by id with a password less than 8
test("Updating an admin by id with wrong password", async () => {
  const specificAdmin = await funcs.getAdminByID(token);
  const updatedAdmin = await funcs.putAdmin(
    token,
    specificAdmin.data.data.name,
    specificAdmin.data.data.gender,
    specificAdmin.data.data.nationality,
    specificAdmin.data.data.identificationType,
    specificAdmin.data.data.identificationNumber,
    "22",
    specificAdmin.data.data.birthdate,
    specificAdmin.data.data.address,
    specificAdmin.data.data.email
  );
  expect(updatedAdmin.error.response.data.error).toEqual('"password" length must be at least 8 characters long');
});

//Testing login
test("Login admin", async () => {
  expect(loggedInAdmin.config.data).toMatch('"password":"password1234","email":"marii@gmail.com"');
});

//Testing login with a wrong password
test("Login admin with wrong password", async () => {
  const loginAdmin = await funcs.loginAdmin("Rodayna12", "marii@gmail.com");
  expect(loginAdmin.error.response.data.password).toMatch('Wrong password')
});

//Testing login with a wrong email
test("Login admin with wrong email", async () => {
  const loginAdmin = await funcs.loginAdmin("password1234", "rody@yahoo.com")
  expect(loginAdmin.error.response.data.email).toMatch('This email is not registered yet')
});



// //Testing searching by company name
// test.only("Getting a form by company name", async () => {
//   const x = await funcs.postFormForUser('Portsaid','Portsaid','Abdo Kofta','لالالالا','Pounds',100000,'SPCForm','02-02-2012',tokenUser)
//   console.log(x.data.data.forms[x.data.data.forms.length-1].companyName)
//   const forms = await funcs.getAllForms();
//   const specifiedCompany = await funcs.getFormByCompanyName("لالالالا",token)
//   console.log(specifiedCompany)
// });

// //test get SSCform by company name
// test("test get form by company name ", async () => {
//   try {
//     await funcs.createForm(
//       "omarKhaled1",
//       "cairoo",
//       "cairo",
//       "nasrcity",
//       "pounds",
//       600000,
//       "SSCForm",
//       "2019-07-08",
//       mongoose.Types.ObjectId("5c9fbb2d026fe76c64089c52"),
//       [
//         {
//           name: "nadaa",
//           type: "coo",
//           gender: "female",
//           nationality: "egyptian",
//           identificationType: "bnghtydyf",
//           identificationNumber: "1234456788",
//           birthdate: "2019-06-07",
//           address: "nasrrrr",
//           typeOfManagers: "khihhu"
//         }
//       ]
//     );
//     const res = await funcs.getAllForms();
//     expect(res.data).toBeDefined();
//     expect(res.status).toEqual(200);
//     const res2 = await funcs.GetFormByCompanyName(
//       res.data.data[res.data.data.length - 1].companyName
//     );
//     expect(res2.data.data[res2.data.data.length - 1].companyName).toBe(
//       "omarKhaled1"
//     );
//     expect(res2.data.data[res2.data.data.length - 1].companyGovernorate).toBe(
//       "cairoo"
//     );
//     expect(res2.data.data[res2.data.data.length - 1].companyCity).toBe("cairo");
//     expect(res2.data.data[res2.data.data.length - 1].companyAddress).toBe(
//       "nasrcity"
//     );
//     expect(res2.data.data[res2.data.data.length - 1].currency).toBe("pounds");
//     expect(res2.data.data[res2.data.data.length - 1].equityCapital).toBe(
//       600000
//     );
//     expect(res2.data.data[res2.data.data.length - 1].type).toBe("SSCForm");
//     expect(res2.data.data[res2.data.data.length - 1].creationDate).toBe(
//       "2019-07-08T00:00:00.000Z"
//     );
//     expect(res2.data.data[res2.data.data.length - 1].userId).toBe(
//       "5c9fbb2d026fe76c64089c52"
//     );
//     expect(res2.data.data[res2.data.data.length - 1].SSCManagers).toEqual([
//       {
//         name: "nadaa",
//         type: "coo",
//         gender: "female",
//         nationality: "egyptian",
//         identificationType: "bnghtydyf",
//         identificationNumber: "1234456788",
//         birthdate: "2019-06-07",
//         address: "nasrrrr",
//         typeOfManagers: "khihhu"
//       }
//     ]);
//   } catch (error) {}
// });

// //test get SPCForm by company name
// test("test get SPCForm by company name", async () => {
//   try {
//     await funcs.createForm(
//       "comanyunique",
//       "cairoo",
//       "cairo",
//       "nasrcity",
//       "pounds",
//       600000,
//       "SSCForm",
//       "2019-07-08",
//       mongoose.Types.ObjectId("5c9fbb2d026fe76c64089c52")
//     );
//     const res = await funcs.getAllForms();
//     expect(res.data).toBeDefined();
//     expect(res.status).toEqual(200);
//     const res2 = await funcs.GetFormByCompanyName(
//       res.data.data[res.data.data.length - 1].companyName
//     );
//     expect(res2.data.data[res2.data.data.length - 1].companyName).toBe(
//       "comanyunique"
//     );
//     expect(res2.data.data[res2.data.data.length - 1].companyGovernorate).toBe(
//       "cairoo"
//     );
//     expect(res2.data.data[res2.data.data.length - 1].companyCity).toBe("cairo");
//     expect(res2.data.data[res2.data.data.length - 1].companyAddress).toBe(
//       "nasrcity"
//     );
//     expect(res2.data.data[res2.data.data.length - 1].currency).toBe("pounds");
//     expect(res2.data.data[res2.data.data.length - 1].equityCapital).toBe(
//       600000
//     );
//     expect(res2.data.data[res2.data.data.length - 1].type).toBe("SSCForm");
//     expect(res2.data.data[res2.data.data.length - 1].creationDate).toBe(
//       "2019-07-08T00:00:00.000Z"
//     );
//     expect(res2.data.data[res2.data.data.length - 1].userId).toBe(
//       "5c9fbb2d026fe76c64089c52"
//     );
//   } catch (error) {}
// });

// test("Check sorting the cases by creation date", async () => {
//   try {
//     const user1 = await userFuncs.postLawyer(
//       "Lawyer",
//       "Ahmed",
//       "Male",
//       "Egyptian",
//       "passport",
//       "2222222222",
//       "uuuuuuuu",
//       "1990-01-01",
//       "maadi",
//       "ahmed@yahoo.com"
//     );
//     const users = await userFuncs.getUsers();
//     const id = users.data.data[0]._id;
//     const form1 = await funcs.postForm(
//       "Green",
//       "Cech",
//       "nasr",
//       "loll",
//       "Euro",
//       200000,
//       "SPCForm",
//       "2000-02-04",
//       mongoose.Types.ObjectId(id)
//     );
//     const form2 = await funcs.postForm(
//       "Greenaa",
//       "Cecha",
//       "nasraa",
//       "ll",
//       "Euro",
//       200000,
//       "SPCForm",
//       "2000-02-03",
//       mongoose.Types.ObjectId(id)
//     );
//     const form3 = await funcs.postForm(
//       "Greenaaa",
//       "Cechaaa",
//       "nasraaa",
//       "lo",
//       "Euro",
//       200000,
//       "SPCForm",
//       "2000-02-02",
//       mongoose.Types.ObjectId(id)
//     );
//     try {
//       const x = res1.data.data[0]._id;
//       const y = res1.data.data[1]._id;
//       const z = res1.data.data[2]._id;
//       const res = await userfuncs.sortById();
//       const res1 = await formfuncs.getForms();
//       const a = res1.data.data[0]._id;
//       const b = res1.data.data[1]._id;
//       const c = res1.data.data[2]._id;
//       expect(x).toMatch(c);
//       expect(y).toMatch(b);
//       expect(z).toMatch(a);
//     } catch (error) {}
//     await userfuncs.deleteUser(id);
//   } catch (error) {}
// });