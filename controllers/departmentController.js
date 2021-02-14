const express = require("express");
const router = express.Router();
const department = require("../models/department");

router.get("/departments", (req, res) => {
  department.getAll((data) => {
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
  department.getRoles(departmentId, (data) => {
    res.json(data);
  });
});

module.exports = router;
