const axios = require('axios');

const functions = {
    postAdmin: async (name1,gender1,nationality1,identificationType1,identificationNumber1,password1,birthdate1,address1) => {
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
            address: address1
            }
            })
        },
        deleteAdmin: async (DeleteID) => {
            await axios.delete('http://localhost:3000/routes/api/admins/'+ DeleteID)
            
        },
        putAdmin: async (id,name1,gender1,nationality1,identificationType1,identificationNumber1,password1,birthdate1,address1) => {
           
            await axios({
                method:'put',
                url:'http://localhost:3000/routes/api/admins/'+id ,
                data:
                {
                name: name1,
                gender: gender1,
                nationality: nationality1,
                identificationType: identificationType1,
                identificationNumber: identificationNumber1,
                password: password1,
                birthdate:birthdate1,
                address: address1
                }
                })
            },
            getAdmins: async() =>{
                const admins = await axios.get('http://localhost:3000/routes/api/admins/')
                // admins = await axios({
                //     method:'get',
                //     url:'http://desolate-oasis-18053.herokuapp.com/routes/api/admins/'
                //   })
                  return admins
            },
            getAdminByID: async(AdminID) =>{
                const admin = await axios.get('http://localhost:3000/routes/api/admins/getById/'+AdminID)
                // admin = await axios({
                //     method:'get',
                //     url:'http://localhost:3000/routes/api/admins/'+AdminID
                //   })
                  return admin
            }
        
};
module.exports = functions;

jest.setTimeout(50000);