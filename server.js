// Packages
const express = require("express");
const path = require("path");

// Server variables 
const PORT = 3000;
const app = express();

// Server Settings
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Responses
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/src/index.html"));
});

// Server Startup
app.listen(PORT);
module.exports = app;