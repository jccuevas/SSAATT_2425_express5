/*
 * Ejemplos Node.JS para la asignatura Servicios y Aplicaciones Telemáticas
 * TITULACIÓN: Grado en Ingeniería de tecnologías de telecomunicación (14312020)
 * TITULACIÓN: Doble Grado Ing. de tecnologías de la telecomunicación e Ing. telemática (15212007)
 * TITULACIÓN: Grado en Ingeniería telemática (14512016)
 * CENTRO: ESCUELA POLITÉCNICA SUPERIOR (LINARES)
 * CURSO ACADÉMICO: 2023-2024
 * AUTOR: Juan Carlos Cuevas Martínez
 */

const VERSION = "1.0";

// const http = require("node:http"); // Módulo de conexiones HTTP
const fs = require("node:fs"); // Módulo para la gestión de archivos.
const path = require("node:path"); // Módulo para manejar rutas de archivos
const os = require("node:os"); // Módulo de información relativa al sistema operativo y el host
const dns = require("node:dns"); // Módulo para emplear el servicio DNS

const express = require("express"); // Módulo de express
const cors = require("cors");

const app = express(); // Instancia de Express

const DEFAULT_PORT = 8083; // Puerto del servidor por defecto
let PORT = DEFAULT_PORT; // Para poder actualizarla por los argumentos del programa.

// Respuestas del API
const STATUS_ERROR = 500;
const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_CLIENTERROR = 400;
const STATUS_NOTFOUND = 404;

app.use(express.json()); // Preparar req.body para contenido JSON
app.use(express.urlencoded({ extended: true })); // Preparar req.body para contenido application/x-www-form-urlencoded

// Ruta a los recursos estáticos, normalmente CSS o html sin personalizar
app.use(express.static(path.join(__dirname, "/public")));

app.disable("x-powered-by");

app.use(express.json()); // para procesar application/json
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());

// Rutas a los servicios
//const loginRouter = require("./routes/login");
//app.use("/login", loginRouter); // Ruta para el servicio login
app.get(/ab?cd/, async (req, res) => {
  console.log("GET");
  res.status(200).json({ hola: req.path });
});

app.get("/.-param/:param", async (req, res) => {
  console.log("GET /param");
  res.status(200).json({ param: req.params.param });
});

app.post("/login", (req, res) => {
  console.log("POST /login");
  res.status(201).json(req.body).end();
});

app.post("/shutdown", (req, res) => {
  console.log("POST /shutdown");
  if (req.body.shutdown != undefined) {
    res
      .status(200)
      .send("Shutting down in " + req.body.shutdown + " ms")
      .end();
    setTimeout(() => {
      console.log("Shutting down");
      process.exit(1);
    }, req.body.shutdown);
  } else {
    res.status(400).end();
  }
});

// Error 404
app.use(async (req, res) => {
  console.log("404:" + req.method + " " + req.path);
  res.status(404).end("404 no encontrado.");
});

console.log(`[SERVIDOR] Servidor Node.js 
           Servicios y Aplicaciones Telemáticas.
           Versión ${VERSION}
-------------------------------------------------`);

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// Nos quedamos con el primer parámetro de la líneas de comandos (que es el tercero. el primero el nombre del programa, el segundo la ruta
const argumentos = process.argv.slice(2);
// El primer parámetro se convierte en el puerto

console.log("[SERVIDOR] Argumentos de petición:" + argumentos);
if (argumentos.length > 0) {
  isNaN(parseInt(argumentos[0]))
    ? (PORT = DEFAULT_PORT)
    : (PORT = parseInt(argumentos[0]));
  console.log("Nuevo puerto de escucha del servidor:" + PORT);
}

// Se busca la ip del host
dns.lookup(os.hostname(), 4, function (err, address, family) {
  // 4 para IPv4
  if (err) {
    console.log("[SERVIDOR] Error al obtener la IP del servidor");
  } else {
    console.log("[SERVIDOR] IP del servidor: " + address.toString());
    // Se inicia el servidor una vez se ha buscado la ip
    const server = app.listen(PORT, address.toString(), (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(
          `[SERVIDOR] Servidor ejecutándose en http://${
            server.address().address
          }:${server.address().port}`
        );
      }
    });
  }
});
