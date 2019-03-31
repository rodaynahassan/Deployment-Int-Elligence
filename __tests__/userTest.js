/**
  * @jest-environment node
  */

 var mongoose = require('mongoose')
 const axios = require('axios');
 const funcs = require('../funcs/userFuncs');

 test('Get approved forms (Company) of Investor', async () => {
      try{
        await funcs.createInvestor('Investor','Youssr','Female','Egyptian','National ID','123456766890','1998-04-02','Masr el gedida','yoyy@hotmail.com','sjeirys22')
        var users =  await funcs.getAllUsers() 
        var id =  users.data.data[users.data.data.length-1]._id
        await funcs.postFormForUser('Cairo', 'Nasr City','Moez Eldawla Street','Last Company','Dollar',200000,'SPCForm','Approved','1998-09-08',id)
        const res = await funcs.getAllForms()
        expect(res.data).toBeDefined()
        expect(res.status).toEqual(200)
        const res2 =  await funcs.getCompanyOfAnInvestor(res.data.data[res.data.data.length-1].userId)
        expect(res2.data.data[res2.data.data.length-1].status).toMatch('Approved')
        await funcs.deleteUser(res.data.data[res.data.data.length-1]._id)
      }
      catch(err){
        console.log(err)
      }
    })
 
   test('Get in progress forms (Cases)', async () => {
     try{
        await funcs.createInvestor('Investor','Ahmed','Male','Egyptian','Passport','0987654321111','1997-12-15','Nasr City','tott@gmail.com','hahahahaha') 
        var users = await funcs.getAllUsers()
        var id = users.data.data[users.data.data.length-1]._id
        await funcs.postFormForUser('Cairo', 'Nasr City','Moez Eldawla Street','Final Company','Dollar',200000,'SPCForm','In progress','1998-09-08',id)
        const res = await funcs.getAllForms()
        expect(res.data).toBeDefined()
        expect(res.status).toEqual(200)
        const res2 =  await funcs.getInProgressCase(res.data.data[res.data.data.length-1].userId)
        expect(res2.data.data[res2.data.data.length-1].status).toMatch('In progress')
        await funcs.deleteUser(res.data.data[res.data.data.length-1]._id)
     }
     catch(err){
       console.log(err)
     }
      })
  test('Login Lawyer', async () => {
 
    try{

    const response1 =  await funcs.getUsers()
    const length = response1.data.data.length
    await funcs.postLawyer('Lawyer','Rodaynaa', 'female','Egyptian','National ID','13265438','Rodayna1234','3-3-1990','Maadi','rodayna@yahoo.com')
    expect(response1.status).toEqual(200)
    expect(response1.data.data).toHaveLength(length+1)
    expect(response1.data.data[response1.data.data.length-1].name).toMatch('Rodaynaa')
    await funcs.loginLawyer(response1.data.data[response1.data.data.length-1].password,'rodayna@yahoo.com')
   // const response2 =  await funcs.getUsers()
   // expect(response2.status).toEqual(200)
    await funcs.deleteUser(response1.data.data[response1.data.data.length-1]._id)
   // await funcs.deleteUser(response2.data.data[response2.data.data.length-1]._id)
    
      }
  catch(error){
    console.log(error)
  }
  });

  test('Login Investor', async () => {
 
    try{

    const response1 =  await funcs.getUsers()
    const length = response1.data.data.length
    await funcs.postInvestor('Investor','Rodaynaa', 'female','Egyptian','National ID','13265438','Rodayna1234','3-3-1990','Maadi','rodayna@yahoo.com','CEO')

    expect(response1.status).toEqual(200)
    expect(response1.data.data).toHaveLength(length+1)
    expect(response1.data.data[response1.data.data.length-1].name).toMatch('Rodaynaa')
    await funcs.loginInvestor(response1.data.data[response1.data.data.length-1].password,'rodayna@yahoo.com')
 //   const response2 =  await funcs.getUsers()
   // expect(response2.status).toEqual(200)
    await funcs.deleteUser(response1.data.data[response1.data.data.length-1]._id)
  //  await funcs.deleteUser(response2.data.data[response2.data.data.length-1]._id)
    
      }
  catch(error){
    console.log(error)
  }
  });

  test('Login Reviewer', async () => {
 
    try{

    const response1 =  await funcs.getUsers()
    const length = response1.data.data.length
    await funcs.postReviewer('Reviewer','Rodaynaa', 'female','Egyptian','National ID','13265438','Rodayna1234','3-3-1990','Maadi','rodayna@yahoo.com')

    expect(response1.status).toEqual(200)
    expect(response1.data.data).toHaveLength(length+1)
    expect(response1.data.data[response1.data.data.length-1].name).toMatch('Rodaynaa')
    await funcs.loginReviewer(response1.data.data[response1.data.data.length-1].password,'rodayna@yahoo.com')
  //  const response2 =  await funcs.getUsers()
   // expect(response2.status).toEqual(200)
    await funcs.deleteUser(response1.data.data[response1.data.data.length-1]._id)
   // await funcs.deleteUser(response2.data.data[response2.data.data.length-1]._id)
    
      }
  catch(error){
    console.log(error)
  }
  });

