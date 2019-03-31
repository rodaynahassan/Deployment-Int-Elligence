/**
 * @jest-environment node
 */

 const funcs = require('../../funcs/externalentityFuncs');
 const axios = require('axios')
 //test create externat entity 
//  test ('test create externat entity ',async() =>{
//        try{
//            await funcs.postExternalEntity('GAFI','(1/1000)*X','http://gafi.com','nadalabib@gmail.com')
//            const response = await funcs.getExternalEntity()
//            expect (response.status).toEqual(200)
//            expect(response.data.data).toHaveLength()
//            expect(response.data.data[res.data.data.length-1].Name).toMatch('GAFI')
//        }
//        catch(error){

//        }
//  })


//test get external entity by name
// test ('test get  external entity by its name', async()=>
// {
//     await funcs.postExternalEntity('ali','(1/9)+x','http:huyt.ccom', 'nadalabib@gmail.com')
//     const res = await funcs.getExternalEntity()
//     expect(res.data).toBeDefined()
//     expect(res.status).toEqual(200)
//     const res2 = await funcs.getExternalEntityByName(res.data.data[res.data.data.length-1].Name)
//     expect(res2.data.data[res2.data.data.length-1].Name).toBe('ali')
//     expect(res2.data.data[res2.data.data.length-1].Equation).toBe('(1/9)+x')
//     expect(res2.data.data[res2.data.data.length-1].Api).toBe('http:huyt.ccom')
// });

// //test get  external entity by it's Api
// test ('test get  external entity by its Api', async()=>
// { 
//     try{
//     await funcs.postExternalEntity('rodayna','(1/9)+x','http:huyyyt.ccom','nadalabib@gmail.com')
//     const res = await funcs.getExternalEntity()
//     expect(res.data).toBeDefined()
//     expect(res.status).toEqual(200)
//     const res2 = await funcs.getExternalEntityByAPI(res.data.data[res.data.data.length-1].Api)
//     expect(res2.data.data[res2.data.data.length-1].Name).toBe('rodayna')
//     expect(res2.data.data[res2.data.data.length-1].Equation).toBe('(1/9)+x')
//     expect(res2.data.data[res2.data.data.length-1].Api).toBe('http:huyyyt.ccom')
//     }
//     catch(err){
//         console.log(err)
//     }
// })

