/**
 * @jest-environment node
 */

var mongoose = require('mongoose')
const funcs = require('../funcs/formFuncs');

  test('GET an approved Form (Company)', async () => {
    //await funcs.postForm('Cairo','Nasr City' ,'Moez Eldawla Street','01002277575','Akshe3832','Youssr It Keda','YOYO','Dollar',50000,'SPCForm','Approved','12-01-21019', '5c9d304f24db101620efea70')
    const forms = await funcs.getForms()
    const response =  await funcs.getCompanyOfAnInvestor(forms.data.data[0].userId)
    expect(response.data.data[0].status).toBe('Approved');
  })