const orm = require("../config/orm");

const role = {
  getTableData: (cb) => {
    orm.getRoleTableData((response) => {
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
  delete: (userWhereValue, cb) => {
    orm.simpleDelete("roles", "id", "=", userWhereValue, (response) => {
      cb(response);
    });
  },
};

module.exports = role;
