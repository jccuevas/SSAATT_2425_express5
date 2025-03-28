const express = require("express");

//const urlMongoDB = require("../conf"); //URL configurada para acceder a MongoDB
//const MongoClient = require("mongodb").MongoClient; // Módulo de gestión MongoDB

const router = express.Router();

const COOKIE_NAME_SESSION = "session";
const COOKIE_NAME_USER = "user";
/**
 * Los datos se esperan en JSON
 */
router.post("/", function (req, res) {
  console.log("[SERVIDOR][/login] Recibido: " + JSON.stringify(req.body));

  /*
  const client = new MongoClient(urlMongoDB); //Conexión con MongoDB

  const db = client.db("examenes"); //Se selecciona la base de datos
  const collection = db.collection("users"); //Se optiene la colección de documentos deseada
  collection
    .findOne({ user: req.body.user }) //Se busca una sola coincidencia y se devuelve una promese
    .then((result) => {
      if (result !== null) {
        console.log("[SERVIDOR][/login] Encontrado:" + JSON.stringify(result));
        if (req.body.password === result.password) {
          //Clave correcta
          console.log("Clave correcta");
          res.cookie(COOKIE_NAME_SESSION, "logeado_" + Date.now(), {
            maxAge: 60000,
          });
          res.cookie(COOKIE_NAME_USER, req.body.user, { maxAge: 60000 });
          res.status(200).end();
        } else {
          //Clave incorrecta
          console.log("[SERVIDOR][/login] Error de autenticación.");
          res.status(401).end();
        }

      } else {
        //Usuario desconocido
        console.log("Usuario desconocido");
        res.status(401).end();
        
      }
    })
    .catch(() => {
      res.status(500).end();
    })
    .finally(()=>client.close());
    */
});

module.exports = router;
