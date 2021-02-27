const orm = require("../config/orm");

const department = {
  getTableData: (cb, errCb) => {
    orm.getDepartmentTableData(
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  getOne: (departmentId, cb, errCb) => {
    orm.getSingleDepartment(
      departmentId,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  getNamesAndIds: (cb, errCb) => {
    orm.simpleSelect(
      `name, id`,
      "departments",
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  getRolesInDepartment: (departmentId, cb, errCb) => {
    orm.simpleSelectWithWhere(
      "title, id",
      "roles",
      "department_id",
      "=",
      departmentId,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  create: (valuesArr, cb, errCb) => {
    orm.simpleInsert(
      "departments",
      ["name"],
      valuesArr,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  update: (userValuesArr, departmentId, cb, errCb) => {
    orm.simpleUpdate(
      "departments",
      ["name"],
      userValuesArr,
      departmentId,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
  delete: (userWhereValue, cb, errCb) => {
    orm.simpleDelete(
      "departments",
      "id",
      "=",
      userWhereValue,
      (response) => cb(response),
      (err) => errCb(err)
    );
  },
};

module.exports = department;
