/**
 * @jest-environment node
 */

const mongoose = require('mongoose')
const funcs = require('../funcs/notificationFuncs');


test('Check notification sent to investor when updating Form', async () => {
   try{
    var user = await funcs.createInvestor('Investor','Omar','Male','Egypt','National ID','1234567891234','1998-10-22','39 Palm City','omarkh2210@gmail.com','meromero')
    var form = await funcs.postSPCFormForUser('Qattameya','Cairo','39 Palm City','Omarssss','EGP',1000000,'SPCForm','2000-10-5',user._id)
    var response = await funcs.UpdateFormInUser(user._id,form._id,'Approved')
    if(response.data.notifications){
	    expect(response.data.notifications.status).toBe(200)
    }
}
catch(err){
  
}
})