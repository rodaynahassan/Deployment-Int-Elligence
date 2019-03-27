const funcs = require('./fn');

//test get all cases
test('get all cases', async () => {
    expect.assertions(1)
    const Case =  await funcs.getCases()
    expect(Case.status.toEqual(200));
    expect(Case.toBeInstanceOf('array'));
    expect(Case.data).objectContaining(Case);
})

//test get a certain case by id
test('get a certain case by id', async () => {
    expect.assertions(1)
    const Case =  await funcs.getCases()
    const caseId = req.params.id  //ely da5ely fel route
    expect(Case.toContainEqual(caseId))
    expect(Case.status.toEqual(200));
    expect(Case.toBeInstanceOf(Function));
    expect(Case.data.creationDate).toEqual(expect.anything());
    expect(Case.data.form).toEqual(expect.anything());
    expect(Case.data.companyName).toEqual(expect.toBeLessThan(50));
    expect(Case.data.userId).toEqual(expect.anything());
})

//test get a certain case by companyname
test('get a certain case by companyname', async () => {
    expect.assertions(1)
    const Case =  await funcs.getCases()
    const cname = req.params.companyName; //ely da5ely fel route
    expect(Case.status.toEqual(200));
    expect(Case.toBeInstanceOf(Function));
    expect(Case.data.creationDate).toContainEqual(cname);
    expect(Case.data.form).toEqual(expect.anything());
    expect(Case.data.companyName).toEqual(expect.toBeLessThan(50));
    expect(Case.data.userId).toEqual(expect.anything());
})

//delete a certain case
test('delete a certain case by id', async () => {
    expect.assertions(1)
    const Case =  await funcs.getCases()
    const caseId = req.params.id  //ely da5ely fel route
    expect(Case.status.toEqual(200));
    expect(Case.toContainEqual(caseId))
})