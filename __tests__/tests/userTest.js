/** 
 * @jest-environment node
*/
var mongoose=require('mongoose');
var axios=require('axios');
const funcs = require('../../funcs/userFuncs');


//test get SSCform by company name
test('test get form by company name ', async () => {
    try {

    await funcs.createForm('omarKhaled1','cairoo','cairo','nasrcity','pounds',600000,'SSCForm','2019-07-08',mongoose.Types.ObjectId('5c9fbb2d026fe76c64089c52'),[{ name:"nadaa", type:"coo",gender:"female",nationality:"egyptian",identificationType:"bnghtydyf",identificationNumber:"1234456788",birthdate:"2019-06-07",address:"nasrrrr",typeOfManagers:"khihhu"}] )
    const res = await funcs.getAllForms()
    expect(res.data).toBeDefined()
    expect(res.status).toEqual(200)
    const res2 = await funcs.GetFormByCompanyName(res.data.data[res.data.data.length-1].companyName)
    expect(res2.data.data[res2.data.data.length-1].companyName).toBe('omarKhaled1')
    expect(res2.data.data[res2.data.data.length-1].companyGovernorate).toBe('cairoo')
    expect(res2.data.data[res2.data.data.length-1].companyCity).toBe('cairo')
    expect(res2.data.data[res2.data.data.length-1].companyAddress).toBe('nasrcity')
    expect(res2.data.data[res2.data.data.length-1].currency).toBe('pounds')
    expect(res2.data.data[res2.data.data.length-1].equityCapital).toBe(600000)
    expect(res2.data.data[res2.data.data.length-1].type).toBe('SSCForm')
    expect(res2.data.data[res2.data.data.length-1].creationDate).toBe('2019-07-08T00:00:00.000Z')
    expect(res2.data.data[res2.data.data.length-1].userId).toBe('5c9fbb2d026fe76c64089c52')
    expect(res2.data.data[res2.data.data.length-1].SSCManagers).toEqual([{ name:"nadaa", type:"coo",gender:"female",nationality:"egyptian",identificationType:"bnghtydyf",identificationNumber:"1234456788",birthdate:"2019-06-07",address:"nasrrrr",typeOfManagers:"khihhu"}] )

    }
    catch(error){
      console.log(error)
    }
})

//test get SPCForm by company name
test('test get SPCForm by company name', async () => {
    try {

    await funcs.createForm('comanyunique','cairoo','cairo','nasrcity','pounds',600000,'SSCForm','2019-07-08',mongoose.Types.ObjectId('5c9fbb2d026fe76c64089c52') )
    const res = await funcs.getAllForms()
    expect(res.data).toBeDefined()
    expect(res.status).toEqual(200)
    const res2 = await funcs.GetFormByCompanyName(res.data.data[res.data.data.length-1].companyName)
    expect(res2.data.data[res2.data.data.length-1].companyName).toBe('comanyunique')
    expect(res2.data.data[res2.data.data.length-1].companyGovernorate).toBe('cairoo')
    expect(res2.data.data[res2.data.data.length-1].companyCity).toBe('cairo')
    expect(res2.data.data[res2.data.data.length-1].companyAddress).toBe('nasrcity')
    expect(res2.data.data[res2.data.data.length-1].currency).toBe('pounds')
    expect(res2.data.data[res2.data.data.length-1].equityCapital).toBe(600000)
    expect(res2.data.data[res2.data.data.length-1].type).toBe('SSCForm')
    expect(res2.data.data[res2.data.data.length-1].creationDate).toBe('2019-07-08T00:00:00.000Z')
    expect(res2.data.data[res2.data.data.length-1].userId).toBe('5c9fbb2d026fe76c64089c52')
    

    }
    catch(error){
      
      console.log(error)
    
    }


})

//test adding comments as a lawyer
test('test adding comments as a lawyer', async () => {
    
    try{
        //expect.assertions(3)
        await funcs.createForm('hhaabb','cairoo','cairo','nasrcity','pounds',600000,'SPCForm','2019-07-08',mongoose.Types.ObjectId('5ca004f3d953e632a4591917') )
        var res =  await funcs.getAllForms()
        const a = res.data.data[res.data.data.length-1].userId
        const res2 = await funcs.putFormLawyerComments(["HELLO"],mongoose.Types.ObjectId('5ca004f3d953e632a4591917'),res.data.data[res.data.data.length-1]._id)
        console.log(res2.data.data)
        expect(res.status).toEqual(200)
        console.log(res.data.data[res.data.data.length-1])
        //expect(res.data.data[res.data.data.length-1].lawyerComments).toEqual(['nada'])
  }catch(error){
    console.log(error)
  }
  });


  //test adding comments as a reviewer
  test('test adding comments as a reviewer', async () => {
    
    try{
        await funcs.createForm('rwaaabarr','cairoo','cairo','nasrcity','pounds',600000,'SPCForm','2019-07-08',mongoose.Types.ObjectId('5ca004f3d953e632a4591917') )
        var res =  await funcs.getAllForms()
        const a = res.data.data[res.data.data.length-1].userId
        const res2 = await funcs.putFormReviewerComments(['HELLmO'],mongoose.Types.ObjectId('5ca004f3d953e632a4591917'),res.data.data[res.data.data.length-1]._id)
        //console.log(res2.data.data)
        expect(res.status).toEqual(200)
        console.log(res.data.data[res.data.data.length-1])
        //expect(res.data.data[res.data.data.length-1].lawyerComments).toEqual(['nada'])
  }catch(error){
    console.log(error)
  }
  });














   



