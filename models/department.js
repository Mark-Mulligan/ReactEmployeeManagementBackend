const orm = require("../config/orm");

const department = {
  getAll: (cb) => {
    orm.getAllDepartments(response => {
      cb(response);
    })
  }
}

module.exports = department;