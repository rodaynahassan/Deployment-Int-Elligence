/** 
 * @jest-environment node
*/
var mongoose=require('mongoose');
var axios=require('axios');
const funcs = require('../funcs/formFuncs');

test ('get form by company name', async()=>
{
    const forms=await funcs.getFormByCompanyName("ITI")
    expect(forms.data.data[0].companyCity).toEqual("tagmo3")
   
})

// let SSCForm1 = {
//     companyName : "nadalabib",
//     companyGovernorate : "cairoo",
//     companyAddress : "nasr city",
//     companyCity : "cairo",
//     currency : "pounds",
//     equityCapital : 600000,
//     type : "SSC",
//     SSCManagers : [ "nadaa", "coo","female","egyptian","bnghtydyf","1234456788","2019-08-07","nasrrrr","khihhu"],
//     creationDate : "2019-09-06",
//     userId : "5c9f95f39f48fd001751581d"
// };

// //test get form by company name
// test ('get form by company name' , async () => {
    //expect.assertions(10);
    //const postForm = await funcs.postform(SSCForm1)
    // const Form = await funcs.getForm(postForm.companyName)
    // expect(postForm.data.data.companyName).toEqual("nadalabib")
    // expect(postForm.data.data.companyGovernorate).toEqual("cairoo")
    // expect(postForm.data.data.companyAddress).toEqual("nasr city")
    // expect(postForm.data.data.companyCity).toEqual("cairo")
    // expect(postForm.data.data.currency).toEqual("pounds")
    // expect(postForm.data.data.equityCapital).toEqual("600000")
    // expect(postForm.data.data.type).toEqual("SSC")
    // expect(postForm.data.data.SSCManagers).toEqual([ "nadaa", "coo","female","egyptian","bnghtydyf","1234456788","2019-08-07","nasrrrr","khihhu"])
    // expect(postForm.data.data.creationDate).toEqual("2019-09-06")
    // expect(postForm.data.data.userId).toEqual("5c9f95f39f48fd001751581d")
//});

//test get a SSCform by company name
// test('test get form by company name', async () => {
    
    
//     await funcs.createForm('nadalabib','cairoo','cairo','nasr city','pounds','600000','SSC','2019-07-08','5c9f95f39f48fd001751581d',[ "nadaa", "coo","female","egyptian","bnghtydyf","1234456788","2019-08-07","nasrrrr","khihhu"] )

    // const res = await funcs.getByCompanyName('companyName')
    // expect(res.data).toBeDefined()
    // expect(res.status).toEqual(200);
    // expect(res).toBeInstanceOf(Form);
    // expect(res.data.data.companyName).toBe('nadalabib');
    // expect(res.data.data.companyGovernorate).toEqual('cairoo');
    // expect(res.data.data.companyCity).toEqual('cairo');
    // expect(res.data.data.companyAddress).toEqual('nasr city');
    // expect(res.data.data.currency).toEqual('pounds');
    // expect(res.data.data.equityCapital).toEqual('600000');
    // expect(res.data.data.type).toEqual('SSC');
    // expect(res.data.data.creationDate).toEqual('2019-07-08')
    // expect(res.data.data.userId).toEqual('5c9f95f39f48fd001751581d')
    // expect(res.data.data.SSCManagers).toEqual([ "nadaa", "coo","female","egyptian","bnghtydyf","1234456788","2019-08-07","nasrrrr","khihhu"]);
    
   
//});




//test get a SPCform by company name
// test('test get form by company name', async () => {
    
//     try{
//      await funcs.postForm('Labibbb','cairo','cairoo','nasrcity','pounds','1234','SPCForm'
//      ,'2019-07-08','5c9d304f24db101620efea70' )
    
//     const res2 = await funcs.getByCompanyName()
//     expect(res.status).toEqual(200);
//     expect.assertions(1)
//     expect(res2).toBeInstanceOf(Form);
//     expect(res2.data.data[1].companyName).toBeDefined();
//     expect(res2.data.data[1].companyName).toEqual('Labibbb');
//     expect(res2.data.data[1].companyGovernorate).toBeDefined();
//     expect(res2.data.data[1].companyGovernorate).toEqual('cairo');
//     expect(res2.data.data[1].companyCity).toBeDefined();
//     expect(res2.data.data[1].companyCity).toEqual('cairoo');
//     expect(res2.data.data[1].companyAddres2s).toBeDefined();
//     expect(res2.data.data[1].companyAddres2s).toEqual('nasrcity');
//     expect(res2.data.data[1].currency).toBeDefined();
//     expect(res2.data.data[1].currency).toEqual('pounds');
//     expect(res2.data.data[1].equityCapital).toBeDefined();
//     expect(res2.data.data[1].equityCapital).toEqual('1234');
//     expect(res2.data.data[1].type).toBeDefined();
//     expect(res2.data.data[1].type).toEqual('SSCForm');
//     expect(res2.data.data[1].creationDate).toBeDefined();
//     expect(res2.data.data[1].creationDate).toEqual('2019-07-08')
//     expect(res2.data.data[1].userId).toBeDefined();
//     expect(res2.data.data[1].userId).toEqual('5c9d304f24db101620efea70')
//     expect(res2.data.data[1].SSCManagers).toBeDefined();
//     expect(res2.data.data[1].SSCManagers).toEqual([]);

//     }catch(error){
//       console.log(error)
//     }
// })

//test adding lawyer comments to a form 
//  test('test adding lawyer comments',async () =>{


//  })

// //test adding reviewer comments to a form 
// test('test adding reviewer comments',async () =>{


//  })
 
//  //test create external entity
//  test('test creating external entity' ,async () =>{
   

//  })
































