Drop Database IF exists company_db;
CREATE DATABASE company_db;

Use company_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY Key,
    name VARCHAR(30),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW()
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY Key,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT PRIMARY Key,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
);