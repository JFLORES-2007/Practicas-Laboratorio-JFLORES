// Comparar calificaciones
// Solicite al usuario dos calificaciones (0-100). Compare cuál es la más alta.
//  Si son iguales, indíquelo. Muestre un mensaje descriptivo con el resultado.

// Importamos el módulo readline
const readline = require("readline");

// Creamos la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos la primera calificación
rl.question("Ingrese la primera calificación: ", function(respuesta1) {

    let calificacion1 = Number(respuesta1);

    // Solicitamos la segunda calificación
    rl.question("Ingrese la segunda calificación: ", function(respuesta2) {

        let calificacion2 = Number(respuesta2);

        // Comparamos las calificaciones
        if (calificacion1 > calificacion2) {
            console.log("La primera calificación es mayor.");
        }else if (calificacion2 > calificacion1) {
            console.log("La segunda calificación es mayor.");
        }else {
            console.log("Ambas calificaciones son iguales.");
        }

        rl.close();
    });
});