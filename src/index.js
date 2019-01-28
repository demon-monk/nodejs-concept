const express = require("express");
const app = express();
function doWork(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}
app.get("/", (req, res) => {
  doWork(5000);
  res.send("Hi there!");
});
app.listen(3000);
