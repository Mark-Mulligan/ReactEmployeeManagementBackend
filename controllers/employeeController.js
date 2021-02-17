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
  if (managerId === 0) {
    employee.create([firstName, lastName, Number(roleId), null], (data) => {
      res.json(data);
    });
  } else {
    employee.create(
      [firstName, lastName, Number(roleId), Number(managerId)],
      (data) => {
        res.json(data);
      }
    );
  }
});

router.get("/employees/name-id", (req, res) => {
  if (req.query.excludeid) {
    employee.getManagersForEdit(req.query.excludeid, (data) => {
      res.json(data);
    });
  } else {
    employee.getManagersForForm((data) => {
      res.json(data);
    });
  }
});

// returns single employee
router.get("/employee/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  employee.getOne(id, (data) => {
    res.json(data);
  });
});

router.put("/employee/:id", (req, res) => {
  const id = req.params.id;
  let { firstName, lastName, roleId, managerId } = req.body;

  console.log(roleId, typeof roleId);
  console.log(managerId, typeof managerId);

  employee.update([firstName, lastName, roleId, managerId], id, (data) => {
    res.json(data);
  });
});

module.exports = router;
