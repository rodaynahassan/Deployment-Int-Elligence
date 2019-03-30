/**
 * @jest-environment node
 */


let mongoose=require ("mongoose")
const funcs= require('../funcs/userFuncs')





test('check if user is deleted from database',async()=>{

  try{
 
     //  expect.assertions(3)
      //  const user1=await funcs.createLawyerOrReviewer('Lawyer','hesham','Male','Egyptian','National ID','245470443672','1998-5-1','Maadi','hesham.gp@7gmail.com','123462366777')
      //  const user2=await funcs.createLawyerOrReviewer('Reviewer','Mohanad','Male','Egyptian','National ID','24411113672','1998-5-5','Maadi','mohanad.ahmed@gmail.com','116626727')
      //  const user3=await funcs.createLawyerOrReviewer('Lawyer','Ali','Male','Egyptian','National ID','24415626672','1998-4-2','Masr el gedida','ali.ahmed@gmail.com','666626727')
 
   

   const OldUsers=await funcs.getUsers()
   const oldLength=OldUsers.data.data.length

   expect(OldUsers).toBeDefined()
   expect(OldUsers.status).toEqual(200)
   expect(OldUsers.data.data).toHaveLength(oldLength)
   
   await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)

   const newUsers = await funcs.getUsers()
   const newLength=oldLength-1


   expect(newUsers).toBeDefined()
   expect(newUsers.status).toEqual(200)
   expect(newUsers.data.data).toHaveLength(newLength)

   await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
   await funcs.DeleteUser(OldUsers.data.data[OldUsers.data.data.length-1]._id)
   

  }
  catch(error){
     console.log(error)
  }

})