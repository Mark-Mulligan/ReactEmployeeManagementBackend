const orm = require("../config/orm");

const employee = {
  getAll: (orderby, cb) => {
    orm.getAllEmployees(orderby, (response) => {
      cb(response);
    });
  },
  getOne: (id, cb) => {
    orm.getSingleEmployee(id, (response) => {
      cb(response);
    });
  },
};

module.exports = employee;
