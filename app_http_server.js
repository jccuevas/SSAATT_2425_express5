const http = require("node:http"); // Módulo de Node.js para una servidor HTTP, si se quiere usar HTTPS se debe
// cargar el módulo node:https
const DEFAULT_HOSTNAME = "127.0.0.1"; // Valor por defecto de la IP
const DEFAULT_PORT = 3000; // Valor por defecto de la IP

// Este sencillo código es nuestro servidor web, el cual responsde siempre con los mismos datos.
// Añadir comportamientos diferenciados requiere del análisis de la petición recibida en req
// Para facilitar esto existen middleware o frameworks como Express
const server = http.createServer((req, res) => {
  res.statusCode = 200; //Código de estado
  res.setHeader("Content-Type", "text/plain"); //Tipo de contenido
  res.end("Hola Mundo"); // Datos de la respuesta
});

// Se inicia el servidor.
server.listen(DEFAULT_PORT, DEFAULT_HOSTNAME, () => {
  console.log(
    `El servidor se está ejecutando en http://${DEFAULT_HOSTNAME}:${DEFAULT_PORT}/`
  );
});
