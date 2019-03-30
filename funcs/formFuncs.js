const axios = require('axios')
const mongoose = require('mongoose')
const Form = require('../Models/Form')
const functions = 
{
    // getForm : async(companyName) => {
    //     const Form = await axios.get("http://localhost:3000/api/forms/getByCompanyName/"+companyName);
    //     return Form;
    // },

    // postform : async(form) => {
    //     const response = await axios.post("http://desolate-oasis-18053.herokuapp.com/routes/api/forms/");
    //     return response ;
    // }

    // createForm : async (companyName1,companyGovernorate1,companyCity1,companyAddress1,currency1,equityCapital1,type1,creationDate1,userId1,SSCManagers1) => {
    //     axios({
    //         method :'post',
    //         url :'http://desolate-oasis-18053.herokuapp.com/routes/api/forms/',
    //         data : {
    //             companyName : companyName1,
    //             companyGovernorate : companyGovernorate1,
    //             companyCity : companyCity1,
    //             companyAddress : companyAddress1,
    //             currency : currency1,
    //             equityCapital : equityCapital1,
    //             type : type1,
    //             creationDate : creationDate1,
    //             userId : userId1,
    //             SSCManagers : SSCManagers1
    //         }
    //     })
    //     },
        getFormByCompanyName : async (companyName) => { 
        const forms = await axios({
        method : 'get',
        url:'http://desolate-oasis-18053.herokuapp.com/routes/api/forms/getByCompanyName/' + companyName,
        headers:{'Content-Type':'application/json'}

    });
    //return forms 

}}

module.exports = functions ;

jest.setTimeout(40000);