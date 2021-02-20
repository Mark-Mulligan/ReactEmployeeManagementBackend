const orm = require("../config/orm");

const department = {
  getTableData: (cb) => {
    orm.getDepartmentTableData((response) => {
      cb(response);
    });
  },
  getOne: (departmentId, cb) => {
    orm.getSingleDepartment(departmentId, (response) => {
      cb(response);
    });
  },
  getNamesAndIds: (cb) => {
    orm.simpleSelect(`name, id`, "departments", (response) => {
      cb(response);
    });
  },
  getRolesInDepartment: (departmentId, cb) => {
    orm.simpleSelectWithWhere(
      "title, id",
      "roles",
      "department_id",
      "=",
      departmentId,
      (response) => {
        cb(response);
      }
    );
  },
  create: (valuesArr, cb) => {
    orm.simpleInsert("departments", ["name"], valuesArr, (response) => {
      cb(response);
    });
  },
  delete: (userWhereValue, cb) => {
    orm.simpleDelete("departments", "id", "=", userWhereValue, (response) => {
      cb(response);
    });
  },
};

module.exports = department;
