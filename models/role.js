const orm = require("../config/orm");

const role = {
  getTableData: (cb, errCb) => {
    orm.getRoleTableData(
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  getOne: (roleId, cb, errCb) => {
    orm.getSingleRole(
      roleId,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  create: (userValuesArr, cb, errCb) => {
    orm.simpleInsert(
      "roles",
      ["title", "salary", "department_id"],
      userValuesArr,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  update: (userValuesArr, roleId, cb, errCb) => {
    orm.simpleUpdate(
      "roles",
      ["title", "salary", "department_id"],
      userValuesArr,
      roleId,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  delete: (userWhereValue, cb, errCb) => {
    orm.simpleDelete(
      "roles",
      "id",
      "=",
      userWhereValue,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  getBarChartData: (cb, errCb) => {
    orm.getRoleBarChartData(
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
};

module.exports = role;
