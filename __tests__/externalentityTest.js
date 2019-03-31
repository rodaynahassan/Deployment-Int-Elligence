// /**
//  * @jest-environment node
//  */
var mongoose = require('mongoose')
const funcs = require('../funcs/externalentityFuncs');
const axios = require('axios');

//test create externat entity 
 test ('test create externat entity ',async() =>{
       try{
           await funcs.postExternalEntity('GAFI','(1/1000)*X','http://gafi.com','nadalabib@gmail.com')
           const response = await funcs.getExternalEntity()
           expect (response.status).toEqual(200)
           expect(response.data.data).toHaveLength()
           expect(response.data.data[res.data.data.length-1].Name).toMatch('GAFI')
       }
       catch(error){

       }
 })


//test get external entity by name
test ('test get  external entity by its name', async()=>
{
    await funcs.postExternalEntity('ali','(1/9)+x','http:huyt.ccom', 'nadalabib@gmail.com')
    const res = await funcs.getExternalEntity()
    expect(res.data).toBeDefined()
    expect(res.status).toEqual(200)
    const res2 = await funcs.getExternalEntityByName(res.data.data[res.data.data.length-1].Name)
    expect(res2.data.data[res2.data.data.length-1].Name).toBe('ali')
    expect(res2.data.data[res2.data.data.length-1].Equation).toBe('(1/9)+x')
    expect(res2.data.data[res2.data.data.length-1].Api).toBe('http:huyt.ccom')
});

//test get  external entity by it's Api
test ('test get  external entity by its Api', async()=>
{ 
    try{
    await funcs.postExternalEntity('rodayna','(1/9)+x','http:huyyyt.ccom','nadalabib@gmail.com')
    const res = await funcs.getExternalEntity()
    expect(res.data).toBeDefined()
    expect(res.status).toEqual(200)
    const res2 = await funcs.getExternalEntityByAPI(res.data.data[res.data.data.length-1].Api)
    expect(res2.data.data[res2.data.data.length-1].Name).toBe('rodayna')
    expect(res2.data.data[res2.data.data.length-1].Equation).toBe('(1/9)+x')
    expect(res2.data.data[res2.data.data.length-1].Api).toBe('http:huyyyt.ccom')
    }
    catch(err){
        console.log(err)
    }
})





//test delete an external entity
test('test delete an external entity', async () => {
    try{
    
    //creating entity
    await funcs.postExternalEntity('test final', '(1/2)*2','http://testurl.com','nadine@hotmail.com')
   
    //getting the external entities and checking the status and length to be 3
    const res2 = await funcs.getExternalEntity();
    expect(res2).toBeDefined()
    expect(res2.status).toEqual(200)
    expect(res2.data.data).toHaveLength(1)
    //getting the length -1 which should be the length after the deletion
    const lengthtobe = res2.data.data.length - 1
    await funcs.deleteExternalEntity(res2.data.data[0]._id) 
    //getting the new external entities list
    const res = await funcs.getExternalEntity();
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




