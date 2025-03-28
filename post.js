const http = require("node:http");
/*
const data = JSON.stringify({
  user: "userPost01",
  password: "12345",
  name: "Usuderio",
  surname: "Usández",
  email: "userPost01@users.com",
});
*/
const data = JSON.stringify({
  user: "usuario",
  password: "12345",
});

const options = {
  hostname: "labtelema.ujaen.es",
  port: 8083,
  path: "/login",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.write(data);
req.end();
