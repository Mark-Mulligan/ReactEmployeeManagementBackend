const express = require("express");
const router = express.Router();
const employee = require("../models/employee");

// returns all employees
router.get("/employees", (req, res) => {
  employee.getTableData("id", (data) => {
    res.json(data);
  });
});

router.post("/employees", (req, res) => {
  const { firstName, lastName, roleId, managerId } = req.body;
  employee.create(
    [firstName, lastName, Number(roleId), Number(managerId)],
    (data) => {
      res.json(data);
    }
  );
});

// returns single employee
router.get("/employee/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  employee.getOne(id, (data) => {
    res.json(data);
  });
});

router.get("/employees/name-id", (req, res) => {
  console.log(req.query);
  if (req.query.excludeid) {
    employee.getManagersForEdit(req.query.excludeid, data => {
      res.json(data);
    });
  } else {
    employee.getManagersForForm((data) => {
      res.json(data);
    });
  }
});

module.exports = router;
