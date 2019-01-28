process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
const crypto = require("crypto");

function doWork(fn) {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    fn();
  });
}

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
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
}
