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
  getManagersForForm: (employeeId, cb) => {
    orm.simpleSelectWithWhere(
      `id, CONCAT(first_name, ' ', last_name) as manager`,
      "employees",
      "id",
      "!=",
      employeeId,
      (response) => {
        cb(response);
      }
    );
  },
};

module.exports = employee;