test('check if a user is deleted from database',async()=>{

  try{
 
       //expect.assertions(6)
       const user1=await funcs.createLawyerOrReviewer('Lawyer','ammar','Male','Egyptian','National ID','245330443672','1998-5-1','Maadi','ammar.gp@7gmail.com','133462366777')
      // const user2=await funcs.createLawyerOrReviewer('Reviewer','Mohanad','Male','Egyptian','National ID','24411113672','1998-5-5','Maadi','mohanad.ahmed@gmail.com','116626727')
      // const user3=await funcs.createLawyerOrReviewer('Lawyer','misho','Male','Egyptian','National ID','2441fvv26672','1998-4-2','Masr el gedida','alxi.ahmed@gmail.com','66v6626727')
 
   

   const OldUsers=await funcs.getUsers()
   const oldLength=OldUsers.data.data.length        

   console.log(OldUsers.data)

   expect(OldUsers).toBeDefined()
   expect(OldUsers.status).toEqual(200)
   expect(OldUsers.data.data).toHaveLength(oldLength)
   




   await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)    //delete an existing user
  

   const newUsers = await funcs.getUsers()
   const newLength=oldLength-1
   console.log(newUsers.data)

   expect(newUsers).toBeDefined()
   expect(newUsers.status).toEqual(200)
   expect(newUsers.data.data).toHaveLength(newLength)                              //check if length will be less by 1




  //  await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
  //  await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
   

  }
  catch(error){
    console.log(error)
  }

})

test('check if delete a user that is not in the database will be deleted or not',async()=>{

  try{
 
       //expect.assertions(6)
      // const user1=await funcs.createLawyerOrReviewer('Lawyer','hesham','Male','Egyptian','National ID','245470443672','1998-5-1','Maadi','hesham.gp@7gmail.com','123462366777')
      //  const user2=await funcs.createLawyerOrReviewer('Reviewer','Mohanad','Male','Egyptian','National ID','24411113672','1998-5-5','Maadi','mohanad.ahmed@gmail.com','116626727')
       // const user3=await funcs.createLawyerOrReviewer('Lawyer','misho','Male','Egyptian','National ID','2441fvv26672','1998-4-2','Masr el gedida','alxi.ahmed@gmail.com','66v6626727')
 
   

   const OldUsers=await funcs.getUsers()
   const oldLength=OldUsers.data.data.length        

   console.log(OldUsers.data)

   expect(OldUsers).toBeDefined()
   expect(OldUsers.status).toEqual(200)
   expect(OldUsers.data.data).toHaveLength(oldLength)
   


   

   await funcs.DeleteUser(mongoose.Types.ObjectId('5c9fb264da7a330017864111'))         //try to delete non existing user
  

   const newUsers = await funcs.getUsers()
   
   console.log(newUsers.data)

   expect(newUsers).toBeDefined()
   expect(newUsers.status).toEqual(200)
   expect(newUsers.data.data).not.toHaveLength(oldLength-1)       //check if length will change

  //  await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
  //  await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
   

  }
  catch(error){
    console.log(error)
  }

})

test('check if Investor is created',async()=>{

  try{
 
   // expect.assertions(5)
   var OldUsers=await funcs.getUsers()
   console.log(OldUsers.data)
   var oldLength=OldUsers.data.data.length  
   expect(OldUsers).toBeDefined()
   expect(OldUsers.status).toEqual(200)


  
   await funcs.createInvestor('Investor','misho','male','Egyptian','National ID','24rrcf4wgwchrddn2','1998-04-02','Masr el gedida','besdddddrr@gmail.com','oppdnnwd44c0cle')
   

  
   var newUsers = await funcs.getUsers()
   console.log(newUsers.data)
   expect(newUsers).toBeDefined()
   expect(newUsers.status).toEqual(200)

   expect(newUsers.data.data).toHaveLength(oldLength+1)
 

   await funcs.DeleteUser(newUsers.data.data[newUsers.data.data.length-1]._id)
   //await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
   
  }
  catch(error){
    console.log(error)
  }

})

test('check if Lawyer or Reviewer is created',async()=>{

  try{
 
   //expect.assertions(5)
   var OldUsers=await funcs.getUsers()
   console.log(OldUsers.data)
   var oldLength=OldUsers.data.data.length  
   expect(OldUsers).toBeDefined()
   expect(OldUsers.status).toEqual(200)

   
   await funcs.createLawyerOrReviewer('Lawyer','momo','male','Egyptian','National ID','2444ff4wgwchrddn2','1998-04-02','Masr el gedida','w4dffuyyyyy@gmail.com','oppdwwfn44cccle','35666266662')
   

  
   var newUsers = await funcs.getUsers()
   console.log(newUsers.data)
   expect(newUsers).toBeDefined()
   expect(newUsers.status).toEqual(200)

   expect(newUsers.data.data).toHaveLength(oldLength+1)
 

   await funcs.DeleteUser(newUsers.data.data[newUsers.data.data.length-1]._id)
   
  }
  catch(error){
    console.log(error)
  }

})