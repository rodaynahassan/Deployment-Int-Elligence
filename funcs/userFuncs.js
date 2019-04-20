// const funcs= require('./funcs/userFuncs')
const axios = require("axios");
const mongoose = require("mongoose");
const User = require("../models/User");

const functions = {
  createLawyerOrReviewer: async (
    userType1,
    name1,
    gender1,
    nationality1,
    identificationType1,
    identificationNumber1,
    birthdate1,
    address1,
    email1,
    password1,
    telephone1
  ) => {
    return await axios({
      method: "post",
      url: "http://localhost:5000/routes/api/admins/register",
      //url:'http://desolate-oasis-18053.herokuapp.com/routes/api/admins/register',
      data: {
        userType: userType1,
        name: name1,
        gender: gender1,
        nationality: nationality1,
        identificationType: identificationType1,
        identificationNumber: identificationNumber1,
        birthdate: birthdate1,
        address: address1,
        email: email1,
        password: password1,
        telephone: telephone1
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  },
  createInvestor: async (
    userType1,
    name1,
    gender1,
    nationality1,
    identificationType1,
    identificationNumber1,
    birthdate1,
    address1,
    email1,
    password1,
    investorType1
  ) => {
    return await axios({
      method: "post",
      url: "http://localhost:5000/routes/api/users/register",
      //url:'http://desolate-oasis-18053.herokuapp.com/routes/api/admins/register',
      data: {
        userType: userType1,
        name: name1,
        gender: gender1,
        nationality: nationality1,
        identificationType: identificationType1,
        identificationNumber: identificationNumber1,
        birthdate: birthdate1,
        address: address1,
        email: email1,
        password: password1,
        investorType: investorType1
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  },
  loginUser: async (password1, email1) => {
    return await axios({
      method: "post",
      url: "http://localhost:5000/routes/api/users/login",
      data: {
        password: password1,
        email: email1
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  },
  getAllUsers: async () => {
    return await axios({
      method: "get",
      url: "http://localhost:5000/routes/api/users//getAllUsers"
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  },
  getUserById: async (token) => {
    // get certain user

    return await axios({
      method: "get",
      url: "http://localhost:5000/routes/api/users/CertainUser",
      headers: { "Authorization": token }
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  },
  updateUser: async (
    token,
    name1,
    gender1,
    nationality1,
    identificationType1,
    identificationNumber1,
    birthdate1,
    address1,
    email1,
    password1,
    investorType1
  ) => {
    return await axios({
        method: "put",
        url: "http://localhost:5000/routes/api/users/updateUser",
        headers: {"Authorization": token },
      data: {
        name:name1,
        gender:gender1,
        nationality:nationality1,
        identificationType:identificationType1,
        identificationNumber:identificationNumber1,
        birthdate:birthdate1,
        address:address1,
        email:email1,
        password:password1,
        investorType:investorType1
      }
    })
      .then(res => {
       return res;
      })
      .catch(err => {
        return { error: err}
      });
  },
  updateFormInUser: async (FormId, token) => {
    // update a form in a certain user
    return await axios({
      method: "put",
      url: "http://localhost:5000/routes/api/users/updateForm/" + FormId,
      headers: { "Authorization": token }
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  },
  deleteUser: async token => {
    return await axios({
      method: "delete",
      url: "http://localhost:5000/routes/api/users/delete",
      headers: { "Authorization": token }
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  },

  getFormById: async (FormId, token) => {
    // get certain form

    return await axios({
      method: "get",
      url: "http://localhost:5000/routes/api/forms/getSpecificform/" + FormId,
      headers: { "Authorization": token }
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  },
  getAllForms: async () => {
    // get all forms

    return await axios({
      method: "get",
      url: "http://localhost:5000/routes/api/forms/getAllForms"
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  }
};

jest.setTimeout(4000000);
module.exports = functions;
