const orm = require("../config/orm");

const role = {
  getAll: (cb) => {
    orm.getAllRoles((response) => {
      cb(response);
    });
  },
  create: (userValuesArr, cb) => {
    orm.simpleInsert('roles', ['title', 'salary', 'department_id'], userValuesArr, response => {
      cb(response);
    })
  }
};

module.exports = role;
