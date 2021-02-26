Use company_db;

INSERT INTO departments (name) VALUES
('Management'),
('Sales'),
('Finance'),
('R&D'),
('Human Resources');

INSERT INTO roles (title, salary, department_id) VALUES
('CEO', 500000, 1),
('Regional Manager', 150000, 1),
('Lead Salesperson', 90000, 2),
('Salesperson', 70000, 2),
('Lead Accountant', 100000, 3),
('Accountant', 75000, 3),
('Analyst', 85000, 4),
('HR Rep', 50000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id, date_hired) VALUES
('David', 'Wallace', 1,  null, '2010-01-01'),
('Michael', 'Scott', 2, 1, '2010-01-01'),
('Dwight', 'Schrute', 3, 2, '2010-03-20'),
('Jim', 'Halpert', 4, 3, '2010-05-10'),
('Stanley', 'Hudson', 4, 3, '2011-02-12'),
('Creed', 'Bratton', 7, 2, '2011-04-15'),
('Andy', 'Bernard', 3, 3, '2012-08-12'),
('Oscar', 'Martinez', 5, 2, '2013-10-09'),
('Angela', 'Martin', 6, 8, '2014-11-02'),
('Kevin', 'Malone', 6, 8, '2014-12-01'),
('Ryan', 'Howard', 7, 2, '2015-06-23'),
('Gabe', 'Lewis', 8, 2, '2015-09-07');