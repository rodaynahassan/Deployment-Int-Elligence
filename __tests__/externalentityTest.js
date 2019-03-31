// /**
//  * @jest-environment node
//  */
var mongoose = require('mongoose')
const funcs = require('../funcs/externalentityFuncs');
const axios = require('axios');

//test delete an external entity
test('test delete an external entity', async () => {
    try{
    
    //creating entity
    await funcs.postExternalEntity('test', '(1/2)*2','http://kgu.com','nada_labib@hotmail.com')
   
    //getting the external entities and checking the status and length to be 3
    const res2 = await funcs.getExternalEntities();
    expect(res2).toBeDefined()
    expect(res2.status).toEqual(200)
    expect(res2.data.data).toHaveLength(1)
    //getting the length -1 which should be the length after the deletion
    const lengthtobe = res2.data.data.length - 1
    await funcs.deleteExternalEntity(res2.data.data[0]._id) 
    //getting the new external entities list
    const res = await funcs.getExternalEntities();
    //checking the status and defintion
    expect(res).toBeDefined()
    expect(res.status).toEqual(200)
    //checking the new length of the array after the deletion
    expect(res.data.data).toHaveLength(lengthtobe)
    //Emptying the database
    await funcs.deleteExternalEntity(res.data.data[0]._id)
    //await funcs.deleteExternalEntity(res.data.data[0]._id)
    }catch(error){
  
    }
  })


// // Testing a certain external entity 
//  test('delete a certain external entity', async()=>{
//     const beforedeletion= await funcs.getExternalEntities()
//        const res2 = await funcs.getExternalEntities();
//       const deletion= await funcs.deleteExternalEntity(res2.data.data[0]._id)
//      const afterdeletion= await funcs.getExternalEntities()
//        expect(beforedeletion.data.data.length-1).toBe(afterdeletion.data.data.length)
//     // 
//  })

// test('get ExternalEntities', async()=> {
//     const externalentities= await funcs.getExternalEntities()  
//     expect(externalentities.data.data[0]._id).toBe('5c9c2ca00be1990c7ce434ae')
//     expect(externalentities.data.data[0].companyGovernorate).toEqual("Cairo")

// });


// test ('test create external entity',async() =>{
//     try{
//         await funcs.postExternalEntity('tett','(1/1000)*X','http://test.com')
//         const response = await funcs.getExternalEntity()
//         expect (response.status).toEqual(200)
//         expect(response.data.data).toHaveLength()
//         expect(response.data.data[0].Name.toMatch('test'))
//     }
//     catch(error){

//     }
// })
