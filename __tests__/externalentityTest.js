/**
 * @jest-environment node
 */
var mongoose = require("mongoose");
const axios = require("axios");
const funcs = require("../funcs/externalentityFuncs");

//Test getting all external entities
test("Get all external entities", async () => {
  const res = await funcs.getExternalEntity();
  const length = res.data.data.length;
  await funcs.postExternalEntity(
    "Nadzos",
    "(1/1000)*x",
    "http://yoyo.com",
    "gafi@hotmail.com"
  );
  const response = await funcs.getExternalEntity();
  expect(response.status).toEqual(200);
  expect(response.data.data).toHaveLength(length + 1);
  await funcs.deleteExternalEntity(
    response.data.data[response.data.data.length - 1]._id
  );
});

//Test getting specific external entity
test("Get a certain external entity ", async () => {
  await funcs.postExternalEntity(
    "ExternalEntityNad",
    "(1/1000)*x",
    "http://youssr.com",
    "gafi@hotmail.com"
  );
  const res = await funcs.getExternalEntity();
  expect(res.data).toBeDefined();
  expect(res.status).toEqual(200);
  const res2 = await funcs.getExternalEntityById(
    res.data.data[res.data.data.length - 1]._id
  );
  expect(res2.data.data.Name).toBe("ExternalEntityNad");
  expect(res2.data.data.Equation).toBe("(1/1000)*x");
  expect(res2.data.data.Api).toBe("http://youssr.com");
  expect(res2.data.data.Email).toBe("gafi@hotmail.com");
  await funcs.deleteExternalEntity(res.data.data[res.data.data.length - 1]._id);
});

//test get external entity by name
test("test get  external entity by its name", async () => {
  await funcs.postExternalEntity(
    "ali",
    "(1/9)+x",
    "http:huyt.ccom",
    "nadalabib@gmail.com"
  );
  const res = await funcs.getExternalEntity();
  expect(res.data).toBeDefined();
  expect(res.status).toEqual(200);
  const res2 = await funcs.getExternalEntityByName(
    res.data.data[res.data.data.length - 1].Name
  );
  expect(res2.data.data[res2.data.data.length - 1].Name).toBe("ali");
  expect(res2.data.data[res2.data.data.length - 1].Equation).toBe("(1/9)+x");
  expect(res2.data.data[res2.data.data.length - 1].Api).toBe("http:huyt.ccom");
  await funcs.deleteExternalEntity(res.data.data[res.data.data.length - 1]._id);
});

//test get  external entity by it's Api
test("test get  external entity by its Api", async () => {
  await funcs.postExternalEntity(
    "testYoyHas",
    "(1/9)+x",
    "http:huyyyt.ccom",
    "nn@gmail.com"
  );
  const res = await funcs.getExternalEntity();
  expect(res.data).toBeDefined();
  expect(res.status).toEqual(200);
  const res2 = await funcs.getExternalEntityByAPI(
    res.data.data[res.data.data.length - 1].Api
  );
  expect(res2.data.data[res2.data.data.length - 1].Name).toBe("testYoyHas");
  expect(res2.data.data[res2.data.data.length - 1].Equation).toBe("(1/9)+x");
  expect(res2.data.data[res2.data.data.length - 1].Api).toBe(
    "http:huyyyt.ccom"
  );
  await funcs.deleteExternalEntity(res.data.data[res.data.data.length - 1]._id);
});

//Testing creating new External Entity
test("Creating new External entity", async () => {
  const oldEntity = await funcs.getExternalEntity();
  expect(oldEntity.status).toEqual(200);
  var oldLength = oldEntity.data.data.length;
  await funcs.postExternalEntity(
    "NADO",
    "(1/1000)*X",
    "http://nado.com",
    "nado@gmail.com"
  );
  const newEntity = await funcs.getExternalEntity();
  expect(newEntity.status).toBe(200);
  expect(newEntity.data.data.length).toBe(oldLength + 1);
  expect(newEntity.data.data[newEntity.data.data.length - 1].Name).toMatch(
    "NADO"
  );
  expect(newEntity.data.data[newEntity.data.data.length - 1].Email).toMatch(
    "nado@gmail.com"
  );
  await funcs.deleteExternalEntity(
    newEntity.data.data[newEntity.data.data.length - 1]._id
  );
});

