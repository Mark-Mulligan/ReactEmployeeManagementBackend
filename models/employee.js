const orm = require("../config/orm");

const employee = {
  getTableData: (orderby, cb, errCb) => {
    orm.getEmployeeTableData(
      orderby,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  getBarChartData: (cb, errCb) => {
    orm.getEmployeeBarChartData(
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  getOne: (id, cb, errCb) => {
    orm.getSingleEmployee(
      id,
      (response) => cb(response),
      (err) => errCb(err)
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
    orm.simpleSelectWithWhere(
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
  update: (userValuesArr, employeeId, cb) => {
    orm.simpleUpdate(
      "employees",
      ["first_name", "last_name", "role_id", "manager_id"],
      userValuesArr,
      employeeId,
      (response) => {
        cb(response);
      }
    );
  },
  deleteOne: (userWhereValue, cb, errCb) => {
    orm.simpleDelete(
      "employees",
      "id",
      "=",
      userWhereValue,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
};

module.exports = employee;
