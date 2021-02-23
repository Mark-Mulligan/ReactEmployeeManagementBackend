const express = require("express");
const { getTableData: getRoles } = require("../models/department");
const router = express.Router();
const role = require("../models/role");

router.get("/roles", (req, res) => {
  role.getTableData((data) => {
    res.json(data);
  });
});

router.post("/roles", (req, res) => {
  const title = req.body.title;
  const salary = Number(req.body.salary);
  const departmentId = Number(req.body.departmentId);

  role.create([title, salary, departmentId], (data) => {
    res.json(data);
  });
});

router.get("/role/:id", (req, res) => {
  const roleId = req.params.id;
  role.getOne(roleId, (data) => {
    res.json(data);
  });
});

router.put("/role/:id", (req, res) => {
  const roleId = req.params.id;
  const { title, salary, departmentId } = req.body;
  role.update([title, salary, departmentId], roleId, (data) => {
    res.json(data);
  });
});

router.delete("/role/:id", (req, res) => {
  const roleId = req.params.id;
  role.delete(roleId, (data) => {
    res.json(data);
  });
});

module.exports = router;
