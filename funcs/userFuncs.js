const axios = require('axios');

const functions = {
        GetUsers: async () => {

            const users = await axios.get('http://desolate-oasis-18053.herokuapp.com/routes/api/users')
            return users
            
        }
        
};
module.exports = functions;

jest.setTimeout(30000);