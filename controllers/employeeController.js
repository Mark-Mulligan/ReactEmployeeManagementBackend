const express = require("express");
const router = express.Router();
const employee = require("../models/employee");

// returns all employees 
router.get("/employees", (req, res) => {
  employee.getAll("id", (data) => {
    res.json(data);
  });
});

// returns single employee
router.get("/employees/:id", (req, res) => {
  const id = req.params.id;
  employee.getOne(id, (data) => {
    res.json(data);
  })
});

module.exports = router;
