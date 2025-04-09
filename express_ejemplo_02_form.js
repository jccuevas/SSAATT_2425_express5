const express = require("express"); // Se carga el módulo Express
const path = require("path"); // Se carga el módulo path para gestionar rutas de archivos

const app = express(); // Se crea la instancia de Express que permitirá acceder a toda su funcionalidad.

app.use(express.static(path.join(__dirname, "/public"))); // Ruta a los recursos estáticos, normalmente CSS o html sin personalizar

app.use(express.urlencoded({ extended: true })); // Middleware para analizar los datos del formulario
// Así podremos acceder a cada propiuedad del formulario como req.body.nombrePropiedad

//Recibe los datos del formulario en formulario.html
app.post("/submit", function (req, res) {
  console.log("Petición POST recibida...");
  output = `<ul><li>Nombre: ${req.body.nombre}</li><li>Apellido: ${req.body.apellido}<li>Edad: ${req.body.edad}</li></ul>`;
  res.send(output); // Responde con los datos recibidos
});

SERVER_PORT = 3000; // Puerto del servidor por defecto
// Inicia el servidor en la dirección de loopback y puerto 3000
app.listen(SERVER_PORT, function (error) {
  if (error) {
    console.error("Error al iniciar el servidor:", error);
    return;
  } else {
    console.log("Ejemplo de app escuchando en el puerto " + SERVER_PORT);
  }
});
