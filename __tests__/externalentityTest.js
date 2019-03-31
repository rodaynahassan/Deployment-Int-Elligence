/**
 * @jest-environment node
 */
var mongoose = require('mongoose')
const axios = require('axios');
const funcs = require('../funcs/externalentityFuncs');

 test('Get all external entities', async () => {
    // expect.assertions(1)
    const res = await funcs.getExternalEntity()
    const length = res.data.data.length
    await funcs.postExternalEntity('GAFI','(1/1000)*x','http://yoyo.com','gafi@hotmail.com')
    const response =  await funcs.getExternalEntity()
    expect(response.status).toEqual(200)
    expect(response.data.data).toHaveLength(length+1)
  })

  test('Get a certain external entity ', async () => {
    try {
      await funcs.postExternalEntity('GAFI','(1/1000)*x','http://youssr.com','gafi@hotmail.com')
      const res = await funcs.getExternalEntity()
      expect(res.data).toBeDefined()
      expect(res.status).toEqual(200)
      const res2 = await funcs.getExternalEntityById(res.data.data[res.data.data.length-1]._id)
      expect(res2.data.data.Name).toBe('GAFI')
      expect(res2.data.data.Equation).toBe('(1/1000)*x')
      expect(res2.data.data.Api).toBe('http://youssr.com')
      expect(res2.data.data.Email).toBe('gafi@hotmail.com')
    }
  
    catch(error){
      
      console.log(error)
    
    }
  })
  test('Update an external entity', async () =>{
    await funcs.postExternalEntity('Entities','1/50000','http://entity.com','entities@hotmail.com')
    const res = await funcs.getExternalEntity()
    expect(res).toBeDefined()
    expect(res.status).toEqual(200)
    await funcs.updateExternalEntityByID(res.data.data[res.data.data.length-1]._id)
    const res2 = await funcs.getExternalEntityById(res.data.data[res.data.data.length-1]._id)
    expect(res2.data.data.Equation).toMatch('x+2=4')
  })