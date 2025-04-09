const express = require("express"); // Se carga el módulo Express
const app = express(); // Se crea la instancia de Express que permitirá acceder a toda su funcionalidad.

// Este código responderá a una petición GET en el recurso por defecto '/', y solamente a ese.
app.get("/", function (req, res) {
  res.send("¡Hola Mundo!");
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
