const express = require("express");
const router = express.Router();
const role = require("../models/role");

router.get("/roles", (req, res) => {
  role.getAll((data) => {
    res.json(data);
  });
});

router.get("/roles/name-id", (req, res) => {
  role.getDatarForForm((data) => {
    res.json(data);
  });
});

module.exports = router;
