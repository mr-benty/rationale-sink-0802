const { exec } = require("child_process");
const express = require("express");
const app = express();

// deliberately vulnerable: command injection sink for autofix generation test
app.get("/ping", (req, res) => {
  const host = req.query.host;
  exec("ping -c 1 " + host, (err, stdout) => {
    res.send(stdout);
  });
});

module.exports = app;
