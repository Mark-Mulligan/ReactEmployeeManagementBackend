const orm = require("../config/orm");

const role = {
  getAll: (cb) => {
    orm.getAllRoles((response) => {
      cb(response);
    });
  },
  getDatarForForm: (cb) => {
    orm.formDataForRoles((response) => {
      cb(response);
    });
  },
};

module.exports = role;
