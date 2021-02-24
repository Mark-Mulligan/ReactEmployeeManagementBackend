const connection = require("./connection.js");

const orm = {
  simpleSelect: (columns, table, cb) => {
    const queryString = `SELECT ${columns} FROM ${table};`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      //console.log(result);
      return cb(result);
    });
  },
  simpleUpdate: (table, updateKeysArr, userValuesArr, targetId, cb) => {
    let setStatementSql = "";
    for (let i = 0; i < updateKeysArr.length; i++) {
      if (i === updateKeysArr.length - 1) {
        setStatementSql += `${updateKeysArr[i]} = ?`;
      } else {
        setStatementSql += `${updateKeysArr[i]} = ?,`;
      }
    }

    const queryString = `UPDATE ${table} SET ${setStatementSql} WHERE id = ?;`;
    connection.query(
      queryString,
      [...userValuesArr, targetId],
      (err, result) => {
        console.log(queryString);
        if (err) throw err;
        return cb(result);
      }
    );
  },
  simpleSelectWithWhere: (
    columns,
    table,
    whereKey,
    whereComparison,
    userWhereValue,
    cb
  ) => {
    const queryString = `SELECT ${columns} FROM ${table} WHERE ${whereKey} ${whereComparison} ?;`;
    connection.query(queryString, [userWhereValue], (err, result) => {
      if (err) throw err;
      console.log(result);
      return cb(result);
    });
  },
  simpleInsert: (table, columnsArr, userValuesArr, cb) => {
    const queryString = `INSERT INTO ?? (??) VALUES (?)`;
    console.log(queryString);
    connection.query(
      queryString,
      [table, columnsArr, userValuesArr],
      (err, result) => {
        if (err) throw err;
        return cb(result);
      }
    );
  },
  simpleDelete: (table, whereKey, whereComparison, userWhereValue, cb) => {
    const queryString = `DELETE FROM ${table} where ${whereKey} ${whereComparison} ?;`;

    connection.query(queryString, [userWhereValue], (err, result) => {
      if (err) throw err;
      console.log(result);
      return cb(result);
    });
  },
  getEmployeeTableData: (orderBy, cb) => {
    const queryString = `Select a.id, a.first_name, a.last_name, roles.title, 
        departments.name as department, roles.salary, CONCAT(b.first_name, ' ', b.last_name) as manager
        FROM employees a join roles on a.role_id = roles.id 
        join departments on roles.department_id = departments.id
        left join employees b on b.id = a.manager_id or a.manager_id = null
        order by ${orderBy}`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      return cb(result);
    });
  },
  getSingleEmployee: (id, cb) => {
    const queryString = `Select a.id, a.first_name, a.last_name, roles.title, roles.id as role_id, departments.id as department_id, 
        departments.name as department, roles.salary, a.manager_id, CONCAT(b.first_name, ' ', b.last_name) as manager
        FROM employees a join roles on a.role_id = roles.id 
        join departments on roles.department_id = departments.id
        left join employees b on b.id = a.manager_id or a.manager_id = null
        WHERE a.id = ${id}`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      //console.log(result);
      return cb(result);
    });
  },
  getSingleRole: (roleId, cb) => {
    const queryString = `SELECT roles.id, roles.title, roles.salary, 
    departments.name, departments.id as department_id, count(employees.id) as employees, sum(roles.salary) as roleUtilization
    from roles left join employees on (roles.id = employees.role_id)
    left join departments on (roles.department_id = departments.id)
    group by roles.id having roles.id = ?;`;

    connection.query(queryString, [roleId], (err, result) => {
      if (err) throw err;
      console.log(result);
      return cb(result);
    });
  },

  getSingleDepartment: (departmentId, cb) => {
    const queryString = `SELECT departments.id, departments.name, 
    count(employees.id) as employees, 
    count(distinct roles.id) as roles, 
    SUM(roles.salary) as departmentUtilization       
    from departments
    left join roles
    on (roles.department_id = departments.id)
    left join employees
    on (employees.role_id = roles.id)
    group by
        departments.id
	  having departments.id = ?;`;

    connection.query(queryString, [departmentId], (err, result) => {
      if (err) throw err;
      console.log(result);
      return cb(result);
    });
  },

  getRoleTableData: (cb) => {
    const queryString = `select roles.id, title, salary, departments.name as department from roles 
        join departments where roles.department_id = departments.id;`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      return cb(result);
    });
  },

  getDepartmentTableData: (cb) => {
    const queryString = `SELECT departments.id, departments.name, 
    count(employees.id) as employees, 
    count(distinct roles.id) as roles, 
    SUM(roles.salary) as departmentUtilization       
    from departments
    left join roles
    on (roles.department_id = departments.id)
    left join employees
    on (employees.role_id = roles.id)
    group by
        departments.id;`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      return cb(result);
    });
  },

  getRoleBarChartData: (cb) => {
    const queryString = `Select roles.salary, roles.title from roles order by roles.salary;`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      return cb(result);
    });
  },
};

module.exports = orm;
