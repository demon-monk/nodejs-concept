const https = require("https");
const startTime = Date.now();

function doRequest() {
  https
    .request("https://baidu.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - startTime);
      });
    })
    .end();
}

for(let i = 0; i < 6; i++) {
    doRequest()
}
