const axios = require('axios');
const funcs = {
        createAdmin: async () => {
        axios({
        method:'post',
        url : 'http://desolate-oasis-18053.herokuapp.com/routes/api/admins',
        data: {
        name:"Rody",
        gender:"female",
        nationality:"egyptian",
        identificationType:"passport",
        identificationNumber:"12345678",
        password:"zeft1111",
        birthdate:"1983-12-12",
        address:"rehab",
        }
        });
        const admin = await axios.get('http://desolate-oasis-18053.herokuapp.com/routes/api/admins')
        return admin
      }
       
      
    }
    module.exports = funcs;

// const axios = require('axios');
// const functions={
// 	getBooks: async () => {
//         const books = await axios.get('https://localhost:3000/api/admins/')
//         return books
        
//   }   
// }

// module.exports = functions;
// jest.setTimeout(30000);



// // axios.post('https://site.com/', {
// //   foo: 'bar'
// // })
// // axios.post('/user', {
// //     firstName: 'Fred',
// //     lastName: 'Flintstone'
// //   })
// //   .then(function (response) {
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   });
// // module.exports = funcs;
 jest.setTimeout(30000);