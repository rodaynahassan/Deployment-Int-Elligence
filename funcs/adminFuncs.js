const axios = require('axios');

const functions = {
    postAdmin: async (name1,gender1,nationality1,identificationType1,identificationNumber1,password1,birthdate1,address1,email1) => {
         await axios({
            method:'post',
            url:'http://localhost:3000/routes/api/admins/',
            data: {
            name: name1,
            gender: gender1,
            nationality: nationality1,
            identificationType: identificationType1,
            identificationNumber: identificationNumber1,
            password: password1,
            birthdate: birthdate1,
            address: address1,
            email:email1
            }
            })
        },
        loginAdmin: async (password1,email1) => {
            await axios({
               method:'post',
               url:'http://localhost:3000/routes/api/admins/login',
               data: {
               password: password1,
               email:email1
               }
               })
           },
           deleteAdmin: async (DeleteID) => {
            await axios.delete('http://localhost:/routes/api/admins/'+ DeleteID)
            
        },
    
            getAdmins: async() =>{
                const admins = await axios.get('http://localhost:3000/routes/api/admins/')
                  return admins
            },
            getAdminByID: async(AdminID) =>{
                admin = await axios({
                    method:'get',
                    url:'http://localhost:3000/routes/api/admins/'+AdminID
                  })
                  return admin
            },
            createForm : async (companyName1,companyGovernorate1,companyCity1,companyAddress1,currency1,equityCapital1,type1,creationDate1,userId1,SSCManagers1) => {
                await axios({    
                     method :'post',
                     url :'http://localhost:3000/routes/api/forms/',
                     data : {
                         companyName : companyName1,
                         companyGovernorate : companyGovernorate1,
                         companyCity : companyCity1,
                         companyAddress : companyAddress1,
                         currency : currency1,
                         equityCapital : equityCapital1,
                         type : type1,
                         creationDate : creationDate1,
                         userId : userId1,
                         SSCManagers : SSCManagers1
                     }
                 })
                 },
                 GetFormByCompanyName : async (companyName) => { 
                 const forms = await axios({
                 method : 'get',
                 url:'http://localhost:3000/routes/api/admins/getByCompanyName/'+companyName ,
                 //headers:{'Content-Type':'application/json'}
         
             });
             return forms
             },    
                 getAllForms: async () => { 
                 const forms = await axios({
                 method : 'get',
                 url:'http://localhost:3000/routes/api/forms/',
         
             });
             return forms 
         },
        
};
module.exports = functions;

jest.setTimeout(40000);
