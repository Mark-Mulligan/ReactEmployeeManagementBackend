const orm = require("../config/orm");

const employee = {
  getTableData: (orderby, cb) => {
    orm.getEmployeeTableData(orderby, (response) => {
      cb(response);
    });
  },
  getOne: (id, cb) => {
    orm.getSingleEmployee(id, (response) => {
      cb(response);
    });
  },
  getEditData: (employeeId, cb) => {
    orm.simpleSelect(
      "first_name, last_name, role_id, manager_id",
      "employees",
      cb
    );
  },
  getManagersForForm: (cb) => {
    orm.simpleSelect(
      `id, CONCAT(first_name, ' ', last_name) as manager`,
      "employees",
      (response) => {
        cb(response);
      }
    );
  },
  getManagersForEdit: (userWhereValue, cb) => {
    orm.simpleSelectWithWhere2(
      `id, CONCAT(first_name, ' ', last_name) as manager`,
      "employees",
      "id",
      "!=",
      userWhereValue,
      (response) => {
        cb(response);
      }
    );
  },
  create: (userValuesArr, cb) => {
    orm.simpleInsert(
      "employees",
      ["first_name", "last_name", "role_id", "manager_id"],
      userValuesArr,
      (response) => {
        cb(response);
      }
    );
  },
};

module.exports = employee;
