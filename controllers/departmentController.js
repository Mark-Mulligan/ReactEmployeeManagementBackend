const express = require("express");
const router = express.Router();
const department = require("../models/department");

router.get("/departments", (req, res) => {
  department.getAll((data) => {
    res.json(data);
  });
});

//router.get("/departments/:id" (req, res) => {
  
//})

module.exports = router;
