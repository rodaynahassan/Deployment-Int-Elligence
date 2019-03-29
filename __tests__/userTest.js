/**
 * @jest-environment node
 */



let mongoose=require ("mongoose")
const funcs= require('../funcs/userFuncs')



// test('', async()=>{
//   expect.assertions(1)
//   const res =await funcs.createUser()
//   console.log(res.data.data[0])
//   expect(res.data.data.name).toBeEqual('Mohamed')


// })



test('check if user is deleted',async()=>{



  try{
  
    
  //expect.assertions(2)
  await funcs.createLawyerOrReviewer('Lawyer','Adel','Male','Egyptian','National ID','24415443672','1998-5-1','Maadi','adel.gg@gmail.com','1234666777')
  // const user2=await funcs.createLawyerOrReviewer('Reviewer','Mohanad','Male','Egyptian','National ID','24411113672','1998-5-5','Maadi','2622548838','26116w6111g992','mohanad.ahmed@gmail.com','116626727',[])
  // const user3=await funcs.createLawyerOrReviewer('Lawyer','Ali','Male','Egyptian','National ID','24415626672','1998-4-2','Masr el gedida','2673788838','2666w6gg7g992','ali.ahmed@gmail.com','666626727',[])
 
  const r =await  funcs.getUsers()
  console.log(r.data)
  console.log(r.status)



    
  //  const OldUsers=await funcs.getUsers()
  //  console.log(OldUsers.data)
  // expect(OldUsers).toBeDefined()
  // expect(OldUsers.status).toEqual(200)
  // expect(OldUsers.data.data).toHaveLength(3)
  
  // const toBeLength=OldUsers.data.data.length-1
  //await funcs.DeleteUser(user1._id)
  // await funcs.DeleteUser(OldUsers.data.data[0]._id)



  // const newUsers = await funcs.getUsers()
  // expect(newUsers).toBeDefined()
  // expect(newUsers.status).toEqual(200)

  // expect(res.data.data).toHaveLength(toBeLength)
  }



  
  catch(error){

    
     console.log(error)
    // expect(error.OldUsers).toBeGreaterThanOrEqual(400)

  }

})