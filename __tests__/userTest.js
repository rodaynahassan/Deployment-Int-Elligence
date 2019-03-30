/**
 * @jest-environment node
 */


const funcs= require('../funcs/userFuncs')





// test('check if a user is deleted from database',async()=>{

//   try{
 
//        expect.assertions(6)
//       //  const user1=await funcs.createLawyerOrReviewer('Lawyer','hesham','Male','Egyptian','National ID','245470443672','1998-5-1','Maadi','hesham.gp@7gmail.com','123462366777')
//       //  const user2=await funcs.createLawyerOrReviewer('Reviewer','Mohanad','Male','Egyptian','National ID','24411113672','1998-5-5','Maadi','mohanad.ahmed@gmail.com','116626727')
//        // const user3=await funcs.createLawyerOrReviewer('Lawyer','misho','Male','Egyptian','National ID','2441fvv26672','1998-4-2','Masr el gedida','alxi.ahmed@gmail.com','66v6626727')
 
   

//    const OldUsers=await funcs.getUsers()
//    const oldLength=OldUsers.data.data.length        

//    console.log(OldUsers.data)

//    expect(OldUsers).toBeDefined()
//    expect(OldUsers.status).toEqual(200)
//    expect(OldUsers.data.data).toHaveLength(oldLength)
   




//    await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)    //delete an existing user
  

//    const newUsers = await funcs.getUsers()
//    const newLength=oldLength-1
//    console.log(newUsers.data)

//    expect(newUsers).toBeDefined()
//    expect(newUsers.status).toEqual(200)
//    expect(newUsers.data.data).toHaveLength(newLength)                              //check if length will be less by 1




//   //  await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
//   //  await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
   

//   }
//   catch(error){
//     console.log(error)
//   }

// })








// test('check if delete a user that is not in the database will be deleted or not',async()=>{

//   try{
 
//        expect.assertions(2)
//       //  const user1=await funcs.createLawyerOrReviewer('Lawyer','hesham','Male','Egyptian','National ID','245470443672','1998-5-1','Maadi','hesham.gp@7gmail.com','123462366777')
//       //  const user2=await funcs.createLawyerOrReviewer('Reviewer','Mohanad','Male','Egyptian','National ID','24411113672','1998-5-5','Maadi','mohanad.ahmed@gmail.com','116626727')
//        // const user3=await funcs.createLawyerOrReviewer('Lawyer','misho','Male','Egyptian','National ID','2441fvv26672','1998-4-2','Masr el gedida','alxi.ahmed@gmail.com','66v6626727')
 
   

//    const OldUsers=await funcs.getUsers()
//    const oldLength=OldUsers.data.data.length        

//    console.log(OldUsers.data)

//    expect(OldUsers).toBeDefined()
//    expect(OldUsers.status).toEqual(200)
//    expect(OldUsers.data.data).toHaveLength(oldLength)
   


   

//    await funcs.DeleteUser('666666666666')         //try to delete non existing user
  

//    const newUsers = await funcs.getUsers()
   
//    console.log(newUsers.data)

//    expect(newUsers).toBeDefined()
//    expect(newUsers.status).toEqual(200)
//    expect(newUsers.data.data).not.toHaveLength(newLength)       //check if length will change

//   //  await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
//   //  await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
   

//   }
//   catch(error){
//     console.log(error)
//   }

// })










// test('check if Lawyer or Reviewer is created',async()=>{

//   try{
 
//    expect.assertions(5)
//    var OldUsers=await funcs.getUsers()
//    console.log(OldUsers.data)
//    var oldLength=OldUsers.data.data.length  
//    expect(OldUsers).toBeDefined()
//    expect(OldUsers.status).toEqual(200)

//    //everytime you should change unique values  in the next line so an investor can be created 
//    await funcs.createLawyerOrReviewer('Lawyer','yaseen','Female','Egyptian','National ID','2444544wgwchrddn2','1998-04-02','Masr el gedida','w4d2uuyyyyy@gmail.com','oppdwwwn44cccle')
   

  
//    var newUsers = await funcs.getUsers()
//    console.log(newUsers.data)
//    expect(newUsers).toBeDefined()
//    expect(newUsers.status).toEqual(200)

//    expect(newUsers.data.data).toHaveLength(oldLength+1)
 

//    await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
//    //await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
   
//   }
//   catch(error){
//     console.log(error)
//   }

// })










test('check if Investor is created',async()=>{

  try{
 
   expect.assertions(5)
   var OldUsers=await funcs.getUsers()
   console.log(OldUsers.data)
   var oldLength=OldUsers.data.data.length  
   expect(OldUsers).toBeDefined()
   expect(OldUsers.status).toEqual(200)


   //everytime you should change unique values  in the next line so an investor can be created 
   await funcs.createInvestor('Investor','beshoy','male','Egyptian','National ID','2411544wgwchrddn2','1998-04-02','Masr el gedida','beshpy@gmail.com','oppdwwwn44c0cle')
   

  
   var newUsers = await funcs.getUsers()
   console.log(newUsers.data)
   expect(newUsers).toBeDefined()
   expect(newUsers.status).toEqual(200)

   expect(newUsers.data.data).toHaveLength(oldLength+1)
 

   //await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
   //await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
   
  }
  catch(error){
    console.log(error)
  }

})










