const orm = require("../config/orm");

const department = {
  getAll: (cb) => {
    orm.getAllDepartments((response) => {
      cb(response);
    });
  },
  getNamesAndIds: (cb) => {
    orm.simpleSelect("name, id", "departments", (response) => {
      cb(response);
    });
  },
  getRoles: (departmentId, cb) => {
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
};

module.exports = department;
