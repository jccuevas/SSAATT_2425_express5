const express = require("express"); // Se carga el módulo Express
const app = express(); // Se crea la instancia de Express que permitirá acceder a toda su funcionalidad.

// En esta petición se van a procesar varios manejadores de rutas y además se va a ver un ejemplo de uso de parámetros en la ruta
app.get(
  "/ruta/:miruta",
  function (req, res, next) {
    console.log("Esta es la primera ruta...");
    next(); // pasamos el control a la siguiente.
  },
  function (req, res, next) {
    console.log("Esta es la segunda ruta...");
    //Ahora se comprueba el valor del parámetro para parar la evolución o seguir
    if (req.params.miruta === "parar") {
      console.log("Saltamos...");
      next("route"); // Salimos de esta cadena de manejadores de ruta
    } else {
      next(); // pasamos el control a la siguiente.
    }
  },
  function (req, res, next) {
    console.log("Esta es la tercera y última ruta...");
    res.end("Llegamos al final...");
  }
);

app.get("/ruta/parar", function (req, res) {
  console.log(
    `Como el parámetro era 'parar' se ha saltado un manejador no next('route')`
  );
  res.end("Fin...");
});

// Inicia el servidor en la dirección de loopback y puerto 3000
app.listen(3000, function () {
  console.log("Ejemplo de app escuchando en el puerto 3000");
});
