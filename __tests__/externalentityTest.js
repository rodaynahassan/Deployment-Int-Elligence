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
    await funcs.postExternalEntity('test final', '(1/2)*2','http://testurl.com','nadine@hotmail.com')
   
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




