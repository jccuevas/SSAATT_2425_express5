const https = require("node:http");

const options = {
  hostname: "labtelema.ujaen.es",
  port: 8083,
  path: "/user",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode:
    ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
