/**
 * @jest-environment node
 */



let mongoose=require ("mongoose")
const funcs= require('../../funcs/userFuncs')



test('', async()=>{
  expect.assertions(1)
  const res =await funcs.createUser()
  console.log(res.data.data[0])
  expect(res.data.data.name).toBeEqual('Mohamed')


})