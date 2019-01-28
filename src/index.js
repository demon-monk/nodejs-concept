const crypto = require("crypto");

function doWork(fn) {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    fn();
  });
}

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  doWork(() => {
    res.send("Hi there!");
  });
});
app.get("/fast", (req, res) => {
  res.send("this is fast");
});
app.listen(3000);
