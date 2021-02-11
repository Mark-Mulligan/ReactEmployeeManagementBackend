const express = require("express");
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
const employeeRoutes = require('./controllers/employeeController');
const roleRoutes = require('./controllers/roleController');
const departmentRoutes = require('./controllers/departmentController');

app.use(employeeRoutes);
app.use(roleRoutes);
app.use(departmentRoutes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});