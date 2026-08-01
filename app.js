const express = require("express");
const app = express();
app.get("/x", (req, res) => {
  res.send("<h1>" + req.query.q + "</h1>");
});
app.listen(3000);
