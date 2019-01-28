const https = require("https");
const crypto = require("crypto");
const fs = require('fs')
const startTime = Date.now();

function doRequest() {
  https
    .request("https://baidu.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log('Request:', Date.now() - startTime);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`Hash:`, Date.now() - startTime);
  });
}

doRequest()

for (let i = 0; i < 4; i++) {
    doHash()
}

fs.readFile('multiTasks.js', 'utf8', () => {
    console.log('FS:', Date.now() - startTime)
})



