const express = require("express"); // Se carga el módulo Express
const app = express(); // Se crea la instancia de Express que permitirá acceder a toda su funcionalidad.

// Este código responderá a una petición GET en el recurso por defecto '/', y solamente a ese.
app.get("/", function (req, res) {
  res.send("¡Hola Mundo!");
});

// Inicia el servidor en la dirección de loopback y puerto 3000
app.listen(3000, function () {
  console.log("Ejemplo de app escuchando en el puerto 3000");
});
