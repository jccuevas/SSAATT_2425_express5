const express = require("express"); // Se carga el módulo Express
const app = express(); // Se crea la instancia de Express que permitirá acceder a toda su funcionalidad.

//Responda con Hello World! en la página inicial:
app.get("/", function (req, res) {
  console.log("Petición GET recibida...");
  res.send("Hello World!");
});

//Responda a la solicitud POST en la ruta raíz (/), la página de inicio de la aplicación:
app.post("/", function (req, res) {
  console.log("Petición POST recibida...");
  res.send("Got a POST request");
});

//Responda a una solicitud PUT en la ruta /user:
app.put("/user", function (req, res) {
  console.log("Petición PUT recibida...");
  res.send("Got a PUT request at /user");
});

//Responda a una solicitud DELETE en la ruta /user:
app.delete("/user", function (req, res) {
  console.log("Petición DELETE recibida...");
  res.send("Got a DELETE request at /user");
});

SERVER_PORT = 3000; // Puerto del servidor por defecto
// Inicia el servidor en la dirección de loopback y puerto 3000
app.listen(SERVER_PORT, function (error) {
  if (error) {
    console.error(
      "Error al iniciar el servidor:",
      error.code + " [" + error.errno + "]"
    );
    return;
  } else {
    console.log("Ejemplo de app escuchando en el puerto " + SERVER_PORT);
  }
});
