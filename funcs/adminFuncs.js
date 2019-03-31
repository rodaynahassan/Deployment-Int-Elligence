const axios = require('axios');

const functions = {
    postAdmin: async (name1,gender1,nationality1,identificationType1,identificationNumber1,password1,birthdate1,address1,email1) => {
         axios({
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
            axios({
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
            }
        
};
module.exports = functions;

jest.setTimeout(40000);