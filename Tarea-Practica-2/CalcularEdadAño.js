// ====================================================================================
// Tarea 3: Calcular edad y años de experiencia
// Solicite al usuario su año de nacimiento. Obtenga el año actual, calcule su edad y
// muestre: "Tu edad aproximada es: X años."
// ====================================================================================

// Importamos el módulo readline
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos al usuario
rl.question("Ingrese su año de nacimiento: ", (añoNacimiento) => {

    // Creamos  Date para obtener la fecha actual
    let fecha = new Date();

    // Obtenemos el año actual
    let año = fecha.getFullYear();

    // Calculamos la edad restando el año de nacimiento al año actual
    let edad = año - añoNacimiento;

    // Mostramos en consola
    console.log(`Su edad aproximada es de: ${edad} años.`);


    rl.close();
});