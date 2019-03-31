/**
 * @jest-environment node
 */

const funcs = require('../funcs/userFuncs');

test('Test getting all users ', async () => {
  try {
    
    const r = await funcs.GetAllUsers()
    expect(r.data.data.length).toBe(36)
  // creating a lawyer and a reviwer for testing 
    await funcs.CreateReviewerOrLawyer('Lawyer','Ali Ibrahim','male','Egyptian','national id','A13670019','1998-12-1','Maadi','hh033@yahoo.com','123456788')
    await funcs.CreateReviewerOrLawyer('Reviewer','mohamdd Amr','male','Egyptian','national id','A34990109','1998-12-1','Maadi','ob03@yahoo.com','123456787')
  
  const res = await funcs.GetAllUsers()
  console.log(res.data)
  expect(res.data.data.length).toBe(r.data.data.length + 2)
  expect(res.data).toBeDefined()
  expect(res.status).toEqual(200)
  //expect(res.data.data.length).toEqual(2);
  
  }

  catch(error){
    
    console.log(error)
  
  }


})



test('Test getting a certain user ', async () => {
  try {
  
   
  //creating a lawyer for testing 
  await funcs.CreateReviewerOrLawyer('Lawyer','Ali el seba3y','male','Egyptian','national id','01612340078','1998-12-10T00:00:00.000Z','Maadi','Al@yahoo.com','123456788')
  
  
  const res = await funcs.GetAllUsers()   // getting all users
  expect(res.data).toBeDefined()
  expect(res.status).toEqual(200)
  
  const res2 = await funcs.GetUserById(res.data.data[res.data.data.length-1]._id)  // getting a certain user 
  console.log(res2.data)


  // checking the requirements of the created user:-

  expect(res2.data.data.userType).toBe('Lawyer')
  expect(res2.data.data.name).toBe('Ali el seba3y')
  expect(res2.data.data.gender).toBe('male')
  expect(res2.data.data.nationality).toBe('Egyptian')
  expect(res2.data.data.identificationType).toBe('national id')
  expect(res2.data.data.identificationNumber).toBe('01612340078')
  expect(res2.data.data.birthdate).toBe('1998-12-10T00:00:00.000Z')
  expect(res2.data.data.address).toBe('Maadi')
  expect(res2.data.data.email).toBe('Al@yahoo.com')
  //expect(res2.data.data.password).toBe('$2b$10$Vx8xyf/01VncjCAqpFdB.Oc/rzeJqRImVUVgFjdBQoLurAw8cl/zi')
 
 
  }

  catch(error){
    
    console.log(error)
  
  }


})




test('Test getting the financial balance of a certain Investor ', async () => {
  try {
  
   
  //creating an Investor for testing 
  await funcs.CreateInvestor('Investor','sebaaa3y','male','Egyptian','national id','A6123456777','1998-12-10T00:00:00.000Z','Maadi','ali@yahoo.com','123456789','202')
  
  
  const res = await funcs.GetAllUsers()  // getting all users
  expect(res.data).toBeDefined()
  expect(res.status).toEqual(200)
  
  const res2 = await funcs.GetUserById(res.data.data[res.data.data.length-1]._id) // getting a certain user 
  console.log(res2.data)   

  expect(res2.data.data.financialBalance).toEqual(202)   // checking his financial balance
  
 
  }

  catch(error){
    
    console.log(error)
  
  }


})



test('Check the update of a certain user', async () => {
    
  try{
  
  const res =  await funcs.GetAllUsers()       // getting all users
  expect(res).toBeDefined()
  expect(res.status).toEqual(200)
  var len = res.data.data[res.data.data.length-1]
  var lenid = res.data.data[res.data.data.length-1]._id   // get the id of a certain user 
  expect(res.data.data.length).toEqual(42)   // check the length 

  await funcs.UpdateUser(lenid)    // update the user

  var x = await funcs.GetUserById(lenid)
  console.log(x.data)   // printing the result just for testing

  expect(x.data.data.name).toBe('ALI EL SEBAIE2')   // checking
  expect(x.data.data.nationality).toBe('Masry')    // checking
  expect(res.data.data.length).toEqual(42)   // check the length again to make sure that it is not changed after updating
  
}catch(error){
  console.log(error)
}
});



test('Check the update of a form in a certain user', async () => {
    
  try{
  
  const res =  await funcs.GetAllUsers()    // getting all users
  const res2 = await funcs.GetAllForms()    // getting all forms
  expect(res).toBeDefined()
  expect(res.status).toEqual(200)
  var lenid = res.data.data[res.data.data.length-1]._id     // get the id of a certain user 
  var formid = res2.data.data[res2.data.data.length-1]._id  // get the id of a certain form
  
  await funcs.UpdateFormInUser(lenid,formid)    // update the form of the user


  var x = await funcs.GetFormById(formid)
  console.log(x.data)   // printing the result just for testing

  expect(x.data.data.companyName).toBe('sebaie200 company')   // checking
  expect(x.data.data.companyNameInEnglish).toBe('Irish comp')    // checking

  
}catch(error){
  console.log(error)
}
});



test('Check the get of a certain form', async () => {   // get a certain form
    
  try{
  
    const res = await funcs.GetAllForms()   // getting all Forms
      expect(res.data).toBeDefined()
      expect(res.status).toEqual(200)

      const res2 = await funcs.GetFormById(res.data.data[res.data.data.length-1]._id)  // getting a certain form 
      console.log(res2.data)
 
   expect(res2.data.data.companyName).toBe('rwaaaarr')   // checking
   expect(res2.data.data.type).toBe('SPCForm')    // checking

  
}catch(error){
  console.log(error)
}
});





// "jest": "^24.5.0",
    // "nodemon": "^1.18.10"


