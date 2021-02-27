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
    employee.create([firstName, lastName, roleId, null], (data) => {
      res.json(data);
    });
  } else {
    employee.create([firstName, lastName, roleId, managerId], (data) => {
      res.json(data);
    });
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
  employee.getOne(id, (data) => {
    res.json(data);
  });
});

router.put("/employee/:id", (req, res) => {
  const id = req.params.id;
  let { firstName, lastName, roleId, managerId } = req.body;

  employee.update([firstName, lastName, roleId, managerId], id, (data) => {
    res.json(data);
  });
});

router.delete("/employee/:id", (req, res) => {
  const id = req.params.id;

  employee.deleteOne(id, (data) => {
    res.json(data);
  });
});

router.get("/api/employees/chartdata", (req, res) => {
  employee.getBarChartData(
    (data) => res.json(data),
    (err) => {
      res.status(500);
      res.json(err);
    }
  );
});

module.exports = router;
