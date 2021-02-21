const express = require("express");
const router = express.Router();
const department = require("../models/department");

router.get("/departments", (req, res) => {
  department.getTableData((data) => {
    res.json(data);
  });
});

router.post("/departments", (req, res) => {
  const departmentName = req.body.departmentName;
  department.create([departmentName], (data) => {
    res.json(data);
  });
});

router.get("/department/:id", (req, res) => {
  const departmentId = req.params.id;
  department.getOne(departmentId, (data) => {
    res.json(data);
  });
});

router.delete("/department/:id", (req, res) => {
  const departmentId = req.params.id;
  department.delete(departmentId, (data) => {
    res.json(data);
  });
});

router.get("/departments/name-id", (req, res) => {
  department.getNamesAndIds((data) => {
    res.json(data);
  });
});

router.get("/departments/:id/roles", (req, res) => {
  const departmentId = req.params.id;
  department.getRolesInDepartment(departmentId, (data) => {
    res.json(data);
  });
});

module.exports = router;
