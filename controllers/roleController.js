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

  role.create([title, salary, departmentId], data => {
    res.json(data);
  })
})

module.exports = router;
