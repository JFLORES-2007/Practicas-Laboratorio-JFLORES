// Validar número positivo, negativo o cero
// Solicite un número al usuario usando readline.
// Verifique si es positivo, negativo o cero. Muestre un mensaje que indique el 
// resultado: "El número es positivo", "El número es negativo" o "El número es cero".

// Importamos el módulo readline
const readline = require("readline");

// Creamos la interfaz para leer datos del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos un número al usuario
rl.question("Ingrese un número: ", function(respuesta) {

    // Convertimos la respuesta a número
    let numero = Number(respuesta);

    // Verificamos si el número es positivo
    if (numero > 0) {
        console.log("El número es positivo");
    } 
    // Verificamos si el número es negativo
    else if (numero < 0) {
        console.log("El número es negativo");
    } // Si no es positivo ni negativo, es cero
    else {
        console.log("El número es cero");
    }

    rl.close();
});