//Testing creating a new External Entity with a wrong email syntax
test("Creating an External Entity with error", async () => {
  var oldExEntities = await funcs.getExternalEntity();
  expect(oldExEntities.status).toEqual(200);
  var oldLength = oldExEntities.data.data.length;
  var postingExEntities = await funcs.postExternalEntity(
    "NADZ",
    "(1/1000)*X",
    "http://nado.com",
    "nadogmailcom"
  );
  // console.log(postingExEntities)
  expect(postingExEntities.data.data.error).toEqual(
    '"Email" must be a valid email'
  );
  expect(oldExEntities.data.data.length).toBe(oldLength);
});

//Testing creating a new External Entity with a wrong email syntax
test("Creating an External Entity with error", async () => {
  var oldExEntities = await funcs.getExternalEntity();
  expect(oldExEntities.status).toEqual(200);
  var oldLength = oldExEntities.data.data.length;
  var postingExEntities = await funcs.postExternalEntity(
    234,
    "(1/1000)*X",
    "http://nado.com",
    "nado@gmailcom"
  );
  expect(postingExEntities.data.data.error).toEqual('"Name" must be a string');
  expect(oldExEntities.data.data.length).toBe(oldLength);
});

//Testing updating an External Entity
test("Update an External Entity", async () => {
  await funcs.postExternalEntity(
    "Exz",
    "X*Y",
    "NewExternalA.com",
    "NewExterrrnal@gmail.com"
  );
  const response = await funcs.getExternalEntity();
  const a = response.data.data[response.data.data.length - 1]._id;
  await funcs.updateExternalEntityByID(
    mongoose.Types.ObjectId(a),
    "UpdatedPlz",
    response.data.data[response.data.data.length - 1].Equation,
    "newUrl",
    response.data.data[response.data.data.length - 1].Email
  );
  const res = await funcs.getExternalEntity();
  expect(res.status).toEqual(200);
  expect(res.data.data[response.data.data.length - 1].Name).toMatch(
    "UpdatedPlz"
  );
  expect(res.data.data[response.data.data.length - 1].Api).toMatch("newUrl");
  await funcs.deleteExternalEntity(a);
});
//Another Update test for external entity with wrong validation for the email
test("Update an External Entity with wrong validations", async () => {
  await funcs.postExternalEntity(
    "Teeee2",
    "N*Y",
    "NewExternalB.com",
    "NewExterrrnal@hotmail.com"
  );
  const response = await funcs.getExternalEntity();
  const a = response.data.data[response.data.data.length - 1]._id;
  var UpdatedEE = await funcs.updateExternalEntityByID(
    mongoose.Types.ObjectId(a),
    response.data.data[response.data.data.length - 1].Name,
    response.data.data[response.data.data.length - 1].Equation,
    response.data.data[response.data.data.length - 1].Api,
    "nadz"
  );
  const res = await funcs.getExternalEntity();
  expect(UpdatedEE.response.data.error).toEqual(
    '"Email" must be a valid email'
  );
  await funcs.deleteExternalEntity(a);
});

//Testing deleting an External Entity by id and the length should be minus 1
test("Deleting an External Entity", async () => {
  await funcs.postExternalEntity(
    "ExternalEntityTestt",
    "10X+2",
    "http:/ExternalEntity.com",
    "ExternalEntity@gmail.com"
  );
  const oldExternalEntities = await funcs.getExternalEntity();
  const oldLength = oldExternalEntities.data.data.length;
  await funcs.deleteExternalEntity(
    oldExternalEntities.data.data[oldExternalEntities.data.data.length - 1]._id
  );
  const newExternalEntities = await funcs.getExternalEntity();
  expect(newExternalEntities.status).toEqual(200);
  expect(newExternalEntities.data.data.length).toBe(oldLength - 1);
});

//Testing deleting an External Entity by a wrong id
test("Deleting an Entity with a wrong id", async () => {
  const oldExternalEntities = await funcs.getExternalEntity();
  const oldLength = oldExternalEntities.data.data.length;
  await funcs.deleteExternalEntity(
    mongoose.Types.ObjectId("5c9ff4e9a684c432b40e2c82")
  );
  const newExternalEntities = await funcs.getExternalEntity();
  expect(newExternalEntities.status).toEqual(200);
  expect(newExternalEntities.data.data.length).toBe(oldLength);
});
