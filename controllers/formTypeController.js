const mongoose = require("mongoose");
const FormType = require("../Models/FormType");

exports.search = async (att, value) => {
  if (!att) {
    return await FormType.find()
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  }
  if (att === "_id") {
    return await FormType.findById(value)
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  }
  if (att == "formType") {
    return await FormType.find({ formType: value })
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  }
};

exports.create = async body => {
  return await FormType.create(body)
    .then(res => {
      return res;
    })
    .catch(err => {
      return { error: err };
    });
};

exports.update = async (att, value, body) => {
  if (!att) {
    return { error: "Can't update form, provide a value to update with" };
  }
  if (att === "_id") {
    var formType = await FormType.findByIdAndUpdate(value, body).catch(err => {
      return { error: err };
    });
    if (formType.error) return formType;
    return await FormType.findById(value)
      .then(res => {
        return res;
      })
      .catch(err => {
        return { error: err };
      });
  }
  if( att === "formType"){
    var formType = await FormType.updateMany({formType:value}, body).catch(err => {
        return { error: err };
      });
      if (formType.error) return formType;
      return await FormType.find({formType:value})
        .then(res => {
          return res;
        })
        .catch(err => {
          return { error: err };
        });
  }
};

exports.remove = async (att,value)=>{
    if (!att) {
        return {error: "Can't be deleted , Please provide an attribute to delete with"}
      }
      if (att === "_id") {
        return await FormType.findByIdAndDelete(value)
          .then(res => {
            return res;
          })
          .catch(err => {
            return { error: err };
          });
      }
      if (att == "formType") {
        return await FormType.deleteMany({ formType: value })
          .then(res => {
            return res;
          })
          .catch(err => {
            return { error: err };
          });
      }
}
