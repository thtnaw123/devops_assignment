const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Halo there! ");
});

app.get("/api", (req, res) => {
  res.send("another api endpoint");
});
app.listen(5000, (req, res) => {
  console.log("listening on port 5000...");
});

console.log("logging...");
