SELECT *
FROM employees
    INNER JOIN roles ON roles.id = employees.role_id
    INNER JOIN departments ON departments.id  = roles.department_id; 

SELECT *
FROM employees
    INNER JOIN roles ON roles.id = employees.role_id
    Where department_id = 2;

SELECT departments.*, count(roles.department_id) as roles        
from departments
left join roles
on (roles.department_id = departments.id)
group by
    departments.id;

/* Gets number of employees in department */
SELECT departments.*, count(roles.department_id) as roles        
from departments
left join roles
on (roles.department_id = departments.id)
left join employees
on (employees.role_id = roles.id)
group by
    departments.id;

/* Returns department id, name, num employees, and utilization */
SELECT departments.id, departments.name, 
count(roles.department_id) as employees, 
count(distinct roles.id) as roles, 
SUM(roles.salary) as departmentUtilization       
from departments
join roles
on (roles.department_id = departments.id)
join employees
on (employees.role_id = roles.id)
group by
    departments.id;

/* query for individual department */
SELECT departments.id, departments.name, 
roles.title as roles, roles.salary as salary,
CONCAT(employees.first_name, ' ', employees.last_name) as employees    
from departments
join roles
on (roles.department_id = departments.id)
join employees
on (employees.role_id = roles.id)
Where departments.id = 1;

/* Get Additional data for Role Table */
SELECT roles.id, roles.title, roles.salary, 
departments.name, count(employees.id) as employees, sum(roles.salary) as roleUtilization
from roles left join employees on (roles.id = employees.role_id)
left join departments on (roles.department_id = departments.id)
group by roles.id;

/* Select invdividual role */
SELECT roles.id, roles.title, roles.salary, 
departments.name, count(employees.id) as employees, sum(roles.salary) as roleUtilization
from roles left join employees on (roles.id = employees.role_id)
left join departments on (roles.department_id = departments.id)
group by roles.id having roles.id = 3;