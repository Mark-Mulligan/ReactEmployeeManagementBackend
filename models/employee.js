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
  getManagersForForm: (cb, errCb) => {
    orm.simpleSelect(
      `id, CONCAT(first_name, ' ', last_name) as manager`,
      "employees",
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  getManagersForEdit: (userWhereValue, cb, errCb) => {
    orm.simpleSelectWithWhere(
      `id, CONCAT(first_name, ' ', last_name) as manager`,
      "employees",
      "id",
      "!=",
      userWhereValue,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  create: (userValuesArr, cb, errCb) => {
    orm.simpleInsert(
      "employees",
      ["first_name", "last_name", "role_id", "manager_id"],
      userValuesArr,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  update: (userValuesArr, employeeId, cb, errCb) => {
    orm.simpleUpdate(
      "employees",
      ["first_name", "last_name", "role_id", "manager_id"],
      userValuesArr,
      employeeId,
      (response) => cb(response),
      (err) => errCb(err)
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
