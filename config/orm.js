const connection = require("./connection.js");

const orm = {
  getAllEmployees: (orderBy, cb) => {
    const queryString = `Select a.id, a.first_name, a.last_name, roles.title, 
        departments.name as department, roles.salary, CONCAT(b.first_name, ' ', b.last_name) as manager
        FROM employees a join roles on a.role_id = roles.id 
        join departments on roles.department_id = departments.id
        left join employees b on b.id = a.manager_id or a.manager_id = null
        order by ${orderBy}`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
      return cb(result);
    });
  },

  getSingleEmployee: (id, cb) => {
    const queryString = `Select a.id, a.first_name, a.last_name, roles.title, 
        departments.name as department, roles.salary, CONCAT(b.first_name, ' ', b.last_name) as manager
        FROM employees a join roles on a.role_id = roles.id 
        join departments on roles.department_id = departments.id
        left join employees b on b.id = a.manager_id or a.manager_id = null
        WHERE a.id = ${id}`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
      return cb(result);
    });
  },

  getAllRoles: (cb) => {
    const queryString = `select roles.id, title, salary, departments.name as department from roles 
        join departments where roles.department_id = departments.id;`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      return cb(result);
    });
  },

  getAllDepartments: (cb) => {
    const queryString = `SELECT departments.id, departments.name, 
    count(roles.department_id) as employees, 
    count(distinct roles.id) as roles, 
    SUM(roles.salary) as departmentUtilization       
    from departments
    join roles
    on (roles.department_id = departments.id)
    join employees
    on (employees.role_id = roles.id)
    group by
        departments.id;`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      return cb(result)
    })
  }
};

module.exports = orm;
