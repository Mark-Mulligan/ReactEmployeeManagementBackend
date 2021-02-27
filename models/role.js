const orm = require("../config/orm");

const role = {
  getTableData: (cb, errCb) => {
    orm.getRoleTableData(
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  getOne: (roleId, cb) => {
    orm.getSingleRole(roleId, (response) => {
      cb(response);
    });
  },
  create: (userValuesArr, cb) => {
    orm.simpleInsert(
      "roles",
      ["title", "salary", "department_id"],
      userValuesArr,
      (response) => {
        cb(response);
      }
    );
  },
  update: (userValuesArr, roleId, cb) => {
    orm.simpleUpdate(
      "roles",
      ["title", "salary", "department_id"],
      userValuesArr,
      roleId,
      (response) => {
        cb(response);
      }
    );
  },
  delete: (userWhereValue, cb) => {
    orm.simpleDelete("roles", "id", "=", userWhereValue, (response) => {
      cb(response);
    });
  },
  getBarChartData: (cb, errCb) => {
    orm.getRoleBarChartData(
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
};

module.exports = role;
