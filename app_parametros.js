/* Este script muestra todos los parámetros empleados en su llamada y también procesa uno de ellos.
Emplea la línea de ejemplo para apagar el proceso. */

//Usa: node app_parametros shutdown=5000

// El objeto process es el encargado de gestionar diversos aspectos del proceso en ejecución
// y puede acceder a los parámetros empleados al llamar al script.
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`); //Se sacan por consola todos los parámetros.
  if (index >= 2) {
    // el índice 0 y 1 son la ruta a node y la ruta al script ejecutado
    //Buscamos un parámetro shutdown
    const parts = val.split("="); // Se extraen las dos partes del parámetro
    if (parts.length == 2) {
      //Si tenía el formato correcto comprobamos los valores permitidos
      if (parts[0] == "shutdown") {
        setTimeout(() => {
          console.log("Apagando el programa...");
          clearInterval(message);
          process.exit(1);
        }, parseInt(parts[1])); // Establecemos un temporizador para apagar el programa en los milisegundos
        // pasados como parámetros.

        const message = setInterval(
          () => console.log("Esperando..."),
          parts[1] / 5
        );
      }
    }
  }
});
